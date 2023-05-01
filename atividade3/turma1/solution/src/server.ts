import express from 'express';
import mongoose from 'mongoose';
import { router} from './routes';

mongoose.connect('mongodb://127.0.0.1:27017/AC2');

const app = express();
const port = 3000;

app.use(express.json());
app.use(router);


app.listen(port,()=> console.log(`servidor rodando na porta: ${port}`));