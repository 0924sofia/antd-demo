import './App.css';
import Login from './components/Login';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

const homeUrl = "/home"
const aboutUrl = "/about"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to={homeUrl}>Home</Link>
        <Link to={aboutUrl}>About</Link>

        <Switch>
          <Route path={homeUrl}>
            <Home id={'homeid'}/>
          </Route>

          <Route path={aboutUrl}>
            <About/>
          </Route>
        </Switch>
      </BrowserRouter>
      {/*<Login/>*/}
    </div>
  );
}

export default App;
