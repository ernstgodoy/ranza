import React from 'react';
import Main from './components/Main'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import  Navigation from './components/Navigation.js'


function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Router>
        <Switch>
          <Route exact path="/" component={ Main } />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
