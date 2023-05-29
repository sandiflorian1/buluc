import { useState, useEffect, useRef } from 'react';
import { useHistory  } from "react-router-dom";

import { gsap } from "gsap";
import { FaBars, FaTimes } from "react-icons/fa";


import "../css/navbar.css";

function Navbar() {
  const [isOpen, openNavbar] = useState<boolean>(false);
  const [isOpenFirstTime, openFirstTime] = useState<boolean>(false);
  const history = useHistory();
  const tl = gsap.timeline({ repeat: 0, paused: true });

  const dotRef = useRef<HTMLDivElement | null>(null);
  const openedNavbarRef = useRef<HTMLDivElement | null>(null);


  const goToLink = (link: string) => {
    tl.reverse(0);
    tl.then(() => history.push(link));
  }

  useEffect(() => {
    if (isOpenFirstTime) {
      tl.fromTo(
        [dotRef.current], 
        { 
          scale: 1,
          opacity: 0.1,
        }, 
        {scale: 150, opacity: 1, duration: 1 }
      );
      tl.fromTo([openedNavbarRef.current], {  opacity: 0 }, {  opacity: 1, duration: 0.1  });

      if(isOpen) {
        tl.play();
      } else {
        tl.reverse(0);
      }
    }
  }, [isOpen]);

  return(
    <>
      <div ref={dotRef} className='dot bg-red' />

      <div ref={openedNavbarRef} className={`pos-absolute w-screen h-screen bg-red flex items-center opacity-0`}>
        <FaTimes 
          fontSize={48} 
          className="fill-white sm:m-10 m-3 sm:text-5xl text-3xl pos-absolute"
          onClick={() => openNavbar(false)}
        />
        <div className='sm:ml-15 ml-10'>
          <ul>
            {links.map(({ link, name }) => (
              <li key={name}>
                <div 
                  onClick={() => goToLink(link)}
                  className="text-white sm:text-5xl text-3xl tab-name"
                >
                  {name}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {(!isOpen) && (
        <nav className='pos-absolute'>
          <FaBars  
            className="fill-red sm:m-10 m-3 sm:text-3xl text-2xl cursor-pointer"
            onClick={() => {openNavbar(true); openFirstTime(true);}}
          />
        </nav>
      )}
    </>
  );
}

export default Navbar;

const links = [
  {
    link: '/despre',
    name: '.despre',
  },
  {
    link: '/spectacole',
    name: '.spectacole',
  },
  {
    link: '/proiecte',
    name: '.proiecte',
  },
  {
    link: '/blog',
    name: '.blog',
  },
  {
    link: '/sustine',
    name: '.sustine',
  },
  {
    link: '/contact',
    name: '.contact',
  },
]