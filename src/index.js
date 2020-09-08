
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Fitness from './components/fitness';
import Contact from './components/contact';
import Error from './components/Error';
import aboutus from './components/aboutus';
import blog from './components/blog';
import { BrowserRouter as Router , Switch , Route} from "react-router-dom";


class Index extends React.Component{
  render(){
    return(
      <Fragment>   
      <Router>
        <Switch>
        <Route path="/" exact component={Fitness}/>
        <Route path="/contact" exact component={Contact}/>
        <Route path="/aboutus" exact component={aboutus}/>
        <Route path="/blog" exact component={blog}/>
        <Route component={Error}/>
        </Switch>
      </Router>
      </Fragment>
    );
  }
}

ReactDOM.render(
    <Index />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();