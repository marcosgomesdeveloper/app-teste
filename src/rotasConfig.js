import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import eApp from './pages/eApp';
import login from './pages/login';
import shoppingCart from './pages/shoppingCart';
import PainelDoCliente from './pages/PainelDoCliente';
import cadCliente from './pages/cadCliente';
import centralDeAjuda from './pages/centralDeAjuda'; 

function Rotas(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={eApp}/>
                <Route path="/login" component={login}/>
                <Route path="/shoppingCart" component={shoppingCart}/>
                <Route path="/PainelDoCliente" component={PainelDoCliente}/>
                <Route path="/cadCliente" component={cadCliente}/>
                <Route path="/centralDeAjuda" component={centralDeAjuda}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Rotas;