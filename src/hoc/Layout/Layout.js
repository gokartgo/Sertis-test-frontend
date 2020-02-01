import React, { Component } from 'react';
import classes from './Layout.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Menu from '../../components/Menu/Menu'
import Aux from '../Auxiliary/Auxiliary'

class App extends Component {
  render() {
    return (
      <Aux>
        <Sidebar/>
        <main className={classes.Content}>
            <Menu/>
            {this.props.children}
        </main>
      </Aux>
    );
  }
}

export default App;
