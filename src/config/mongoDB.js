import mongoose from 'mongoose';

export const connectDB = async () => {
    mongoose.connection.on('connected', () => {
        console.log("Database Connection established...");
    })
    await mongoose.connect(`${process.env.MONGO_DB_URI}/spotify`)
}