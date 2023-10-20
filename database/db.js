import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const Connection = () => {
    const DB_URI = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ac-kyyspsv-shard-00-00.t7cm3dt.mongodb.net:27017,ac-kyyspsv-shard-00-01.t7cm3dt.mongodb.net:27017,ac-kyyspsv-shard-00-02.t7cm3dt.mongodb.net:27017/?ssl=true&replicaSet=atlas-ol4xqp-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        mongoose.connect(DB_URI, { useNewUrlParser: true });
        console.log("Database connected successfully")
    } catch (error) {
        console.log("Error while connecting with the databse", error.message);
    }
}

export default Connection;