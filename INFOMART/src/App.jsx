import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
        <section>
        
        {/* Início do Menu */}
        
                {/* Fim do Menu */}

                {/* Início da Introdução */}
        <main>
            <div className='container'>
                <div className='nav'>
                        {/* <div className="navBarContato">
                            <h4>(XX) YYYYY - ZZZZ</h4>
                            <h4>contato@infomart.com</h4>
                        </div> */}
                    <div className="navBar">
                        <div className="logo">
                            <img src="./logo.svg" alt="sacolas de laranja e amarela" />
                            <a href="#">InfoLists</a>
                        </div>
                        <div className="items">
                            <a class="ativo" href="#">Meus Favoritos</a>
                            <a class="ativo" href="#">Categorias</a>    
                        </div>
                        <div>
                            <a class="noActive" href=""><img src="./Burger.svg" alt="" /></a>
                        </div>
                        <input class="ativo" type="text" name="pesquisa" placeholder="Pesquisar itens"></input>
                        <div className="cart">
                            <img src="./Cart.svg" alt="" />
                            <a href="#">Minha Lista</a>
                        </div>
                    </div>
                 </div>
                <div className="hero">
                    <div>
                        <h1>Listas de compra nunca foram tão simples!</h1>
                        <p>Com um clique construa sua lista de compras gratuitamente de forma rápida</p>
                    </div>
                    <div>
                        <img class="ativo" src="./compras.svg" alt="" />
                    </div>
                </div>
                <div  className="destaques">
                    <div className='carousel'>
                        <h3>Algumas sugestões</h3>
                        <div className="img-carousel">
                            <div class="content" id="content">
                                <img src="./caqui.svg" alt="" />
                                <div class="categoria">
                                    <div class="info">
                                        <h4 id="nome">Caqui</h4>
                                        <h4 id="preco">R$ 49,99</h4>
                                    </div>
                                    <h5>Categoria: Fruta</h5>
                                </div>
                                <div class="add">
                                    <h6>+ Lista</h6>
                                </div>
                            </div>
                            <div class="content" id="content">
                                <img src="./caqui.svg" alt="" />
                                <div class="categoria">
                                    <div class="info">
                                        <h4 id="nome">Caqui</h4>
                                        <h4 id="preco">R$ 49,99</h4>
                                    </div>
                                    <h5>Categoria: Fruta</h5>
                                </div>
                                <div class="add">
                                    <h6>+ Lista</h6>
                                </div>
                            </div>
                            <div class="content" id="content">
                                <img src="./caqui.svg" alt="" />
                                <div class="categoria">
                                    <div class="info">
                                        <h4 id="nome">Caqui</h4>
                                        <h4 id="preco">R$ 49,99</h4>
                                    </div>
                                    <h5>Categoria: Fruta</h5>
                                </div>
                                <div class="add">
                                    <h6>+ Lista</h6>
                                </div>
                            </div>
                            <div class="content" id="content">
                                <img src="./caqui.svg" alt="" />
                                <div class="categoria">
                                    <div class="info">
                                        <h4 id="nome">Caqui</h4>
                                        <h4 id="preco">R$ 49,99</h4>
                                    </div>
                                    <h5>Categoria: Fruta</h5>
                                </div>
                                <div class="add">
                                    <h6>+ Lista</h6>
                                </div>
                            </div>
                            <div class="content" id="content">
                                <img src="./caqui.svg" alt="" />
                                <div class="categoria">
                                    <div class="info">
                                        <h4 id="nome">Caqui</h4>
                                        <h4 id="preco">R$ 49,99</h4>
                                    </div>
                                    <h5>Categoria: Fruta</h5>
                                </div>
                                <div class="add">
                                    <h6>+ Lista</h6>
                                </div>
                            </div>
                            <div class="content" id="content">
                                <img src="./caqui.svg" alt="" />
                                <div class="categoria">
                                    <div class="info">
                                        <h4 id="nome">Caqui</h4>
                                        <h4 id="preco">R$ 49,99</h4>
                                    </div>
                                    <h5>Categoria: Fruta</h5>
                                </div>
                                <div class="add">
                                    <h6>+ Lista</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='frame'>
                        <h3>Ou adicione um item personalizado</h3>
                        <div className='addItem-container'>
                            <div>
                                <img class="ativo" src="./add.svg" alt="" />
                                <img class="noActive" src="./add-1.svg" alt="" />
                            </div>
                            <div>
                                <p>Crie seu item</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="promotions">
                        <h2>Categorias</h2>
                        <div className="categorias">
                            <div className="one">
                                <img class="ativo" src="./padaria.svg" alt="" />
                                <img class="noActive" src="./donuts.svg" alt="" />
                                <h3 id='name'>Padaria</h3>
                                <div class="botao">
                                    <h4>Confira</h4>
                                </div>
                            </div>
                            <div className="one">
                                <img class="ativo" src="./hortifruti.svg" alt="" />
                                <img class="noActive" src="./legumes.svg" alt="" />
                                <h3 id='name'>Hortifruti</h3>
                                <div class="botao">
                                    <h4>Confira</h4>
                                </div>
                            </div>
                            <div className="one">
                                <img class="ativo" src="./limpeza.svg" alt="" />
                                <img class="noActive" src="./limpeza-1.svg" alt="" />
                                <h3 id='name'>Limpeza</h3>
                                <div class="botao">
                                    <h4>Confira</h4>
                                </div>
                            </div>
                            <div className="one">
                                <img class="ativo" src="./higiene.svg" alt="" />
                                <img class="noActive" src="./papel.svg" alt="" />
                                <h3 id='name'>Higiene</h3>
                                <div class="botao">
                                    <h4>Confira</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer>InfoMart © Todos os direitos reservados.</footer>     
                <section className='modal-container'>
                    <div className='modal'>
                        <a className='fechar'>X</a>
                        <div className='addItem'>
                            <div>
                                <img src="./Add (1).svg" alt="" />
                            </div>
                            <div>
                                <p>Adicionar uma imagem</p>
                            </div>
                        </div>
                        <div >
                            <form className='forms' action="">
                                <label htmlFor="name">Nome</label>
                                <input type="text" htmlFor="name" id='name' />
                                <label htmlFor="preco">Preço</label>
                                <input type="text" htmlFor="preco" id='preco' />
                                <label htmlFor="categoria">Gategoria</label>
                                <input type="text" htmlFor="gategoria" id='gategoria' />
                            </form>
                            <a href="">+ Adicionar item</a>
                        </div>
                        
                    </div>
                </section> 

            </div> 

            
            
        </main>  
        
        {/* </div> */}
    </section>
    )
}

export default App
