import express from "express";
import dotenv from 'dotenv';
import multer from 'multer';

dotenv.config();

const app = express();

app.use(express.json());

app.use(multer().any());

app.listen(process.env.PORT || 3000, () => {
    console.log(`server runing on port : ${process.env.PORT}`)
});