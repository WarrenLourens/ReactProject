// The main web app 
import React from 'react';
import './App.css';
import Home from './views/Home';
import Music from './views/Music';
import Forum from './views/forum';
import Gallery from './views/gallery';
import Services from './views/Services';
import Breeds from './views/breeds';
import Nutrition from './views/nutrition';
import Events from './views/events';
import LoginPage from './views/loginpage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App=()=> {
  return (
    // ./ marks a landing page.
    <>
     
      <Router>
        <Switch>     
          <Route path='/' exact component={Home}/>  
          <Route path='/loginpage' exact component={LoginPage}/>
          <Route path='/music' exact component={Music}/>
          <Route path='/forum' exact component={Forum}/>
          <Route path='/Services' exact component={Services}/>
          <Route path='/gallery' exact component={Gallery}/>
          <Route path='/nutrition' exact component={Nutrition}/>
          <Route path='/breeds' exact component={Breeds}/>
          <Route path='/events' exact component={Events}/>


          </Switch>
          </Router>
          
    </>
  );
}

export default App;
