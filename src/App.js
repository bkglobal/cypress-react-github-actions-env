import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Initial ENV ==> ", process.env.REACT_APP_BACKEND_URL);
    console.log("Initial SECRET ==> ", process.env.REACT_APP_BACKEND_SECRET);

  }, []);
  const handleClick = () => {
    console.log("Click event ENV ==> ", process.env.REACT_APP_BACKEND_URL);
    console.log("Click event SECRET ==> ", process.env.REACT_APP_BACKEND_SECRET);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button data-cy="init_button" onClick={handleClick}>
          Click here
        </button>
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
