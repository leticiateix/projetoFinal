import React, { useEffect, useState } from 'react';
import "./minhalista.css";
import {Link} from 'react-router-dom'

export default function Minhalista() {
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
                            <ul className="items">
                                <li>
                                    <Link to={'/'}>Meus Favoritos</Link>
                                </li>
                                <li>
                                    <Link to={'/'}>Categorias</Link>
                                </li>
                            </ul>
                            <input className="ativo" type="text" name="pesquisa" placeholder="Pesquisar itens"></input>
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