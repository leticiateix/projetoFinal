import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <body>
        {/* <div className="App"> */}
        {/*<div>
            <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
            </a>
    </div>*/}
        {/* Início do Menu */}
        <nav>
            <div className='nav'>
                <div className="navBarContato">
                    <h4>(XX) YYYYY - ZZZZ</h4>
                    <h4>contato@infomart.com</h4>
                </div>
                <div className="navBar">
                    <div className="logo">
                        <img src="./logo.svg" alt="sacolas de laranja e amarela" />
                        <a href="#">InfoLists</a>
                    </div>
                    <div className="items">
                        <a href="#">Meus Favoritos</a>
                        <a href="#">Categorias</a>    
                    </div>
                    <input type="text" name="pesquisa" placeholder="Pesquisar itens"></input>
                    <div className="cart">
                        <img src="./Cart.svg" alt="" />
                        <a href="#">Minha Lista</a>
                    </div>
                </div>
            </div>
        </nav>
                {/* Fim do Menu */}

                {/* Início da Introdução */}
        <main>
            <div className='container'>
                <div className="hero">
                    <div >
                        <h1>Listas de compra nunca foram tão simples!</h1>
                        <p>Com um clique construa sua lista de compras gratuitamente de forma rápida</p>
                    </div>
                    <div>
                        <img src="./compras.svg" alt="" />
                    </div>
                </div>
                <div  className="destaques">
                    <div>
                        <h3>Algumas sugestões</h3>
                    </div>
                    <div>
                        <h3>Ou adicione um item</h3>
                    </div>
                </div>
                <div>
                    <div className="promotions">
                        <h2>Categorias</h2>
                    </div>
                </div>
            </div> 
        </main>        
        {/* </div> */}
    </body>
    )
}

export default App
