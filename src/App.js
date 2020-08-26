import React from 'react';
import Main from './components/Main'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <React.Fragment>
      <div className="App">
      </div>
      <Router>
        <Switch>
          <Route exact path="/" component={ Main } />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
