import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/index.js";
import { app } from "./app.js";
app.on("error", (error) => {
    console.log("ERROR:", error);
    throw error;
});

connectDB()
    .then((res) => {
        app.listen(process.env.PORT || 3000, () => {
            console.log(`* Server is running at port : ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.log("MONGO DB connect !!!", err);
    });

// import mongoose from "mongoose";
// import { DB_NAME } from "./constant.js";
// console.log(process.env.MONGODB_URI)
// import express from "express";
// const app = express()(async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
// app.on("error", (error) => {
//     console.log("ERROR:", error);
//     throw error;
// });

//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on the ${process.env.PORT}`);
//         });
//     } catch (error) {
//         console.error("ERROR:", error);
//         throw error;
//     }
// })();
