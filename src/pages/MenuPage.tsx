import MainLayout from "../components/layouts/MainLayout";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { gsap } from "gsap";

export interface IMenuPageProps {
  options: { id: string; link: string; text: string, description: string }[]
} 

export default function MenuPage(props: IMenuPageProps) {
  const { options } = props;
  // useEffect(() => {
  //   const tl = gsap.timeline({ repeat: 0 });
  //   tl
  //     .fromTo(`#${options[1].id}`, {  opacity: 0 }, {opacity: 1, duration: 0.5})
  //     .fromTo(`#${options[0].id}`, {  opacity: 0, y: '200px' }, { opacity: 1, y: 0, duration: 0.5 })
  //     .fromTo(`#${options[2].id}`, {  opacity: 0, y: '-200px' }, {opacity: 1, y: 0, duration: 0.5})
  //   return () => {
  //     tl.kill();
  //   };
  // });

  return (
    <MainLayout>
      <div className="py-20" >
        <div className="flex">
          {options.map(({ id, link, text, description }) => (
            <Link 
              id={id}
              key={id}
              to={link}
            >
              <h1>{text}</h1>
              <p>{description}</p>
            </Link>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
