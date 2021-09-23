import './App.css';
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Home } from './components/Home';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from "./components/Footer";

function App() {

  const [menuOpen, setMenuOpen] = useState(true);

  return (
<div className="App">
      <header className="App-header">
            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      </header>
      <body className="body">
          <Router>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/About" component={About} />
              <Route path="/Projects" component={Projects} />
              <Route path="/Contact" component={Contact} />
            </Switch>
          </Router>
      </body>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
