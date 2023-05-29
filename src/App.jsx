import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import Contact from './pages/Contact';
import Despre from './pages/Despre';
import Spectacole from './pages/Spectacole';
import Proiecte from './pages/Proiecte';
import Blog from './pages/Blog';
import Sustine from './pages/Sustine';
import "./css/main.css";

function App() {
  return (
  <Router>
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/despre" component={Despre} />
      <Route path="/spectacole" component={Spectacole} />
      <Route path="/proiecte" component={Proiecte} />
      <Route path="/blog" component={Blog} />
      <Route path="/sustine" component={Sustine} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </Router>
  );
}

export default App;
