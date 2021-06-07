import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Projects, Resume} from './components';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import './flip.css';
import { Home } from './components/Home/Home';
import { Contact } from './components/Contact';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>

        <Route exact path='/'>
          <Home title="portfolio"/>
        </Route>
        
        <Route exact path='/resume'>
          <Resume/>
        </Route>

        <Route path='/projects'>
          <Projects/>
        </Route>

        <Route path='/contact'>
          <Contact/>
        </Route>
        

      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
