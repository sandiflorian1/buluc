import "../css/buttons/button-navbar.css";
import { Link } from 'react-router-dom';
import "../css/navbar.css";

function SmallNavbar() {
  const { pathname } = window.location;

  return(
    <div className='sm:flex justify-between w-screen px-[2vw] items-center mb: justify-start'>
      <a href="/"><img 
        src="src/assets/images/buluc_loop.gif" 
        alt="buluc-gif" 
        className="w-32"
      /></a>

      <ul className='sm:flex justify-end py-6 mb:w-20'>
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
    </div>
  );
}

export default SmallNavbar;

const links = [
  {
    link: '/despre',
    name: 'despre',
  },
  {
    link: '/spectacole',
    name: 'spectacole',
  },
  {
    link: '/proiecte',
    name: 'proiecte',
  },
  {
    link: '/blog',
    name: 'blog',
  },
  {
    link: '/sustine',
    name: 'sustine',
  },
  {
    link: '/contact',
    name: 'contact',
  },
]