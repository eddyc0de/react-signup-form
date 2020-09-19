import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignUpForm from './containers/SignUpForm/SignUpForm';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route path='/' component={SignUpForm} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
