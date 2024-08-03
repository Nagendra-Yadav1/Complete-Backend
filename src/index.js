import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/index.js";
connectDB();


// import mongoose from "mongoose";
// import { DB_NAME } from "./constant.js";
// console.log(process.env.MONGODB_URI)
// import express from "express";
// const app = express()(async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error", (error) => {
//             console.log("ERROR:", error);
//             throw error;
//         });

//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on the ${process.env.PORT}`);
//         });
//     } catch (error) {
//         console.error("ERROR:", error);
//         throw error;
//     }
// })();
