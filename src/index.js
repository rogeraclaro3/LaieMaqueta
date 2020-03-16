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

//planes cistella
import Cistella from './components/cistella/Cistella';
import Cistella2 from './components/cistella/Cistella2';
import Cistella3 from './components/cistella/Cistella3';
import Cistella4 from './components/cistella/Cistella4';
import Cistella5 from './components/cistella/Cistella5';
import Cistella6 from './components/cistella/Cistella6';
import Cistella7 from './components/cistella/Cistella7';
import Cistella8 from './components/cistella/Cistella8';

//planes espai privat
import PrivatEbooks from './components/usuaris/privat/Ebooks';
import PrivatAdreces from './components/usuaris/privat/Adreces';
import PrivatAdrecesAfegir from './components/usuaris/privat/AdrecesAfegir';
import PrivatDades from './components/usuaris/privat/Dades';
import PrivatContrassenya from './components/usuaris/privat/Contrassenya';
import PrivatFavorits from './components/usuaris/privat/Favorits';

//config de les rutes de la web
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
        <Route path="/cistella" component={Cistella} />
        <Route path="/cistella2" component={Cistella2} />
        <Route path="/cistella3" component={Cistella3} />
        <Route path="/cistella4" component={Cistella4} />
        <Route path="/cistella5" component={Cistella5} />
        <Route path="/cistella6" component={Cistella6} />
        <Route path="/cistella7" component={Cistella7} />
        <Route path="/cistella8" component={Cistella8} />
        <Route path="/privat/ebooks" component={PrivatEbooks} />
        <Route path="/privat/adreces" component={PrivatAdreces} />
        <Route path="/privat/adrecesafegir" component={PrivatAdrecesAfegir} />
        <Route path="/privat/dades" component={PrivatDades} />
        <Route path="/privat/contrassenya" component={PrivatContrassenya} />
        <Route path="/privat/favorits" component={PrivatFavorits} />

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
