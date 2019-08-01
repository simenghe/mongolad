import { Cat } from "./models/Cat";

export const resolvers = {
    Query: {
        hello: () => "hi",
        cats: () => Cat.find()
    },
    Mutation: {
        createCat: async (_, { name }) => {
            const kitty = new Cat({ name });
            console.log("we can save over here.");
            await kitty.save();
            return kitty;
        }
    }
};