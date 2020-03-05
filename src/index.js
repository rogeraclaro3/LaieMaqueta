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
import ScrollToTop from './componentes/scrolltotop/Scrolltop';
import Home from './componentes/home/Home';
import SearchRes from './componentes/searchres/SearchRes';
import Objectes from './componentes/objectes/Objectes';
import Llibre from './componentes/llibre/Llibre';
import Objecte from './componentes/objecte/Objecte';

// config de les rutes de la web
ReactDOM.render (
  <Router>
    <ScrollToTop >
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/searchres" component={SearchRes} />
        <Route path="/objectes" component={Objectes} />
        <Route path="/llibre" component={Llibre} />
        <Route path="/objecte" component={Objecte} />
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
