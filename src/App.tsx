import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
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
import Experience from './pages/Experience';
import ExperienceV2 from './pages/ExperienceV2';
import Creative from './pages/Creative';
import Zoomtalks from "./pages/Zoomtalks";
import Roast from './pages/Roast';
import Doact from './pages/Doact';
import Form35Page from './pages/Form35Page';
import Donatie from './pages/Donation';
import Confidentialitate from './pages/Confidentialitate';
import { ToastContainer } from 'react-toastify';
import ConsimtamantPage from './pages/ConsimtamantPage';
import ConsimtamantAvansatiPage from './pages/ConsimtamantAvansatiPage';
import ExperienceV3 from './pages/ExperienceV3';
import Faq from './pages/Faq';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/culise" component={Despre} />
        <Route path="/spectacole" component={Spectacole}  />
        <Route path="/proiecte" component={Proiecte} exact />
        <Route path="/gazeta" component={Blog} exact />
        <Route path="/gazeta-buna-dimineata-la-cafeluta" component={Cafeluta} />
        <Route path="/gazeta-zoomtalks" component={BlogZoomtalks} />
        <Route path="/sustine" component={Sustine} exact />
        <Route path="/sustine-form35page" component={Form35Page} />
        <Route path="/sustine-donatie" component={Donatie} />
        <Route path="/contact" component={Contact} />
        <Route path="/politica-de-confidentialitate" component={Confidentialitate} />
        <Route path="/challenge_yourself" component={ChallengeYourself} />
        <Route path="/improshow" component={Improshow} />
        <Route path="/concerte" component={Concerte} />
        <Route path="/sufragerie" render={(props) => <MenuPage {...props} options={sufragetieActivities} />} />
        <Route path="/menu-challenge-yourfelf" render={(props) => <MenuPage {...props} options={challengeActivities} />} />
        <Route path="/office" component={Office} />
        <Route path="/experience" component={Experience} />
        <Route path="/ChyExperience2" component={ExperienceV2} />
        <Route path="/ChyExperience3" component={ExperienceV3} />
        <Route path="/proiecte/thecreativegeneration" component={Creative} />
        <Route path="/proiecte/roast" component={Roast} />
        <Route path="/proiecte/doact" component={Doact} />
        <Route path="/proiecte/zoomtalks" component={Zoomtalks} />
        <Route path="/consimtamant" component={ConsimtamantPage} />
        <Route path="/consimtamant-avansati" component={ConsimtamantAvansatiPage} />
        <Route path="/faq" component={Faq} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
      <ToastContainer 
        hideProgressBar={true}
        theme="colored"
      />
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