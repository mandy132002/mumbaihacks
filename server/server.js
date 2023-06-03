import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'


const app = express();
dotenv.config();

app.use(bodyParser.json({limit:"30 mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30 mb", extended: true}));
app.use(cors());

app.use('/login', loginRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running at port : ${PORT}`)
});

