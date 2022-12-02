// tabela está jdbc:mysql://sql10.freesqldatabase.com:3306/sql10582412

const express = require("express")


// Fake databases

let lista = []

// CRIAR o APP

const app = express()

app.use(express.json()) // Aplicar MIDDLEWARES

// Adicionar os itens

app.post('/lista', (req, res) => {
    const {nome, preco, categoria} = req.body;
    const item = {nome, preco, categoria};
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
    const {nome, categoria, preco} = req.body;
    const {item_nome} = req.params;
    const item = lista.find((item) => item.nome === item_nome);
    item.nome = item.nome;
    item.categoria = categoria ? categoria : lista.categoria;
    item.preco = preco ? preco : lista.preco;
    return res.status(200).json(item);
})


// MANDAR O SERVIDOR RODAR

app.listen(3333, () => console.log('Server is running'))
