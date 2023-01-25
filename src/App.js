import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact>
            <Home />
          </Route>
          <Route path="/about" component={About} exact>
            <About />
          </Route>
          <Route path="/contact" component={Contact} exact>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
