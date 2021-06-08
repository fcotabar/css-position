import "./App.css";
// import { Grid } from "./components/grid/Grid";
import { GridBasic2 } from "./components/grid/GridBasic2";

function App() {
  return (
    <>
      <header className="App-header">
        <h1>CSS - Position</h1>
      </header>

      <GridBasic2 className="App-container" />

      <footer className="App-footer">
        <h4>Some footer</h4>
      </footer>
    </>
  );
}

export default App;
