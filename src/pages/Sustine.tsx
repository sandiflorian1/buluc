import MainLayout from "../components/layouts/MainLayout";
import { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { Link } from 'react-router-dom';
import IMAGES from "../assets/Images";
export interface ISustineProps {
}

export default function Sustine(props: ISustineProps) {
  useEffect(() => {
    const tl = gsap.timeline({ repeat: 0 });
    tl.fromTo(".image1", { opacity: 0 }, { opacity: 1, duration: 0.5 })
      .fromTo(".card1", { opacity: 0 }, { opacity: 1, duration: 0.5 })
      .fromTo(".image2", { opacity: 0 }, { opacity: 1, duration: 0.5 })
      .fromTo(".card2", { opacity: 0 }, { opacity: 1, duration: 0.5 })
    return () => {
      tl.kill();
    };
  });

  return (
    <MainLayout>
      <div className="flex mb:inline">
        <div className="m-10">
          <div className="relative">
            <img className="mx-auto mb-8 image1" src={IMAGES.sustine} loading="lazy" alt="Image 1" />
            <div className="absolute sustine-text">
              <h1 className="text-white text-[5rem] mb:text-[2rem]">3,5 %</h1>
              <p className="text-white px-8 text-center text-[1.75rem] mb:text-[0.85rem]">Redirecționează 3,5% din impozitul pe venit către Asociația ”Buluc”</p>
            </div>
          </div>
          <Link to={'/sustine-form35page'} className="flex justify-center">
            <h4 className="text-orange bg-white btn-suport br">Donează</h4>
          </Link>
        </div>
        <div className="m-10">
          <div className="relative">
            <img className="mx-auto mb-8 image1" src={IMAGES.sustine} loading="lazy" alt="Image 1" />
            <div className="absolute sustine-text">
              <h1 className="text-white text-[4rem] mb:text-[1.5rem]">Donație</h1>
              <p className="text-white px-8 mb:px-4 text-center text-[1.75rem] mb:text-[0.85rem]">Toate ideile si inițiativele noastre pot fi sustinute printr-o donație directă in contul bancar al asociatiei noastre</p>
            </div>
          </div>
          <Link to={'/sustine-donatie'} className="flex justify-center">
            <h4 className="text-orange bg-white btn-suport br">Donează</h4>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
