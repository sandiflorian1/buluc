import "../css/buttons/button-navbar.css";
import { Link } from 'react-router-dom';
import "../css/navbar.css";
const imgUrl = new URL('/src/assets/images/buluc_loop.gif', import.meta.url).href;

function SmallNavbar() {
  const { pathname } = window.location;

  return(
    <header id="header" className='sm:flex justify-between w-screen px-[2vw] items-center mb: justify-start shadow-lg'>
      <a href="/">
        <img 
        src={imgUrl}
        alt="buluc-gif" 
        className="w-32"/>
      </a>

      <ul className='sm:flex justify-end py-6 mb:w-40'>
        {links.map(({ link, name }) => (
          <li key={name} className="px-4 uppercase">
            <Link 
              to={link}
              className={`sm:text-sm text-3xl btn-navbar ${pathname.includes(link) ? 'selected' : ''}`}
            >
              {name}
            </Link>
          </li>
          ))}
      </ul>
    </header>
  );
}

export default SmallNavbar;

const links = [
  {
    link: '/culise',
    name: 'culise',
  },
  {
    link: '/sufragerie',
    name: 'În sufragerie',
  },
  {
    link: '/challenge_yourself',
    name: 'challenge yourself',
  },
  {
    link: '/proiecte',
    name: 'proiecte',
  },
  {
    link: '/gazeta',
    name: 'gazetă',
  },
  {
    link: '/sustine',
    name: 'susține',
  },
  {
    link: '/contact',
    name: 'contact',
  },
]