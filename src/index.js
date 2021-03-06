import { ApolloServer, gql } from 'apollo-server-express';
//import  { typeDefs, resolvers } from './schema';
import express from 'express';
import mongoose from 'mongoose';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';
import { url } from './url'


mongoose.connect(url, { useNewUrlParser: true });
const startServer = async () => {
    const app = express('ratnu');
    const server = new ApolloServer({
        // These will be defined for both new or existing servers
        typeDefs,
        resolvers,
    });

    server.applyMiddleware({ app }); // app is from an existing express app
    await mongoose.connect(url, {
        useNewUrlParser: true
    });
    app.listen({ port: 4000 }, () =>
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    )
};
startServer();
