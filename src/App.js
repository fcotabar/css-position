import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
// import { Grid } from "./components/grid/Grid";
// import { GridBasic2 } from "./components/grid/GridBasic2";
// import { GridTemplateArea } from "./components/grid/GridTemplateArea";
import { NavBar } from "./components/nav/NavBar";
import { AppRouter } from "./routes/AppRouter";

function App() {
  return (
    <Router>
      <header className="App-header">
        <h1>CSS - Position</h1>
        <NavBar />
      </header>

      <AppRouter />

      <footer className="App-footer">
        <h4>Some footer</h4>
      </footer>
    </Router>
  );
}

export default App;
