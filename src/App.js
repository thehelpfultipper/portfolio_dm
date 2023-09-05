
import Hamburger from './Components/Menu/Hamburger';
import logo from './Assets/portfolio-logo-min.svg';
// import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Hamburger />
        <img src={logo} className="App-logo" alt="logo" />
      </nav>
      <header className="App-header">

        <p>
          Edit <code>src/App.js</code> and save to reload.
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