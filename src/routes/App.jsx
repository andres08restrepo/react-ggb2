import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home/Home'
import DietaBarf from '../pages/DietaBarf/DietaBarf'

const App = () => {
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/dieta-barf" component={DietaBarf} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;