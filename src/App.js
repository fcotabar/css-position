import "./App.css";
// import { Grid } from "./components/grid/Grid";
// import { GridBasic2 } from "./components/grid/GridBasic2";
import { GridTemplateArea } from "./components/grid/GridTemplateArea";

function App() {
  return (
    <>
      <header className="App-header">
        <h1>CSS - Position</h1>
      </header>

      <GridTemplateArea className="App-container" />

      <footer className="App-footer">
        <h4>Some footer</h4>
      </footer>
    </>
  );
}

export default App;
