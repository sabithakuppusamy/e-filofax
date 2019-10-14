import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import TodoDetails from './components/dashboard/TodoDetails';
import CreateNewPlan from './components/dashboard/CreateNewPlan';
import SignIn from './components/auth/SignIn';
import Register from './components/auth/Register';


function App() {
  return (
  <Router>
    <Navbar/>
    <Switch>
      <Route  path='/' exact component={Dashboard}></Route>
      <Route  path='/todo/:id' exact component={TodoDetails}></Route>
      <Route  path='/signin' exact component={SignIn}></Route>
      <Route  path='/register' exact component={Register}></Route>
      <Route  path='/create' exact component={CreateNewPlan}></Route>
    </Switch>
  </Router>
  );
}

export default App;
