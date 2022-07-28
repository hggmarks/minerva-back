import express from 'express'
import cors from 'cors';
//import pool from './db';

const app = express();

app.use(cors());
app.use(express.json());

app.listen(5000, () => {
console.log("server running on locahost:5000/")});
