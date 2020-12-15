import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home/Home'
import DietaBarf from '../pages/DietaBarf/DietaBarf'
import CalculaRacion from '../pages/CalculaRacion/CalculaRacion';
import Productos from '../pages/Productos/Productos';
import Barf from '../pages/Barf/Barf';
import Snacks from '../pages/Snacks/Snacks';
import Cumpleaños from '../pages/Cumpleaños/Cumpleaños';
import Combos from '../pages/Combos/Combos';
import Nosotros from '../pages/Nosotros/Nosotros';
import FamiliaGGB from '../pages/FamiliaGGB/Familiaggb';
import PreguntasFrecuentes from '../pages/PreguntasFrecuentes/PreguntasFrecuentes';
import Contacto from '../pages/Contacto/Contacto';
import NotFound from '../pages/NotFound/NotFound';



const App = () => {
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/react-ggb2" component={Home}/>
                    <Route exact path="/dieta-barf" component={DietaBarf} />
                    <Route exact path="/calcula-racion" component={CalculaRacion} />
                    <Route exact path="/productos" component={Productos} />
                    <Route exact path="/productos/barf" component={Barf} />
                    <Route exact path="/productos/snacks" component={Snacks} />
                    <Route exact path="/productos/cumpleaños" component={Cumpleaños} />
                    <Route exact path="/productos/combos" component={Combos} />
                    <Route exact path="/nosotros" component={Nosotros} />
                    <Route exact path="/familia-ggb" component={FamiliaGGB} />
                    <Route exact path="/preguntas-frecuentes" component={PreguntasFrecuentes} />
                    <Route exact path="/contacto" component={Contacto} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;