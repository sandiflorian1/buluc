import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import Contact from './pages/Contact';
import Despre from './pages/Despre';
import Spectacole from './pages/Spectacole';
import Proiecte from './pages/Proiecte';
import Blog from './pages/Blog';
import Sustine from './pages/Sustine';
import ChallengeYourself from './pages/ChallengeYourself';
import Improshow from "./pages/Improshow";
import Concerte from "./pages/Concerte";
import MenuPage from "./pages/MenuPage";
import Office from "./pages/Office";
import Cafeluta from './pages/Cafeluta';
import BlogZoomtalks from './pages/BlogZoomtalks';
import IMAGES from "./assets/Images";
import Experience from './pages/Experience';
import Creative from './pages/Creative';
import Zoomtalks from "./pages/Zoomtalks";
import Roast from './pages/Roast';
import Doact from './pages/Doact';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/culise" component={Despre} />
        <Route path="/spectacole" component={Spectacole}  />
        <Route path="/proiecte" component={Proiecte} />
        <Route path="/gazeta" component={Blog} exact/>
        <Route path="/gazeta-buna-dimineata-la-cafeluta" component={Cafeluta} />
        <Route path="/gazeta-zoomtalks" component={BlogZoomtalks} />
        <Route path="/sustine" component={Sustine} />
        <Route path="/contact" component={Contact} />
        <Route path="/challenge_yourself" component={ChallengeYourself} />
        <Route path="/improshow" component={Improshow} />
        <Route path="/concerte" component={Concerte} />
        <Route path="/sufragerie" render={(props) => <MenuPage {...props} options={sufragetieActivities} />} />
        <Route path="/menu-challenge-yourfelf" render={(props) => <MenuPage {...props} options={challengeActivities} />} />
        <Route path="/office" component={Office} />
        <Route path="/experience" component={Experience} />
        <Route path="/thecreativegeneration" component={Creative} />
        <Route path="/roast" component={Roast} />
        <Route path="/doact" component={Doact} />
        <Route path="/zoomtalks" component={Zoomtalks} />
      </Switch>
    </Router>
    );
}

export default App;

const sufragetieActivities = [
  {
    id: "concerte",
    text: "serate",
    link: '/concerte',
    description: "SERÁTĂ, serate, s. f. Reuniune, întrunire cu caracter muzical, literar etc.; spec. petrecere de seară cu dans."
  },
  {
    id: "teatru",
    text: "teatru",
    link: '/spectacole',
    description: "TEÁTRU s. n. I. 1. arta de a reprezenta în fața unui public un spectacol dramatic, muzical, coregrafic etc."
  },
];

const challengeActivities = [
  {
    id: "party",
    text: "party",
    link: '/party',
    description: "blabla"
  },

  {
    id: "office",
    text: "office",
    link: '/office',
    description: "blabla"
  },
  {
    id: "teatru",
    text: '',
    link: '/challenge_yourself',
    description: "blabla"
  },
];