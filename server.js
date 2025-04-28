import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './routes/userRoutes.js';
import cors from 'cors';

dotenv.config();

const PORT = process.env.PORT;

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(userRouter);    

app.get('/', (req, res) => {
    res.send('User server is online and running');
});

app.listen(PORT, () => {
    console.log(`Onze server is aan het luisteren op: http://localhost:${PORT}`);
});
