import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import PrivateRoute from './pages/PrivateRoute'
import { Login, Dashboard, Error } from './pages/index'

class App extends Component {
  render() {
    console.log(Navbar)
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar />
            <Switch>
              <Route path="/login" component={Login} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
