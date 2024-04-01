import { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import Navbar from "../components/Navbar";
import Typewriter from "../components/animations/Typewriter";

export interface IHomepageProps {
}

export default function Homepage (props: IHomepageProps) {
  const logoRef = useRef<HTMLImageElement | null>(null);
  const navbarRef = useRef<HTMLImageElement | null>(null);
  const backgroundRef = useRef<HTMLDivElement | null>(null);
  const defRef = useRef<HTMLDivElement | null>(null);
  const text = 'BULÚC, bulucuri, s. n. 1. Număr mare de oameni strânși la un loc; droaie, gloată. ♦ În masă, în rânduri strânse, cu grămada; unul peste altul, înghesuindu-se; repede, iute.';

  useEffect(() => {
    const tl = gsap.timeline({ repeat: 0 });
    // tl.fromTo([backgroundRef.current], {  opacity: 0 }, {  opacity: 1, duration: 1  });
    tl.fromTo([navbarRef.current], {  y: "-200px", duration: 1 }, {  y: 0, duration: 1, delay: 5.5  });

    return () => {
      tl.kill();
    };
  });

  return (
    <>
      <div ref={navbarRef} style={{ position: 'absolute'}}>
        <Navbar />
      </div>

      <div className="h-screen w-screen overflow-hidden page">
        <div ref={backgroundRef} className="h-screen bg-center bg-cover flex justify-center items-center">
            <div ref={defRef} className='mx-[15vw]'>
              <Typewriter text={text} speed={30} className='text-xl' />
            </div>
        </div>
      </div>
    </>
  );
}
