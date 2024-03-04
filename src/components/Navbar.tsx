import { useState, useEffect, useRef } from 'react';
import { useHistory  } from "react-router-dom";

import { gsap } from "gsap";
import { FaBars, FaTimes } from "react-icons/fa";
import SliderNavbar from "./SliderNavbar";


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
          opacity: 0,
        }, 
        {scale: 150, opacity: 1, duration: 1 }
      );
      tl.fromTo([openedNavbarRef.current], {  opacity: 0, display: 'none' }, {  opacity: 1, display: 'block', duration: 0.1  });

      if(isOpen) {
        tl.play();
      } else {
        tl.reverse(0);
      }
    }
  }, [isOpen]);

  const clickOnPage = () => {
    if (!isOpen) {
      openNavbar(true); 
      openFirstTime(true);
    }
  }

  return(
    <div onClick={() => clickOnPage()} className='cursor-pointer absolut-0-0'>
      <div ref={dotRef} className='dot bg-red' />

      <div ref={openedNavbarRef} className={`pos-absolute w-screen h-screen bg-red flex items-center opacity-0 hidden z-10`}>
        <FaTimes 
          fontSize={24} 
          className="fill-white sm:m-5 m-3 pos-absolute cursor-pointer z-20"
          onClick={() => openNavbar(false)}
        />
        
        <SliderNavbar
          goToLink={goToLink}
          links={links}
          isOpenFirstTime
        />
      </div>

      {(!isOpen) && (
        <nav className='pos-absolute'>
            <FaBars
              fontSize={24}   
              className="fill-red sm:m-5 m-3 cursor-pointer"
              onClick={() => {openNavbar(true); openFirstTime(true);}}
            />
        </nav>
      )}
    </div>
  );
}

export default Navbar;

const links = [
  {
    link: '/culise',
    name: 'in culise',
  },
  {
    link: '/spectacole',
    name: 'in sufragerie',
  },
  {
    link: '/spectacole',
    name: 'challenge yourself',
  },
  {
    link: '/proiecte',
    name: 'proiecte',
  },
  // {
  //   link: '/blog',
  //   name: 'blog',
  // },
  // {
  //   link: '/sustine',
  //   name: 'sustine',
  // },
  // {
  //   link: '/contact',
  //   name: 'contact',
  // },
  {
    link: '',
    name: 'parteneri',
  },
]