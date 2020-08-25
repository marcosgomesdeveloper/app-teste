import React from 'react';
import './style.css';

    function PainelDoCliente(){
        return(
            <div className="conteudo-PainelDoCliente">
                <div className="topConteudo">
                    <p>Painel do Cliente</p>
                    <nav>
                        <ul>
                            <li><a href="/">Loja</a></li>
                            <li><a href="/shoppingCart">Carrinho de compras</a></li>
                        </ul>
                    </nav>
                </div>

                <div className="PainelDoCliente">
                    <div className="menuVerticalP">                    
                        <nav>                             
                            <div className="li">
                                <p>Extrato de Compras.</p>
                                <div className="MVp2"><p>Escolha um período para o extrato.</p></div>
                                <label>Data inicial</label>
                                <input type="date"/><br></br>
                                <label>Data final</label>
                                <input type="date"/>
                            </div>
                            <hr></hr>
                            <div className="li">
                                <p>Minhas Atividades.</p>
                                <select name="select">
                                    <option value="valor1">Todas</option>
                                    <option value="valor3" selected>Últimos 30 dias.</option>
                                </select>
                            </div>                            
                        </nav>                
                    </div>
                    <div className="mainPDC">
                        <h1>Conteudo de extrato de compras ou Produtos Comprados</h1>
                    </div>
                </div>

                <div className="footerConteudo">
                    <p>Direitos reservardos - Projeto teste - Com React JS.</p>
                </div>
            </div>
        );
    };

 export default PainelDoCliente;