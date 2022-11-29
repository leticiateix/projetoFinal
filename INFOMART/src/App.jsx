import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'




function App() {
    
    const [btnState, setBtnState] = useState(false)
    function abrirModal() {
        setBtnState(btnState => !btnState)
        console.log('clicou')
    }
    function fecharModal() {
        setBtnState(btnState => !btnState)
    }
    
    let toggleClassNoCheck = btnState ? ' ': ""
    let toggleClassCheck = btnState ? ' active': ""

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
                            <a className="ativo" href="#">Meus Favoritos</a>
                            <a className="ativo" href="#">Categorias</a>    
                        </div>
                        <div>
                            <a className="noActive" href=""><img src="./Burger.svg" alt="" /></a>
                        </div>
                        <input className="ativo" type="text" name="pesquisa" placeholder="Pesquisar itens"></input>
                        <div className="cart">
                            <img src="./Cart.svg" alt="" />
                            <a href="#">Minha Lista</a>
                        </div>
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
                                <div className="content" id="content">
                                    <img src="./caqui.svg" alt="" />
                                    <div className="categoria">
                                        <div className="info">
                                            <h4 id="nome">Caqui</h4>
                                            <h4 id="preco">R$ 49,99</h4>
                                        </div>
                                        <h5>Categoria: Fruta</h5>
                                    </div>
                                    <div className="add">
                                        <h6>+ Lista</h6>
                                    </div>
                                </div>
                                <div className="content" id="content">
                                    <img src="./caqui.svg" alt="" />
                                    <div className="categoria">
                                        <div className="info">
                                            <h4 id="nome">Caqui</h4>
                                            <h4 id="preco">R$ 49,99</h4>
                                        </div>
                                        <h5>Categoria: Fruta</h5>
                                    </div>
                                    <div className="add">
                                        <h6>+ Lista</h6>
                                    </div>
                                </div>
                                <div className="content" id="content">
                                    <img src="./caqui.svg" alt="" />
                                    <div className="categoria">
                                        <div className="info">
                                            <h4 id="nome">Caqui</h4>
                                            <h4 id="preco">R$ 49,99</h4>
                                        </div>
                                        <h5>Categoria: Fruta</h5>
                                    </div>
                                    <div className="add">
                                        <h6>+ Lista</h6>
                                    </div>
                                </div>
                                <div className="content" id="content">
                                    <img src="./caqui.svg" alt="" />
                                    <div className="categoria">
                                        <div className="info">
                                            <h4 id="nome">Caqui</h4>
                                            <h4 id="preco">R$ 49,99</h4>
                                        </div>
                                        <h5>Categoria: Fruta</h5>
                                    </div>
                                    <div className="add">
                                        <h6>+ Lista</h6>
                                    </div>
                                </div>
                                <div className="content" id="content">
                                    <img src="./caqui.svg" alt="" />
                                    <div className="categoria">
                                        <div className="info">
                                            <h4 id="nome">Caqui</h4>
                                            <h4 id="preco">R$ 49,99</h4>
                                        </div>
                                        <h5>Categoria: Fruta</h5>
                                    </div>
                                    <div className="add">
                                        <h6>+ Lista</h6>
                                    </div>
                                </div>
                                <div className="content" id="content">
                                    <img src="./caqui.svg" alt="" />
                                    <div className="categoria">
                                        <div className="info">
                                            <h4 id="nome">Caqui</h4>
                                            <h4 id="preco">R$ 49,99</h4>
                                        </div>
                                        <h5>Categoria: Fruta</h5>
                                    </div>
                                    <div className="add">
                                        <h6>+ Lista</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='frame'>
                            <h3>Ou adicione um item personalizado</h3>
                            <div className='addItem-container'  onClick={abrirModal}>
                                <div>
                                    <img  data-modal="abrir"  className='ativo'  src="./add.svg" alt="" />
                                    <img  data-modal="abrir" className="noActive" src="./add-1.svg" alt="" />
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
                                    <img className="ativo" src="./padaria.svg" alt="" />
                                    <img className="noActive" src="./donuts.svg" alt="" />
                                    <h3 id='name'>Padaria</h3>
                                    <div className="botao">
                                        <h4>Confira</h4>
                                    </div>
                                </div>
                                <div className="one">
                                    <img className="ativo" src="./hortifruti.svg" alt="" />
                                    <img className="noActive" src="./legumes.svg" alt="" />
                                    <h3 id='name'>Hortifruti</h3>
                                    <div className="botao">
                                        <h4>Confira</h4>
                                    </div>
                                </div>
                                <div className="one">
                                    <img className="ativo" src="./limpeza.svg" alt="" />
                                    <img className="noActive" src="./limpeza-1.svg" alt="" />
                                    <h3 id='name'>Limpeza</h3>
                                    <div className="botao">
                                        <h4>Confira</h4>
                                    </div>
                                </div>
                                <div className="one">
                                    <img className="ativo" src="./higiene.svg" alt="" />
                                    <img className="noActive" src="./papel.svg" alt="" />
                                    <h3 id='name'>Higiene</h3>
                                    <div className="botao">
                                        <h4>Confira</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer>InfoMart © Todos os direitos reservados.</footer>     
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
        
        {/* </div> */}
    </section>
    )
}




// function abrirModal(event) {
//     event.preventDefault()
//     console.log(event)
// }

// function fecharModal() {

// }





// botaoAbrir.addEventListener('click', abrirModal)

// botaoFechar.addEventListener('click', fecharModal)

export default App
