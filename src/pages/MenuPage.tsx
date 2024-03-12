import MainLayout from "../components/layouts/MainLayout";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { gsap } from "gsap";

export interface IMenuPageProps {
  options: { id: string; link: string; image: string }[]
} 

export default function MenuPage(props: IMenuPageProps) {
  const { options } = props;
  useEffect(() => {
    const tl = gsap.timeline({ repeat: 0 });
    tl
      .fromTo(`#${options[1].id}`, {  opacity: 0 }, {opacity: 1, duration: 0.5})
      .fromTo(`#${options[0].id}`, {  opacity: 0, y: '200px' }, { opacity: 1, y: 0, duration: 0.5 })
      .fromTo(`#${options[2].id}`, {  opacity: 0, y: '-200px' }, {opacity: 1, y: 0, duration: 0.5})
    return () => {
      tl.kill();
    };
  });

  return (
    <MainLayout>
      <div className="py-20" style={{ cursor: 'pointer' }} >
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {options.map((option) => (
            <Link 
              id={option.id}
              key={option.id}
              to={option.link}
            >
               <img className="mx-auto mb-4" src={option.image} loading="lazy" alt={option.id} />
            </Link>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
