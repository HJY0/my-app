import logo, { ReactComponent as Logo } from "./logo.svg";
import "./App.css";
import { CountButton } from "./CountButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img tabIndex={0} src={logo} className="App-logo" alt="logo" /> */}
        <Logo />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>리액트 시작합니다.</p>
        <CountButton />
      </header>
    </div>
  );
}

export default App;
