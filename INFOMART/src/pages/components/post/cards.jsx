import React from 'react';
import { useState, useEffect } from 'react'
import './cards.css'


function Cards(props) {
    return(
        <div className="content" id="content">
            <img src="./caqui.svg" alt="" />
            <div className="categoria">
                <div className="info">
                    <h4 id="nome">Caqui</h4>
                    <h4 id="preco">R$ 49,99</h4>
                </div>
                <h5>Categoria: Fruta</h5>
            </div>
            <button id='botao1'>+ Lista</button>
        </div>
    )
}

export default Cards

