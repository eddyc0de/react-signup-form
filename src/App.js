import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignUpForm from './containers/SignUpForm/SignUpForm';
import Layout from './hoc/Layout/Layout';

class App extends Component {
  render() {
    return (
      <Layout>
        <BrowserRouter>
          <Switch>
            <Route path='/' component={SignUpForm} />
          </Switch>
        </BrowserRouter>
      </Layout>
    );
  }
}

export default App;
