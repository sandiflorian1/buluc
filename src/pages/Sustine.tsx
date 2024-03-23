import MainLayout from "../components/layouts/MainLayout";
import { useRef, useEffect } from 'react';
import { gsap } from "gsap";
export interface ISustineProps {
}

export default function Sustine (props: ISustineProps) {
  useEffect(() => {
    const tl = gsap.timeline({ repeat: 0 });
    tl.fromTo(".image1", {  opacity: 0 }, {opacity: 1, duration: 0.5})
    .fromTo(".card1", {  opacity: 0 }, {opacity: 1, duration: 0.5})
    .fromTo(".image2", {  opacity: 0 }, {opacity: 1, duration: 0.5})
    .fromTo(".card2", {  opacity: 0 }, {opacity: 1, duration: 0.5})
    return () => {
      tl.kill();
    };
  });

  return (
    <MainLayout>
      <div className="ugl_fix grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 py-20">
        <div className="flex flex-col">
          <img className="mx-auto mb-8 image1" src="https://buluc.org/wp-content/themes/Buluc/assets/graphics/35.jpg" loading="lazy" alt="Image 1" />
          <div className="relative flex h-full card1">
            <div className="h-full w-full absolute top-3 right-3 border-2 border-dark" style={{ zIndex: -1 }}></div>
            <div className="bg-red py-8 px-4 sm:p-8 md:p-12 flex flex-col">
              <h3 className="text-white">3,5 %</h3>
              <p className="text-white font-normal mb-4 md:mb-8 text-xl md:text-2xl">Redirecționează 3,5% din impozitul pe venit către Asociația ”Buluc”</p>
              <a className="bg-white rounded-full py-2 px-6 md:px-8 text-red mt-auto no-underline" href="https://buluc.org/sustine/3-5/" style={{ width: 'fit-content' }}>Donează →</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col  h-full">
          <img className="mx-auto mb-8 image2" src="https://buluc.org/wp-content/themes/Buluc/assets/graphics/donatie.jpg" loading="lazy" alt="Image 2" />
          <div className="relative flex card2">
            <div className="h-full w-full absolute top-3 right-3 border-2 border-dark" style={{ zIndex: -1 }}></div>
            <div className="bg-orange py-8 px-4 sm:p-8 md:p-12 flex flex-col">
              <h3 className="text-white">Donație</h3>
              <p className="text-white font-normal mb-4 md:mb-8 text-xl md:text-2xl">Toate ideile si inițiativele noastre pot fi sustinute printr-o donație directă in contul bancar al asociatiei noastre</p>
              <a className="bg-white rounded-full py-2 px-6 md:px-8 text-orange mt-auto no-underline" href="https://buluc.org/sustine/donatie/" style={{ width: 'fit-content' }}>Donează →</a>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
