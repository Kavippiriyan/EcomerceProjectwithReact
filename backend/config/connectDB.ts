import mongoose from "mongoose";

export const connectDB = () => {
    const dbURL = process.env.DB_URL;
    if (!dbURL) {
        throw new Error("DB_URL environment variable is not set.");
    }

    mongoose.connect(dbURL).then((con) => {
        console.log('MongoDB connected to host:' + con.connection.host);
    });
};
