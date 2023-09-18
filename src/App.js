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
        <img src={logo} className="App-logo" alt="logo" data-cy="logo-app"/>
        <p>
          {process.env.REACT_APP_BACKEND_URL}
        </p>
        <p>
          {process.env.REACT_APP_BACKEND_SECRET}
        </p>
        <button data-cy="click-btn" onClick={handleClick}>
          Click here
        </button>
        <input data-cy="baseUrlInput" type="text" />
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
