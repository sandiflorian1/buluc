import { useRef, useEffect } from 'react';
import MainLayout from "../components/layouts/MainLayout";
import { Link } from 'react-router-dom';
import { gsap } from "gsap";

export interface IMenuPageProps {
  options: { id: string; link: string; text: string, description: string }[]
} 

export default function MenuPage(props: IMenuPageProps) {
  const { options } = props;
  const menuRef = useRef<HTMLImageElement | null>(null);
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  if (!isMobile) {
    useEffect(() => {
      const menuItemsRef = menuRef.current?.children;
      if (menuItemsRef) {
        options.map((option, index) => {
          const description = menuItemsRef[index].querySelector('.description');
          const descHeight = description?.children[0].getBoundingClientRect().height;
          const tl = gsap.timeline({ repeat: 0, paused: true });
          if (description) {
            tl.fromTo(description.children, {  height: 0 }, {height: descHeight, duration: 0.5 }, 0)
              .fromTo(description, { opacity: 0}, { opacity: 1 }, 0);

            menuItemsRef[index].addEventListener('mouseover', () => {
              tl.play();
            })
            menuItemsRef[index].addEventListener('mouseleave', () => {
              tl.reverse();
            })
          }
        })
      }
    });
  }
  

  return (
    <MainLayout>
      <div className="py-20 pl-60 mb:pl-0 h-[80vh] flex items-center" >
        <div ref={menuRef} className="flex flex-col w-[25vw] mb:w-[80vw]">
          {options.map(({ id, link, text, description }) => (
            <Link 
              id={id}
              key={id}
              to={link}
              className="pb-5"
            >
              <h1 className="title">{text}</h1>
              <div className="description">
                <p className="" style={{ textShadow: '0.75px 0.75px 1.5px orange'}}>.{description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
