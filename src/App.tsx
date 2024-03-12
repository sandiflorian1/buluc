import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import Contact from './pages/Contact';
import Despre from './pages/Despre';
import Spectacol from './pages/Spectacol';
import Proiecte from './pages/Proiecte';
import Blog from './pages/Blog';
import Sustine from './pages/Sustine';
import ChallengeYourself from './pages/ChallengeYourself';
import Improshow from "./pages/Improshow";
import Concerte from "./pages/Concerte";
import MenuPage from "./pages/MenuPage";
import Party from "./pages/Party";
import Office from "./pages/Office";

import "./css/main.css";
import IMAGES from "./assets/Images";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/culise" component={Despre} />
        <Route path="/spectacol-dinIntamplare" component={Spectacol}  />
        <Route path="/proiecte" component={Proiecte} />
        <Route path="/gazeta" component={Blog} />
        <Route path="/sustine" component={Sustine} />
        <Route path="/contact" component={Contact} />
        <Route path="/challenge_yourself" component={ChallengeYourself} />
        <Route path="/improshow" component={Improshow} />
        <Route path="/concerte" component={Concerte} />
        <Route path="/sufragerie" render={(props) => <MenuPage {...props} options={sufragetieActivities} />} />
        <Route path="/menu-challenge-yourfelf" render={(props) => <MenuPage {...props} options={challengeActivities} />} />
        <Route path="/party" component={Party} />
        <Route path="/office" component={Office} />
      </Switch>
    </Router>
    );
}

export default App;

const sufragetieActivities = [
  {
    id: "improshow",
    image: IMAGES.improshow,
    link: '/improshow',
  },

  {
    id: "concerte",
    image: IMAGES.concerte,
    link: '/concerte',
  },
  {
    id: "teatru",
    image: IMAGES.teatru,
    link: '/spectacol-dinIntamplare',
  },
];

const challengeActivities = [
  {
    id: "party",
    image: IMAGES.party,
    link: '/party',
  },

  {
    id: "office",
    image: IMAGES.office,
    link: '/office',
  },
  {
    id: "teatru",
    image: IMAGES.challengeYourself,
    link: '/challenge_yourself',
  },
];