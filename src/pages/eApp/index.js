import React from 'react';
import logo from './../../logo.svg';
import btnMenu from './menu.png';
import iProduct1 from './imgProducts/produto1.jpg';
import iProduct5 from './imgProducts/produto5.png';
import iProduct6 from './imgProducts/produto6.png';
import iProduct7 from './imgProducts/produto7.jpg';
import iProduct8 from './imgProducts/produto8.jpg';
import iProduct9 from './imgProducts/produto9.jpg';
import Slider from './slider.js';
import './style.css';
/*import './cart';
import './buy';*/


    function eApp(){
        return(
            <div className="conteudo-eApp">

                <div className="topConteudo">
                    <img src={logo} className="Login-logo" alt="logo" />
                    <nav>
                        <ul>
                            <li><a href="/login">Login</a></li>
                            <li><a href="/shoppingCart">Carrinho de compras</a></li>
                            <li><a href="/PainelDoCliente">Painel do cliente</a></li>
                        </ul>
                    </nav>
                </div>

                <div className="loja-eApp">
                    <div className="propagandaPrincipal">
                        <Slider/>
                    </div>
                    
                    <div className="produtos">                        
                        <div className="menuVertical">                        
                            <input type="checkbox" id="chec"/>                             
                            <label for="chec">
                                <img src={btnMenu} className="btnMenu" alt="btnMenu"/>                                                          
                            </label>                            
                            <nav>                                
                                <div  className="li">
                                    <label>Categoria :</label><br></br>
                                    <select name="select">
                                        <option value="valor1">Valor 1</option> 
                                        <option value="valor2" selected>Valor 2</option>
                                        <option value="valor3">Valor 3</option>
                                    </select>
                                </div>

                                <div className="li">
                                    <label>Classificação :</label><br></br>
                                    <select name="select">
                                        <option value="valor1">Valor 1</option> 
                                        <option value="valor2">Valor 2</option>
                                        <option value="valor3" selected>Valor 3</option>
                                    </select>
                                </div>
                                
                                <div className="li">
                                    <label>Marca :</label><br></br>
                                    <select name="select">
                                        <option value="valor1" selected>Valor 1</option> 
                                        <option value="valor2">Valor 2</option>
                                        <option value="valor3">Valor 3</option>
                                    </select>
                                </div>                                
                            </nav>
                        </div>
                        <div className="loja">
                            <div className="selecionarPor">
                                <label>Selecionar produtos: </label>
                                <select name="select">                                    
                                    <option value="valor1" selected>Valor 1</option> 
                                    <option value="valor2">Valor 2</option>
                                    <option value="valor3">Valor 3</option>
                                </select>
                            </div>
                            <div className="list-products">
                                <ul className="products">
                                    <li>
                                        <div className="produto">
                                            <img src={iProduct1} className="iProduct1" alt="iProduct1" />
                                            <div className="product-name"><p>Camiseta Fly</p></div>
                                            <div className="product-price"><p>R$ 110,00</p></div>
                                            <div className="product-description"><p>Descrição do Produto</p></div>
                                            <div className="btn-card">
                                                <button className="adicionar-no-carrinho" data-id="01">Enviar para o Carrinho</button>
                                            </div>
                                        </div>  
                                    </li>
                                    <li>
                                        <div className="produto">
                                            <img src={iProduct7} className="iProduct1" alt="iProduct1" />
                                            <div className="product-name"><p>Conjunto Elyssée</p></div>
                                            <div className="product-price"><p>R$ 93,00</p></div>
                                            <div className="product-description"><p>Descrição do Produto</p></div>
                                            <div className="btn-card">
                                                <button className="adicionar-no-carrinho" data-id="02">Enviar para o Carrinho</button>
                                            </div>
                                        </div>  
                                    </li>
                                    <li>
                                        <div className="produto">
                                            <img src={iProduct8} className="iProduct1" alt="iProduct1" />
                                            <div className="product-name"><p>Bota de Couro</p></div>
                                            <div className="product-price"><p>R$ 510,00</p></div>
                                            <div className="product-description"><p>Descrição do Produto</p></div>
                                            <div className="btn-card">
                                                <button className="adicionar-no-carrinho" data-id="03">Enviar para o Carrinho</button>
                                            </div> 
                                        </div>  
                                    </li>
                                    <li>
                                        <div className="produto">
                                            <img src={iProduct9} className="iProduct1" alt="iProduct1" />
                                            <div className="product-name"><p>Jacketa Rose</p></div>
                                            <div className="product-price"><p>R$ 310,00</p></div>
                                            <div className="product-description"><p>Descrição do Produto</p></div>
                                            <div className="btn-card">
                                                <button className="adicionar-no-carrinho" data-id="04">Enviar para o Carrinho</button>
                                            </div>
                                        </div>  
                                    </li>
                                    <li>
                                        <div className="produto">
                                            <img src={iProduct5} className="iProduct1" alt="iProduct1" />
                                            <div className="product-name"><p>Macarrão Cilindirco</p></div>
                                            <div className="product-price"><p>R$ 11,00</p></div>
                                            <div className="product-description"><p>Descrição do Produto</p></div>
                                            <div className="btn-card">
                                                <button className="adicionar-no-carrinho" data-id="05">Enviar para o Carrinho</button>
                                            </div>
                                        </div>  
                                    </li>
                                    <li>
                                        <div className="produto">
                                            <img src={iProduct6} className="iProduct1" alt="iProduct1" />
                                            <div className="product-name"><p>Conjunto de Toalhas Rose</p></div>
                                            <div className="product-price"><p>R$ 73,00</p></div>
                                            <div className="product-description"><p>Descrição do Produto</p></div>
                                            <div className="btn-card">
                                                <button className="adicionar-no-carrinho" data-id="06">Enviar para o Carrinho</button>
                                            </div>
                                        </div>  
                                    </li>                                                                       
                                </ul>                                                               
                            </div>
                        </div>
                    </div>
                    <div className="info">
                        <div className="pre-cadastro">
                            <div className="formConteudo">
                                <h3>Gostaria de receber noticias de promoções e descontos da loja.</h3>                    
                                <form action="">
                                    <div className="campo-formCont">
                                        <label>Nome Completo: </label>
                                        <input type="text"/>
                                    </div>
                                    <div className="campo-formCont"> 
                                        <label>E-mail: </label>
                                        <input type="email"/>
                                    </div>
                                    
                                    <div className="campo-formCont">
                                        <button>Enviar dados</button>
                                        <p><a href="/cadCliente">Quero me cadastrar como cliente da loja.</a></p>                           
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="infoContato">         
                            <h3>- Informações e Contato -</h3>
                            <div className="informacao">Nome da Loja</div>
                            <div className="informacao">Endereço da Loja</div>
                            <div className="informacao">Telefone para contato</div>
                            <div className="informacao">E-mail para contato</div>
                        </div>                       
                    </div>
                </div>

                <div className="footerConteudo">
                    <p>Direitos reservardos - Projeto teste - Com React JS.</p>
                </div>

            </div>
        );
    };

 export default eApp;