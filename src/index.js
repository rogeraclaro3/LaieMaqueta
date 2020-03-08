import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

//tipos
import './fonts/Poppins-ExtraLight.ttf';
import './fonts/Poppins-Regular.ttf';
import './fonts/Poppins-Medium.ttf';
import './fonts/Poppins-Bold.ttf';
import './fonts/Poppins-Black.ttf';

//bootstrap i css
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// planes de la web
import ScrollToTop from './components/scrolltotop/Scrolltop';
import Home from './components/home/Home';
import SearchRes from './components/searchres/SearchRes';
import Objectes from './components/objectes/Objectes';
import Llibre from './components/llibre/Llibre';
import Objecte from './components/objecte/Objecte';

// planes Usuaris
import Accedir from './components/usuaris/Accedir';
import ContrassenyaRecordar from './components/usuaris/Contrassenya-recordar';
import BaixaDades from './components/usuaris/Baixa-dades';
import Registre from './components/usuaris/Registre';
import Rrhh from './components/usuaris/Rrhh';
import Targeta from './components/usuaris/Targeta';
import Targetathk from './components/usuaris/Targetathk';
import Baixathk from './components/usuaris/Baixathk';
import Rrhhthk from './components/usuaris/Rrhhthk';
import Registrethk from './components/usuaris/Registrethk';
import Contrassenyathk from './components/usuaris/Contrassenyathk';
import Contactethk from './components/usuaris/Contactethk';
import Contacte from './components/usuaris/Contacte';

// config de les rutes de la web
ReactDOM.render (
  <Router>
    <ScrollToTop>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/searchres" component={SearchRes} />
        <Route path="/objectes" component={Objectes} />
        <Route path="/llibre" component={Llibre} />
        <Route path="/objecte" component={Objecte} />
        <Route path="/accedir" component={Accedir} />
        <Route path="/contrassenya-recordar" component={ContrassenyaRecordar} />
        <Route path="/baixa-dades" component={BaixaDades} />
        <Route path="/registre" component={Registre} />
        <Route path="/rrhh" component={Rrhh} />
        <Route path="/targeta" component={Targeta} />
        <Route path="/targetathk" component={Targetathk} />
        <Route path="/baixathk" component={Baixathk} />
        <Route path="/rrhhthk" component={Rrhhthk} />
        <Route path="/registrethk" component={Registrethk} />
        <Route path="/contrassenyathk" component={Contrassenyathk} />
        <Route path="/contactethk" component={Contactethk} />
        <Route path="/contacte" component={Contacte} />
      </Switch>
    </div>
    </ScrollToTop>
  </Router>,
  document.getElementById ('root')
);

//ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
