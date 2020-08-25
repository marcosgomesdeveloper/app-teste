import React from 'react';
import './style.css';

 function cadCliente(){
     return(
         <div className="conteudoCadCliente">
            <div className="topConteudo">
                <p>Cadastro de cliente.</p>               
                <nav>
                    <ul>
                        <li><a href="/login">Sair</a></li>
                    </ul>
                </nav>
            </div>
            
            <div className="Conteudo">  
            <p>Informe os dados abaixo, para se cadastrar na loja.</p>              
                <div className="formConteudo">
                    
                    <form action="">
                        <div className="campo-formCad">
                            <label>Nome Completo: </label>
                            <input type="text"/>
                        </div>
                        <div className="campo-formCad">
                            <label>E-mail: </label>
                            <input type="email"/>
                        </div>
                        <div className="campo-formCad">
                            <label>Senha: </label>
                            <input type="password"/>
                        </div>
                        <div className="campo-formCad">
                            <label>Repetir Senha: </label>
                            <input type="password"/>
                        </div>
                        <div className="campo-formCad">
                            <button>Cadastrar</button>                            
                        </div>
                    </form>
                </div>
            </div>
            <div className="footerConteudo">
                <p>Direitos reservardos - Projeto teste - Com ReactJS.</p>
            </div>
         </div>         
     );
 };

 export default cadCliente;