import React from 'react';
import './style.css';
import logo from './../../logo.svg';

function login(){
    return(
        <div className="conteudo-login">            

            <div className="form-Login">
                <h1>Autenticação de Usuário</h1>
                <img src={logo} className="Login-logo" alt="logo" />
                <div className="formulario">
                    <form action="">
                        <div className="campo">
                            <label>Entre com e-mail cadastrado:</label><br></br>                   
                            <input type="email"/>
                        </div>                        
                        <div className="campo">
                            <label>Entre com sua senha:</label><br></br>
                            <input type="password"/>
                        </div>                        
                        <div className="campo">
                            <button>Entrar</button>                            
                        </div>
                        <p>Não sou cadastrado. <a href="/cadCliente">Quero me cadastrar.</a></p>
                        <p><a href="/centralDeAjuda">Esqueci meus dados de login</a>.</p>
                    </form>
                </div>
            </div> 

            <div className="footer-login">
                <p>Direitos reservardos - Projeto teste - Com ReactJS / <a href="/">Retotnar para loja</a>.</p>
            </div>  

        </div>
    );
};

export default login;