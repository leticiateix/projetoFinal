import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/*<div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
  </div>*/}
      <nav>
        <div className="navbarcontato">
          <h4>(XX) YYYYY - ZZZZ</h4>
          <h4>contato@infomart.com</h4>
        </div>
        <div className="navbar">
          <div className="logo">
            <a href="#">InfoLists</a>
          </div>
          <div className="items">
            <a href="#">Meus Favoritos</a>
            <a href="#">Categorias</a>    
          </div>
          <input type="text" name="pesquisa" placeholder="Placeholder"></input>
          <div className="cart">
            <a href="#">Minha Lista</a>
          </div>
        </div>
      </nav>
      <body>
        <div className="hero">
          <h1>Listas de compra nunca foram tão simples!</h1>
          <p>Com um clique construa sua lista de compras gratuitamente de forma rápida</p>
        </div>
        <div className="destaques">
          <h3>Algumas sugestões</h3>
          <h3>CARROSSEL</h3>
        </div>
        <div className="promocoes">
          <h2>Categorias</h2>
          <div className="frame">
            
          </div>
        </div>
      </body>
      
      
    </div>
  )
}

export default App
