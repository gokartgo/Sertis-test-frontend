import React, { Component } from 'react'
import Layout from './hoc/Layout/Layout'
import CardContainer from './containers/CardContainer/CardContainer'

class App extends Component {
  render() {
    return (
      <Layout>
        <CardContainer/>
      </Layout>
    );
  }
}

export default App;
