import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/Header';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));

export default () =>{
    return (<div>
                <BrowserRouter>
                    <Header />
                    <Suspense fallback={<>Loading...</>}>
                        <Switch>
                            <Route path="/auth" component={AuthLazy} />
                            <Route path="/" component={MarketingLazy} />
                        </Switch>
                    </Suspense>
                </BrowserRouter>
            </div>);    
}