import React, { Component } from 'react';
import logo from './logo.svg';
import firebase from "firebase"
import './App.css';
const config = {
  apiKey: "AIzaSyA6fVuNm-w-ISweTm-nQHj5t9_Jpc0WQfg",
    authDomain: "react-database-cf74b.firebaseapp.com",
    databaseURL: "https://react-database-cf74b.firebaseio.com",
    storageBucket: "react-database-cf74b.appspot.com",
    messagingSenderId: "1087859372459"
}

firebase.initializeApp(config);



componentWillMount:{
  var rootRef = firebase.database().ref();
  rootRef.on("value",function(snaps)
  {
    console.log(snaps.val())
  })

}


class App extends Component {
  constructor()
{
  super()
  this.state={speed:10}
}
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Speed {this.state.speed}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
