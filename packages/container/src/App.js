import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import MarketingApp from './components/MarketingApp'
import AuthApp from './components/AuthApp';
import Header from './components/Header'

export default () =>{
    return (<div>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route path="/auth" component={AuthApp} />
                        <Route path="/" component={MarketingApp} />
                    </Switch>
                </BrowserRouter>
            </div>);    
}