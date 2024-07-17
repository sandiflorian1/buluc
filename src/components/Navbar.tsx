import { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import { motion, useCycle } from "framer-motion";
import IMAGES from "../assets/Images";
import MenuToggle from "../components/buttons/MenuToggle";
import "../css/buttons/button-navbar.css";
import "../css/navbar.css";

const variants1 = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

function Navbar() {
  const { pathname } = window.location;
  const [isOpen, toggleOpen] = useCycle(false, true);
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const containerRef = useRef<HTMLElement | null>(null);
  const ref = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const miniMenu = ref.current?.querySelector('li.has-menu');
    miniMenu?.addEventListener('mouseover', () => {
      const menu = miniMenu.querySelector<HTMLElement>('.menu');
      if (menu) {
        menu.style.opacity = "1";
      }
    })

    miniMenu?.addEventListener('mouseleave', () => {
      const menu = miniMenu.querySelector<HTMLElement>('.menu');
      if (menu) {
        menu.style.opacity = "0";
      }
    })
  })

  return (
    <header ref={ref} id="header" className='sm:flex justify-between w-screen px-[2vw] items-center shadow-lg fixed'>
      {!isMobile && (
        <>
          <a href="/">
            <img
              src={IMAGES.logo}
              alt="buluc-gif"
              className="h-[5rem]" />
          </a>

          <ul className='sm:flex justify-end py-6 mb:w-40'>
            {links.map(({ link, name, miniMenu }) => (
              <li key={name} className={`px-4 uppercase ${miniMenu && 'has-menu'}`}>
                <Link
                  to={link}
                  className={`sm:text-sm text-3xl btn-navbar ${pathname.includes(link) ? 'selected' : ''}`}
                >
                  {name}
                </Link>
                {miniMenu &&
                  <div className="menu opacity-0 shadow-md">
                    <ul>
                      {miniMenu.map(({ link, name }) => (
                        <li key={name} className="px-4 pb-2 capitalize">
                          <Link
                            to={link}
                            className={`sm:text-sm text-3xl btn-navbar ${pathname.includes(link) ? 'selected' : ''}`}
                          >
                            {name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>}
              </li>
            ))}
          </ul>
        </>
      )}

      {isMobile && (
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={containerRef?.current?.offsetHeight}
          ref={containerRef}
        >
          <div className="mb:flex w-full justify-between">
            <a href="/">
              <img
                src={IMAGES.logo}
                alt="buluc-gif"
                className="w-32" />
            </a>
            <MenuToggle toggle={() => toggleOpen()} />
          </div>
          <motion.div variants={sidebar} />
          <motion.ul variants={variants1} style={{ display: isOpen ? 'block' : 'none', width: 'fit-content' }} className="p-5">
            <>
              {links.map(({ link, name, miniMenu }) => (
                <>
                  <motion.li
                    variants={variants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    key={name}
                  >
                    <Link
                      to={link}
                      className={`btn-navbar capitalize ${pathname.includes(link) ? 'selected' : ''}`}
                    >
                      {name}
                    </Link>
                  </motion.li>
                  {miniMenu &&
                    miniMenu.map(({ link, name }) => (
                      <motion.li
                        variants={variants}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        key={name}
                      >
                        <Link
                          to={link}
                          className={`btn-navbar capitalize ${pathname.includes(link) ? 'selected' : ''}`}
                        >
                          {name}
                        </Link>
                      </motion.li>
                    ))}
                </>
              ))}
            </>
          </motion.ul>
        </motion.nav>
      )}

    </header>
  );
}

export default Navbar;

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
    miniMenu: [
      {
        link: '/experience',
        name: ' @The Experience',
      },
      {
        link: '/office',
        name: '@The Office',
      },
    ],
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