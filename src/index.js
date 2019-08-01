import { ApolloServer, gql } from 'apollo-server-express';
//import  { typeDefs, resolvers } from './schema';
import express from 'express';
import mongoose from 'mongoose';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';

const url = `mongodb+srv://simenghe:2000@mongolad-shrff.mongodb.net/test?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true });
const startServer = async () => {
    const app = express();

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

// import mongoose from 'mongoose'
// mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));

