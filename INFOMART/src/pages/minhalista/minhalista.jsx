import React, { useEffect, useState } from 'react';
import "./minhalista.css";


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
                            <img src="./logo.svg" alt="logo" />
                            <a href="#">InfoLists</a>
                        </div>
                        <div className="items">
                            <a className="ativo" href="#">Meus Favoritos</a>
                            <a className="ativo" href="#">Categorias</a>    
                        </div>
                        <div>
                            <a className="noActive" href=""><img src="./Burger.svg" alt="" /></a>
                        </div>
                        <input className="ativo" type="text" name="pesquisa" placeholder="Pesquisar itens"></input>
                        <div className="cart">
                            <img src="./Cart.svg" alt="" />
                            <a href="#">Sua Lista</a>
                        </div>
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