import logo from './logo.svg';
import './App.css';
import navBar from './navBar';
import leftComponent from './leftCompnent';
import rightComponent from './rightComponent';

function App() {
  return (
    <div className="App">
      {navBar()}
      <div className="split left">
        <div className="centered">
          <div className="leftImage">{leftComponent()}</div>
        </div>
      </div>

      <div className="split right">
        <div className="centered">     
          {rightComponent()}
        </div>
      </div>
    </div>
  );
}

export default App;
