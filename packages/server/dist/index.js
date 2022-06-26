"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const apollo_server_core_1 = require("apollo-server-core");
const resolvers_1 = require("./resolvers");
const client_1 = require("@prisma/client");
const main = async () => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    const prisma = new client_1.PrismaClient();
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: await (0, type_graphql_1.buildSchema)({
            resolvers: [resolvers_1.HelloResolver, resolvers_1.UserResolver],
            validate: false,
        }),
        context: ({ req, res }) => ({ prisma, req, res }),
        plugins: [(0, apollo_server_core_1.ApolloServerPluginLandingPageGraphQLPlayground)()],
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
    app.listen(3001, () => {
        console.log("Server is runnign on Port 3001");
    });
};
main().catch(e => {
    console.log(e);
});
//# sourceMappingURL=index.js.map