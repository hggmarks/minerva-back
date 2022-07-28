import express from 'express';
import { pool } from '../db';

const router = express.Router();

router.post("/register", async (req, res)=>{
    const { razaoSocial, cnpj, operacao, dataRegistro, qtdCotas, precoCota } = req.body;

    if(!razaoSocial || !cnpj || !operacao || !dataRegistro || !qtdCotas || !precoCota){
    res.status(422).json("preencha todos os campos");
    } 

    try {
        
        const newRegister = await pool.query()
        
    } catch (err) {
        res.status(422).json(err);
    }
});
