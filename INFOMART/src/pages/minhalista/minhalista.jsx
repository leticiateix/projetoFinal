import React, { useEffect, useState } from 'react';
import "./minhalista.css";
import {Link} from 'react-router-dom'

export default function Minhalista() {
    const [btnBurger, setBtnBurger] = useState(false)

    function ativaBurger() {
        setBtnBurger(btnBurger=> !btnBurger)
    }
    function fecharBurger() {
        setBtnBurger(btnBurger => !btnBurger)
    }

    let activeBurger = btnBurger ? ' ': ""
    let noActiveBurger = btnBurger ? ' activeBurger': ""

    return (
        <section>
        
        {/* Início do Menu */}
        
                {/* Fim do Menu */}

                {/* Início da Introdução */}
        <main>
            <div className='container2'>
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
                                    <Link to={'/'}>Sua Lista</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className='container-cont'>
                  <h1>Sua Lista</h1>
                  <div className="lista">
                    <h2>Sua lista está vazia!</h2>
                    <h3>Para inserir produtos basta clicar no botão "+Lista" debaixo dos itens!</h3>
                    <button id='home'>Home</button>
                  </div>
                </div>
            </div>
        </main>  
        {/* </div> */}
    </section>
    )
}