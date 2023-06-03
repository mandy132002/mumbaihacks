import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import loginRoutes from './routes/loginRoutes.js'
import complaintsRoutes from './routes/complaintsRoutes.js'


const app = express();
dotenv.config();

app.use(bodyParser.json({limit:"30 mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30 mb", extended: true}));
app.use(cors());

 app.use('/register', loginRoutes);
 app.use('/complaints', complaintsRoutes);

const PORT = 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewURLParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Mongodb Connected');
        app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
    })
    .catch((error) => console.log(error.message));




