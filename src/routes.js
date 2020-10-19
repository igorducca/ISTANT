import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing'
import User from './pages/User'

export default function routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/perfil/#/:user" component={User} />
            </Switch>
        </BrowserRouter>
    )
}