import './App.css';
import navBar from './navBar';
import LeftComponent from './LeftCompnent';
import RightComponent from './RightComponent';
import React from 'react';

class App extends React.Component {
  state = {
    url:'https://imgur.com/iOeUBV7.png',
    feature:"Time"
  }

  render(){  return (
      <div className="App">
        {navBar()}
        <div className="split left">
          <div className="centered">
            <div className="leftImage"><LeftComponent /></div>
          </div>
        </div>

        <div className="split right">
          <div className="centered">     
            <RightComponent />
          </div>
        </div>
      </div>
    );}
}

export default App;
