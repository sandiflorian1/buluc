import MainLayout from "../components/layouts/MainLayout";
import { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import IMAGES from "../assets/Images";

export interface IOfficeProps { }


const Office: React.FC = () => {
  const officeRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: 0 });
    tl.fromTo(officeRef.current, { opacity: 0 }, { opacity: 1, duration: 1 })

    return () => {
      tl.kill();
    };
  });

  return (
    <MainLayout title="@The Office">
      <section id="office" ref={officeRef}>
        <div>
          <div className="flex flex-col md:flex-row mx-auto py-8 md:py-8" style={{ maxWidth: '50vw' }}>
            <div className="flex flex-col text-center">
              <p className="mb-1 text-5xl md:text-xl text-center">Challenge Yourself @The Office este un concept ce aduce în sufrageria de pe Madrid 4  un curs cu apucături de Office. Mai bine zis o ședință în care ne “jucăm” exact ca la un curs obișnuit doar ca adăugăm atmosfera de Office în sufragerie (evident), dar nu oricum ci în pijamale. </p>
              <p className="mb-1 text-5xl md:text-xl text-center">Ședința include 2h30 de jocuri, distracție & socializare toate într-o atmosferă de Office realizate prin intermediul unor tehnici teatrale ce te vor ajuta să-ți antrenezi creativitatea, viteza de reacție și te vor învăța să lucrezi cu emoțiile. </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Office;