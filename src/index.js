import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './componentes/home/Home';
//import Nosotros from './componentes/nosotros/Nosotros';
//import Servicios from './componentes/servicios/Servicios';
//import Contacto from './componentes/contacto/Contacto';

ReactDOM.render (
  <Router>
    <div>
      <Switch>
        {/* Paginas */}
        <Route exact path="/" component={Home} />
        {/* <Route path="/nosotros" component={Nosotros} /> */}
        {/* <Route path="/servicios" component={Servicios} /> */}
        {/* <Route path="/contacto" component={Contacto} /> */}
      </Switch>
    </div>
  </Router>,
  document.getElementById ('root')
);

//ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
