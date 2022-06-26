"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const type_graphql_1 = require("type-graphql");
const type_graphql_2 = require("@generated/type-graphql");
const argon2_1 = __importDefault(require("argon2"));
const auth_1 = require("../auth");
const isAuth_1 = require("../middlewares/auth/isAuth");
let UsernamePasswordInput = class UsernamePasswordInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UsernamePasswordInput.prototype, "username", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UsernamePasswordInput.prototype, "password", void 0);
UsernamePasswordInput = __decorate([
    (0, type_graphql_1.InputType)()
], UsernamePasswordInput);
let UserInput = class UserInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UserInput.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => UsernamePasswordInput),
    __metadata("design:type", UsernamePasswordInput)
], UserInput.prototype, "input", void 0);
UserInput = __decorate([
    (0, type_graphql_1.InputType)()
], UserInput);
let FieldError = class FieldError {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], FieldError.prototype, "field", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], FieldError.prototype, "message", void 0);
FieldError = __decorate([
    (0, type_graphql_1.ObjectType)()
], FieldError);
let JwtToken = class JwtToken {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], JwtToken.prototype, "accessToken", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], JwtToken.prototype, "refreshToken", void 0);
JwtToken = __decorate([
    (0, type_graphql_1.ObjectType)()
], JwtToken);
let UserResponse = class UserResponse {
};
__decorate([
    (0, type_graphql_1.Field)(() => [FieldError], { nullable: true }),
    __metadata("design:type", Array)
], UserResponse.prototype, "errors", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_2.User, { nullable: true }),
    __metadata("design:type", type_graphql_2.User)
], UserResponse.prototype, "user", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => JwtToken, { nullable: true }),
    __metadata("design:type", JwtToken)
], UserResponse.prototype, "token", void 0);
UserResponse = __decorate([
    (0, type_graphql_1.ObjectType)()
], UserResponse);
let UserResolver = class UserResolver {
    async users({ prisma }) {
        let user;
        try {
            user = await prisma.user.findMany();
        }
        catch (err) {
            console.log(err);
            return [];
        }
        return user;
    }
    bye({ payload }) {
        console.log(payload);
        return `your user id is: ${payload.userId}`;
    }
    async register(options, { prisma }) {
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
        if ((await prisma.user.findUnique({ where: { email: options.email } })) !==
            null) {
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
                password: await argon2_1.default.hash(options.input.password, {
                    type: argon2_1.default.argon2id,
                }),
            },
        });
        return { user };
    }
    async login(options, { prisma, res }) {
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
        const valid = await argon2_1.default.verify(user.password, options.password, {
            type: argon2_1.default.argon2id,
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
        res.cookie("jid", (0, auth_1.createRefreshToken)(user), {
            httpOnly: true,
        });
        return {
            user,
            token: {
                accessToken: (0, auth_1.createAccessToken)(user),
            },
        };
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [type_graphql_2.User]),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "users", null);
__decorate([
    (0, type_graphql_1.Query)(() => String),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "bye", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => UserResponse),
    __param(0, (0, type_graphql_1.Arg)("options")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserInput, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "register", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => UserResponse),
    __param(0, (0, type_graphql_1.Arg)("options")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UsernamePasswordInput, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "login", null);
UserResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.js.map