import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from "./components/Header";
import { Home } from './components/Home';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Cv } from './components/Cv';
import { Contact } from './components/Contact';
import { Footer } from "./components/Footer";

function App() {
  return (
<div className="App">
      <header className="App-header">
          <Router>
            <Header/>
            <Switch>
              <Route path="/Home" exact component={Home} />
              <Route path="/About" component={About} />
              <Route path="/Projects" component={Projects} />
              <Route path="/Cv" component={Cv} />
              <Route path="/Contact" component={Contact} />
            </Switch>
          </Router>
      </header>
      <body className="body">
      </body>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
