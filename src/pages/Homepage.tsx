import { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { Link } from 'react-router-dom';
import Typewriter from "../components/animations/Typewriter";
import IMAGES from "../assets/Images";
import MainLayout from '../components/layouts/MainLayout';
import ScrollIndicator from '../components/ScrollIndicator';

export interface IHomepageProps {
}

export default function Homepage (props: IHomepageProps) {
  const scrollIndicatorRef = useRef<HTMLImageElement | null>(null);
  const text = 'BULÚC, bulucuri, s. n. 1. Număr mare de oameni strânși la un loc; droaie, gloată. ♦ În masă, în rânduri strânse, cu grămada; unul peste altul, înghesuindu-se; repede, iute.';
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  useEffect(() => {
    gsap.to('.scroll-indicator', {
      y: 10,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: 0 });
    tl.fromTo(['#header'], { y: "-200px", duration: 1 }, { y: 0, duration: 1 })
      .fromTo([scrollIndicatorRef.current], { opacity: 0, duration: 1 }, { opacity: 1, duration: 1, delay: 2 })

    return () => {
      tl.kill();
    };
  });

  return (
    <MainLayout noPadding noFooter>
      <div className="absolute top-0 bottom-0 right-0 left-0 z-[-1]">
        <div className="bg-cover bg-no-repeat bg-center h-full w-full" style={{ backgroundImage: `url(${IMAGES.homepageBg})` }}>
        </div>
      </div>

      <div className="h-screen w-screen overflow-hidden">
        <div className="h-screen bg-center bg-cover flex justify-center items-center">
            <div className='mx-[30vw] mb:mx-[15vw] bg-white shadow-lg br p-6 mb-[80px]'>
              <Typewriter text={text} speed={17} className='text-xl mb:text-5xl' />
            </div>
        </div>
      </div>

      <div ref={scrollIndicatorRef}>
        <ScrollIndicator size={32} text='Ce urmeaza?'/>
      </div>

      <div>
        <Link to="/experience"><img src={IMAGES.ExperienceV2_2} className="w-full" /></Link>
        <Link to="/challenge_yourself"><img src={IMAGES.homepageBanner2} className="w-full" /></Link>
      </div>
    </MainLayout>
  );
}
