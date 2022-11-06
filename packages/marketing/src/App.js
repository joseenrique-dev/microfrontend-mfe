import React from 'react';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import { Router, Route, Switch } from 'react-router-dom';
import Landing from "./components/Landing";
 import Pricing from "./components/Pricing";

 const generateClassName = createGenerateClassName({
    productionPrefix: 'ma'
 });

 export default ({ history }) =>{
    console.log(history)
    return <div>
        <StylesProvider generateClassName={generateClassName }>
            <Router history={history}>
                <Switch>
                    <Route exact path="/pricing" component={Pricing}/>
                    <Route exact path="/" component={Landing}/>
                </Switch>
            </Router>
        </StylesProvider>
    </div>
 }