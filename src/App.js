import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Header } from "./components/Header";
import { Home } from './components/Home';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Cv } from './components/Cv';
import { Contact } from './components/Contact';

function App() {
  return (
<div className="App">
      <header className="App-header">
        <h3>
          Junior Front-end Developer
        </h3>
        <h1>
          Jonathan
        </h1>
          <Router>
            <Link to="/"><button className="btn btn-outline-light col-2 p-2" type="button"> Home </button></Link>
            <Link to="/pokedex"><button className="btn btn-outline-light col-2 p-2" type="button"> Jonathan</button></Link>
            <Link to="/pokedex"><button className="btn btn-outline-light col-2 p-2" type="button"> My Work</button></Link>
            <Link to="/pokedex"><button className="btn btn-outline-light col-2 p-2" type="button"> Curriculum Vitae</button></Link>
            <Link to="/pokedex"><button className="btn btn-outline-light col-2 p-2" type="button"> Connection</button></Link>
            <Header/>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/About" component={About} />
              <Route path="/Projects" component={Projects} />
              <Route path="/Cv" component={Cv} />
              <Route path="/Contact" component={Contact} />
            </Switch>
          </Router>
      </header>
    </div>
  );
}

export default App;
