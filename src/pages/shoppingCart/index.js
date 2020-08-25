import React from 'react';
import './style.css';
/*import './cart';
import './buy';*/


 function shoppingCart(){
     return(
         <div className="conteudo-ShoppingCart">
            <div className="topConteudo">
                <p>Carrinho de Compras.</p>
                <nav>
                    <ul>
                        <li><a href="/">Loja</a></li>
                        <li><a href="/PainelDoCliente">Painel do Cliente</a></li>
                    </ul>
                </nav>
            </div>

            <div className="ShoppingCart">
                <table id="listaDeProdutos" className="tabela">
                    <thead>
                        <tr>
                            <th>Imagem</th>
                            <th>Nome</th>
                            <th>Preço</th>
                            <th>Quantidade</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
            <div className="efetuarCompra">
                <labe>Endereço:</labe>
                <p>Rua Conselheiro Ramalho, 958 - Bela Vista - São Paulo/SP</p>
                <labe>Valor final:</labe>
                <p>R$</p>
                <labe>Forma de pagamento:</labe>
                
            </div>

            <div className="footerConteudo">
                <p>Direitos reservardos - Projeto teste - Com React JS.</p>
            </div>
         </div>
     );
 };

 export default shoppingCart;