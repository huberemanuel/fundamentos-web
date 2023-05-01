import { router } from "./routes";
import express from 'express';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());
app.use(router);

mongoose.connect('mongodb://127.0.0.1:27017/prova2704');

app.listen(3000);