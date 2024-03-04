import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import Contact from './pages/Contact';
import Despre from './pages/Despre';
import Spectacole from './pages/Spectacole';
import Spectacol from './pages/Spectacol';
import Proiecte from './pages/Proiecte';
import Blog from './pages/Blog';
import Sustine from './pages/Sustine';
import ChallengeYourself from './pages/ChallengeYourself';
import "./css/main.css";

interface AppProps {
}

const App: React.FC<AppProps> = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/culise" component={Despre} />
        <Route path="/sufragerie" component={Spectacole} />
        <Route path="/spectacol-dinIntamplare" component={Spectacol}  />
        <Route path="/proiecte" component={Proiecte} />
        <Route path="/gazeta" component={Blog} />
        <Route path="/sustine" component={Sustine} />
        <Route path="/contact" component={Contact} />
        <Route path="/challenge_yourself" component={ChallengeYourself} />
      </Switch>
    </Router>
    );
}

export default App;
