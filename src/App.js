import React from 'react';
import './App.css';
import Home from './pages/Home';
import Clubs from './pages/Clubs';
import PageNotFound from './pages/PageNotFound';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom'
import ClubDetail from './pages/ClubDetail';
function App() {
  return (
    <Router>
    <div className="App">
        <Switch>
          <Route exact path="/" component={Home} ></Route>
          <Route exact path="/clubs" component={Clubs} ></Route>
          <Route exact path="/clubs/:slug" component={ClubDetail} ></Route>
          <Route exact component={PageNotFound} ></Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
