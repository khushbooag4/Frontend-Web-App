import React from 'react';
import  Navbar  from './component/Navbar/Navbar';
import Header from './component/Header'
import MainSection from './component/MainSection.js';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
 <Router>
    <div className="body">
     <Header /><Navbar />
     <MainSection />
     <Switch>
      <Route path="/" exact />
     </Switch>
     </div>
     </Router>
     );
}

export default App;
