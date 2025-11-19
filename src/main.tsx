import ReactDOM from 'react-dom/client';
import './i18n'; // Importă configurarea i18next
import App from './App.js';
import "./index.css";
import "./css/main.css";
import './styles/global.scss';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
)
