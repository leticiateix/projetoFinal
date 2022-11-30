const express = require('express');
const nodemon = require('nodemon')
const { Pool } = require('pg');
require('dotenv').config()

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL
});

const app = express();

app.use(express.json());

app.get('/lista_compras', async (req, res) => {
    try {
        const lista_compras = await pool.query('SELECT * FROM lista_compras')
        return res.status(200).send(rows)
    } catch(err){
        return res.status(400).send(err)
    }
})

app.post('/session', async (req, res) => {
    const { produto_ } = req.body
    try {
        const newSession = await pool.query('INSERT INTO lista_compras(produto) VALUES ($1) RETURNING *', [produto_])
        return res.status(200).send(newSession.rows)
    } catch(err){
        return res.status(400).send(err)
    }
})

const PORT = process.env.PORT || 5432;
app.listen(PORT, function() {
    console.log (`API rodando na porta ${PORT}`);
});