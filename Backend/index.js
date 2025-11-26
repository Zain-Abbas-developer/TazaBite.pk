import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { ConnetDB } from './config/db.js';
dotenv.config();

const app = express();
app.use(express.json())
app.use(cors())


const PORT = process.env.PORT || 8000;

ConnetDB().then(() => {
    app.listen(PORT, () => 
        console.log(`backend chal rahi he ${PORT}`
    ))
})