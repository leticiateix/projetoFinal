const express = require('express');
const nodemon = require('nodemon')
const { Pool } = require('pg');
require('dotenv').config()

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL
});

const app = express();

app.use(express.json());

//const ControllersObj = require('./controllers/ControllerObj');

//Usuarios
//app.post('/tarefa/insert', ControllersTarefas.insert);
//app.get('/tarefa', ControllersTarefas.get);
//app.put('/tarefa/update/:id', ControllersTarefas.update);
//app.get('/tarefa/:id', ControllersTarefas.find);
//app.delete('/tarefa/:id', ControllersTarefas.delete);


const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log (`API rodando na porta ${PORT}`);
});