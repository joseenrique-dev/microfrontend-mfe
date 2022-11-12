import React from 'react';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import { Router, Route, Switch } from 'react-router-dom';
 //TODO: upgrade this...

 const generateClassName = createGenerateClassName({
    productionPrefix: 'au'
 });

 export default ({ history }) =>{
    console.log(history)
    return <div>
        <StylesProvider generateClassName={generateClassName }>
            <Router history={history}>
                <Switch>
                    
                </Switch>
            </Router>
        </StylesProvider>
    </div>
 }