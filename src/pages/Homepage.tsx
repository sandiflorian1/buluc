import { useRef, useEffect } from 'react';
import { gsap } from "gsap";

export interface IHomepageProps {
}

export default function Homepage (props: IHomepageProps) {
  const logoRef = useRef<HTMLImageElement | null>(null);
  const backgroundRef = useRef<HTMLDivElement | null>(null);
  const defRef = useRef<HTMLDivElement | null>(null);
  const centerOfScreen = {
    x: (screen.width / 2),
    y: (screen.height / 2),
  }

  useEffect(() => {
    const tl = gsap.timeline({ repeat: 0 });
    tl.fromTo(
      [logoRef.current], 
      { 
        x: `${centerOfScreen.x}px`,
        y: `${centerOfScreen.y}px`,
        opacity: 0.01,
      }, 
      { x: 0, y: 0, opacity: 1, duration: 1.5 }
    );
    tl.fromTo([backgroundRef.current], {  opacity: 0 }, {  opacity: 1, duration: 1.5  });
    tl.fromTo([defRef.current], { y: "400px", duration: 2 }, { y: 0, duration: 2 });
    return () => {
      tl.kill();
    };
  });

  return (
    <div className="h-screen w-screen overflow-hidden page">
      <img 
        ref={logoRef}
        src="src/assets/images/buluc_loop.gif" 
        alt="buluc-gif" 
        className="w-32 xl:w-64 absolute m-6 z-10"
      />
      <div ref={backgroundRef} className="h-screen mx-[5vw] bg-main bg-center bg-cover flex justify-center h-full">
        <div className="container flex justify-center h-full">
          <div ref={defRef} className="bg-white w-[65rem] mt-auto mb-[10vh] drop-shadow-2xl p-16">
            <p className="text-[1rem] sm:text-[1.5rem]">
              BULÚC, bulucuri, s. n. 1. Număr mare de oameni strânși la un loc; droaie, gloată. ♦ În masă, în rânduri strânse, cu grămada; unul peste altul, înghesuindu-se; repede, iute.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
