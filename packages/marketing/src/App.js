import React from 'react';
import { StylesProvider } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from "./components/Landing";
 import Pricing from "./components/Pricing";
 //TODO: upgrade this.

 export default () =>{
    return <div>
        <StylesProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/pricing" component={Pricing}/>
                    <Route exact path="/" component={Landing}/>
                </Switch>
            </BrowserRouter>
        </StylesProvider>
    </div>
 }