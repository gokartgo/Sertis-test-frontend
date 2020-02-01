import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout'

import AddCardContainer from './containers/AddCardContainer/AddCardContainer'
import CardContainer from './containers/CardContainer/CardContainer'

class App extends Component {
  
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/add-card" component={AddCardContainer}/>
          <Route path="/" exact component={CardContainer}/>
        </Switch>
      </Layout>
    );
  }
}

export default App;
