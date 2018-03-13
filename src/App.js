import React, { Component } from 'react';

// ROUTING
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// FIREBASE
import firebase from 'firebase';

// COMPONENTS
import Layout from './components/Layout/Layout';
import HomePage from './scenes/Home/HomePage';
import Festival from './scenes/Festival/Festival';
import Concert from './scenes/Festival/scenes/Concert/Concert';
import Mapping from './scenes/Festival/scenes/Mapping/Mapping';
import Association from './scenes/Association/Association';
import Gallery from './scenes/Gallery/Gallery';
import Contact from './scenes/Contact/Contact';

class App extends Component {

  firebaseConfig = {
    authDomain: "amm-react.firebaseapp.com",
    databaseURL: "https://amm-react.firebaseio.com",
    projectId: "amm-react",
    storageBucket: "amm-react.appspot.com",
  }

  render() {

    firebase.initializeApp(this.firebaseConfig);
    
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/festival' component={Festival} />
            <Route path='/festival/concert' component={Concert} />
            <Route path='/festival/mapping' component={Mapping} />
            <Route path='/asso' component={Association} />
            <Route path='/galerie' component={Gallery} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
