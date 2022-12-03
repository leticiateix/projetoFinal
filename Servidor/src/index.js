const mysql = require('mysql2')
const nodemon = require('nodemon')
 
const connection = mysql.createConnection({
    host:'sql10.freesqldatabase.com',
    user:'sql10582412',
    password:'aymItsf1KC',
    database:'sql10582412'
})
 
connection.query('SELECT NOW()', function(error, result){
    if(error) throw error
    console.log(result)
})

const express = require("express")

// Fake databases

let lista = []

// CRIAR o APP

const app = express()

app.use(express.json()) // Aplicar MIDDLEWARES

// Adicionar os itens

app.post('/lista', (req, res) => {
    const {nome, categoria, preco, img} = req.body;
    const item = {nome, categoria, preco, img};
    lista.push(item);
    return res.status(201).json(item);
})

// Mostrar toda a lista de itens

app.get("/lista", (req, res) => {
    const allLista = lista;
    return res.status(200).json(lista);
})

// Encontrar um item da lista

app.get("/lista/:item_nome", (req, res) => {
    const {item_nome} = req.params;
    const item = lista.find((item) => item.nome == item_nome);
    if (!item) res.status(404).json("Item não encontrado");
    return res.status(200).json(item);
})

// Deletar um item da lista

app.delete("/lista/:item_nome", (req, res) => {
    const {item_nome} = req.params;
    const filtrarItens = lista.filter((item) => item.nome !== item_nome);
    lista = filtrarItens;
    return res.status(204).json("deleted");
})


// Para alterar algum dado de dentro da base

app.patch('/lista/:item_nome', (req, res) => {
    const {nome, categoria, preco, img} = req.body;
    const {item_nome} = req.params;
    const item = lista.find((item) => item.nome === item_nome);
    item.nome = item.nome;
    item.categoria = categoria ? categoria : lista.categoria;
    item.preco = preco ? preco : lista.preco;
    item.img = img ? img : lista.preco;
    return res.status(200).json(item);
})


// MANDAR O SERVIDOR RODAR

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log (`API rodando na porta ${PORT}`);
});
