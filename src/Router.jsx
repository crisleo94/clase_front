import React from 'react';
import {Switch, Redirect, Route} from 'react-router-dom';
import Consultar from './pages/consultar/Consultar';
import Registrar from './pages/registar/Registrar';

export default function MyRouter() {
    return (
        <div>
            <Switch>
                <Route exact path="/registrar" component={Registrar} />
                <Route exact path="/consultar" component={Consultar} />
                <Redirect to="/" />
            </Switch>
        </div>
    );
}
