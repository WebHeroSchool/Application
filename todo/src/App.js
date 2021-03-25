import logo from './logo.svg';
import './App.css';

const number = 35;
const multiply = 98*44;
const compare = multiply > 4000;
const isHuman = multiply < 4000;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{
          color: 'orange'
        }}> 
        You can change the world
        </p>   
        <p>
          {compare && 'The result is '}
          {number + multiply}
          {null}
          {undefined}
          {true}
          {false}
        </p>
        <p>
          {isHuman ? 'At first becomes a human' : 'Just start today' }
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
