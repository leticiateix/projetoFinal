import React, { useEffect, useState } from 'react';
import "./home.css";
import {Link} from 'react-router-dom'
import Cards from '../components/post/cards'

export default function Root() {
    const [btnState, setBtnState] = useState(false)
    const [btnBurger, setBtnBurger] = useState(false)

    function abrirModal() {
        setBtnState(btnState => !btnState)
    }
    function fecharModal() {
        setBtnState(btnState => !btnState)
    }
    
    let toggleClassNoCheck = btnState ? ' ': ""
    let toggleClassCheck = btnState ? ' active': ""

    function ativaBurger() {
        setBtnBurger(btnBurger=> !btnBurger)
    }
    function fecharBurger() {
        setBtnBurger(btnBurger => !btnBurger)
    }

    let activeBurger = btnBurger ? ' ': ""
    let noActiveBurger = btnBurger ? ' activeBurger': ""

    return (
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
                            <Link to={'/'}>InfoLists</Link>
                        </div>
                        <nav className="items">
                        {/* Menu */}
                            <button data-menu="button" onClick={ativaBurger} aria-expanded="false" aria-controls='menu'></button>
                            <ul data-menu="list" id="menu"  className={`item ${activeBurger} ${noActiveBurger}`} data-modal="container">
                                <li>
                                    <Link to={'/'}>Meus Favoritos</Link>
                                </li>
                                <li>
                                    <Link to={'/'}>Categorias</Link>
                                </li>
                            </ul>
                            <div className='nav-input'>
                                <input className='ativo' type="text" name="pesquisa" placeholder="Pesquisar itens"></input>
                                <img src="./lupa.svg" alt="" />
                            </div>
                            <ul className="cart">
                                <img src="./Cart.svg" alt="" />
                                <li>
                                    <Link to={'minhalista'}>Minha Lista</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className='container-conteudo'>
                    <div className="hero">
                        <div>
                            <h1>Listas de compra nunca foram tão simples!</h1>
                            <p>Com um clique construa sua lista de compras gratuitamente de forma rápida</p>
                        </div>
                        <div>
                            <a  href=""><img className="ativo" src="./compras.svg" alt="" /></a>
                        </div>
                    </div>
                    <div  className="destaques">
                        <div className='carousel'>
                            <h3>Algumas sugestões</h3>
                            <div className="img-carousel">
                                <Cards />
                                <Cards />
                                <Cards />
                                <Cards />
                                <Cards />
                                <Cards />
                            </div>
                        </div>
                        <div className='frame'>
                            <h3>Ou adicione um item personalizado</h3>
                            <div className='addItem-container'  onClick={abrirModal}>
                                <div>
                                    <img  data-modal="abrir"  className='ativo'  src="./add.svg" alt="" />
                                    <img  data-modal="abrir" className="noActive" src="./add-1.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="promotions">
                            <h2 className='titulo-categoria'>Categorias</h2>
                            <div className="categorias">
                                <div className="one">
                                    <img className="ativo" src="./padaria.svg" width={300} alt="" />
                                    <img className="noActive" src="./donuts.svg" alt="" />
                                    <h3 id='name'>Padaria</h3>
                                    <div className="botao">
                                        <button id='botao2'>Confira</button>
                                    </div>
                                </div>
                                <div className="one">
                                    <img className="ativo" src="./hortifruti.svg" width={300} alt="" />
                                    <img className="noActive" src="./legumes.svg" alt="" />
                                    <h3 id='name'>Hortifruti</h3>
                                    <div className="botao">
                                        <button id='botao2'>Confira</button>
                                    </div>
                                </div>
                                <div className="one">
                                    <img className="ativo" src="./limpeza.svg" width={300} alt="" />
                                    <img className="noActive" src="./limpeza-1.svg" alt="" />
                                    <h3 id='name'>Limpeza</h3>
                                    <div className="botao">
                                        <button id='botao2'>Confira</button>
                                    </div>
                                </div>
                                <div className="one">
                                    <img className="ativo" src="./higiene.svg" width={300} alt="" />
                                    <img className="noActive" src="./papel.svg" alt="" />
                                    <h3 id='name'>Higiene</h3>
                                    <div className="botao">
                                        <button id='botao2'>Confira</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer>InfoMart © Todos os direitos reservados.</footer>   
                </div>

                  
                <section className={`modal-container btn${toggleClassCheck}  btn${toggleClassNoCheck} `} data-modal="container">
                    <div className='modal'>
                        <button onClick={fecharModal} className='fechar' data-modal="fechar">X</button>
                        <div className='addItemModal'>
                            <div>
                                <img src="./Add (1).svg" alt="" />
                            </div>
                            <div>
                                <p>Adicionar uma imagem</p>
                            </div>
                        </div>
                        <div >
                            <form className='forms' action="">
                                <div className='input-modal'>
                                    <label htmlFor="name">Nome</label>
                                    <input type="text" htmlFor="name" id='name' placeholder='Digite o nome' />
                                </div>
                                <div className='input-modal'>   
                                    <label htmlFor="preco">Preço</label>
                                    <input type="text" htmlFor="preco" id='preco' placeholder='Digite o preço'/>
                                </div>
                                <div className='input-modal'>
                                    <label htmlFor="categoria">Gategoria</label>
                                    <input type="text" htmlFor="gategoria" id='gategoria' placeholder='Digite a categoria'/>
                                </div>
                                <div className="button-modal">
                                    <button type="submit">+ Adicionar à lista</button>
                                </div>
                                    
                                
                            </form>
                                
                        </div>
                            
                    </div>
                </section> 
            </div>

        </main>  
    )
}
