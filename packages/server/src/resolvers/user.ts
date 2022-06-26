import {
  Arg,
  Ctx,
  Field,
  InputType,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { MyContext } from "src/context";
import { User } from "@generated/type-graphql";
import argon2 from "argon2";
import { createAccessToken, createRefreshToken } from "../auth";
import { isAuth } from "../middlewares/auth/isAuth";

@InputType()
class UsernamePasswordInput {
  @Field()
  username: string;

  @Field()
  password: string;
}

@InputType()
class UserInput {
  @Field()
  email: string;
  @Field(() => UsernamePasswordInput)
  input: UsernamePasswordInput;
}

@ObjectType()
class FieldError {
  @Field()
  field: string;

  @Field()
  message: string;
}

@ObjectType()
class JwtToken {
  @Field()
  accessToken?: string;

  @Field()
  refreshToken?: string;
}

@ObjectType()
class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => User, { nullable: true })
  user?: User;

  @Field(() => JwtToken, { nullable: true })
  token?: JwtToken;
}

@Resolver()
export class UserResolver {
  @Query(() => [User])
  async users(@Ctx() { prisma }: MyContext): Promise<User[]> {
    let user;
    try {
      user = await prisma.user.findMany();
    } catch (err) {
      console.log(err);
      return [];
    }
    return user;
  }

  @Query(() => String)
  @UseMiddleware(isAuth)
  bye(@Ctx() { payload }: MyContext) {
    console.log(payload);
    return `your user id is: ${payload!.userId}`;
  }

  @Mutation(() => UserResponse)
  async register(
    @Arg("options") options: UserInput,
    @Ctx() { prisma }: MyContext
  ): Promise<UserResponse> {
    if (options.input.username.length <= 2) {
      return {
        errors: [
          {
            field: "username",
            message: "username length must be larger than 2",
          },
        ],
      };
    }
    if (options.input.password.length <= 2) {
      return {
        errors: [
          {
            field: "password",
            message: "password length must be larger than 2",
          },
        ],
      };
    }
    if (
      (await prisma.user.findUnique({ where: { email: options.email } })) !==
      null
    ) {
      console.log("error here");
      return {
        errors: [
          {
            field: "email",
            message: "email already be used",
          },
        ],
      };
    }

    const user = await prisma.user.create({
      data: {
        email: options.email,
        username: options.input.username,
        password: await argon2.hash(options.input.password, {
          type: argon2.argon2id,
        }),
      },
    });
    return { user };
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg("options") options: UsernamePasswordInput,
    @Ctx() { prisma, res }: MyContext
  ): Promise<UserResponse> {
    let user = await prisma.user.findUnique({
      where: {
        username: options.username,
      },
    });
    if (!user) {
      return {
        errors: [
          {
            field: "username",
            message: "username not register",
          },
        ],
      };
    }
    const valid = await argon2.verify(user.password, options.password, {
      type: argon2.argon2id,
    });
    if (!valid) {
      return {
        errors: [
          {
            field: "username or password",
            message: "username or password is incorrect",
          },
        ],
      };
    }

    res.cookie("jid", createRefreshToken(user), {
      httpOnly: true,
    });

    return {
      token: {
        accessToken: createAccessToken(user),
      },
    };
  }
}
