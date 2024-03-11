import MainLayout from "../components/layouts/MainLayout";
import Slider from '../components/Slider';
import IMAGES from "../assets/Images";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { gsap } from "gsap";

export interface ISectacoleProps {
} 

export default function Sectacole(props: ISectacoleProps) {
  useEffect(() => {
    const tl = gsap.timeline({ repeat: 0 });
    tl
      .fromTo("#concerte", {  scale: 0 }, {scale: 1, duration: 0.5})
      .fromTo("#improshow", {  opacity: 0, y: '200px' }, { opacity: 1, y: 0, duration: 0.5 })
      .fromTo("#teatru", {  opacity: 0, y: '-200px' }, {opacity: 1, y: 0, duration: 0.5})
    return () => {
      tl.kill();
    };
  });

  return (
    <MainLayout title="în sufragerie">
      <div className="pb-20" style={{ cursor: 'pointer'}}>
        {/* <Slider slides={slides} /> */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {activities.map((activity) => (
            <Link 
              id={activity.id}
              key={activity.id}
              to={activity.link}
            >
               <img className="mx-auto mb-4" src={activity.image} loading="lazy" alt={activity.id} />
            </Link>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

const activities = [
  {
    id: "improshow",
    image: IMAGES.improshow,
    link: '/improshow',
  },

  {
    id: "concerte",
    image: IMAGES.concerte,
    link: '/concerte',
  },
  {
    id: "teatru",
    image: IMAGES.teatru,
    link: '/spectacol-dinIntamplare',
  },
  
];
