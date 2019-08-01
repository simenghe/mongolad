import mongoose from 'mongoose';
console.log("CAT.js file used");
export const Cat = mongoose.model('Cat', { name: String });