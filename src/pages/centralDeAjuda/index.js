import React from 'react';
import './style.css';

function centralDeAjuda(){
    return(
        <div className="conteudo-CentralDeAjuda">
            <div className="topConteudo">
                <p>Central de Ajuda.</p>
                <nav>
                    <ul>
                        <li><a href="/login">Sair</a></li>
                    </ul>
                </nav>
            </div>

            <div className="Conteudo">
                <p>Informe os dados abaixo, queremos ajudar você.</p>              
             
                <div className="formConteudoCA">
                
                    <form action="">
                        <div className="campo-formCad">
                            <label>Nome de usuário: </label>
                            <input type="text"/>
                        </div>
                        <div className="campo-formCad">
                            <label>E-mail: </label>
                            <input type="email"/>
                        </div>                        
                        <div className="campo-formCad">
                            <button>Enviar</button>                            
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

 export default centralDeAjuda;