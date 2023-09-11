import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { FaBars, FaTimes } from "react-icons/fa";
import "../css/navbar.css";

function SliderNavbar({
  goToLink,
  links,
  isOpenFirstTime,
}: {
  goToLink: (link: string) => void,
  links: { link: string; name: string; }[],
  isOpenFirstTime: boolean,
}) {
  const currentComponentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    links.forEach(link => {
      if (currentComponentRef) {
        const tl = gsap.timeline({ paused: true });
        switch (link.name) {
          case 'despre':
            tl.fromTo(".section-despre", { opacity: 0 }, { opacity: 1, duration: 1 });
            tl.fromTo(".section-despre img", { scale: 0 }, { scale: 1, duration: 0.5, });
            tl.fromTo(".section-despre .dott", { scale: 0 }, { scale: 1, duration: 0.5, });
            break;
          case 'spectacole':
            tl.fromTo(".section-spectacole", { opacity: 0 }, { opacity: 1, duration: 0.25 })
              .fromTo(".image1",{ opacity: 0 }, { opacity: 1, duration: 0.25 })
              .fromTo(".image2",{ opacity: 0 }, { opacity: 1, duration: 0.25 })
              .fromTo(".image3",{ opacity: 0 }, { opacity: 1, duration: 0.25 });
            break;

          case 'parteneri':
            tl.fromTo(".section-parteneri", { opacity: 0 }, { opacity: 1, duration: 0.5 })
            tl.fromTo(".section-parteneri img", { scale: 0 }, { scale: 1, duration: 0.5, stagger: 0.1 })
            break;
          default:
        }
        const item = currentComponentRef?.current?.querySelector(`#${link.name}`);
        item?.addEventListener('mouseenter', (event: any) => {
          hidesliders();
          tl.restart();
        })
      }
    })
  }, []);

  return (
    <>
      <div className='sm:mx-15 mx-10 flex flex-wrap w-full h-full d-flex items-center' ref={currentComponentRef}>
        <div className=''>
          <ul>
            {links.map(({ link, name }) => (
              <li key={name}>
                <div
                  onClick={() => goToLink(link)}
                  id={name}
                  className="text-white text-3xl mb:text-[2rem] tab-name mb-5 ml-10"
                >
                  .{name}
                </div>
              </li>
            ))}
          </ul>
        </div>


        <div className='flex-auto relative h-full mb:hidden'>
          <div className='section-despre absolute w-full h-full bg-red'>
            <div className='h-full w-full place-content-center p-20 flex flex-col justify-center'>
              <div className="w-[48vw]">
                <p className=''>
                  Bulúc este o companie independentă de artiști înființată în anul 2021, care își propune să activeze în domeniul artistic atât prin producții teatrale cât și prin activități ce presupun dezvoltarea personală și educația prin artă.
                </p>
                <br />
                <p className=''>
                  Conceptul nostru are la bază ideea de echipă, prin actul creației ce se poate realiza doar alături de oameni ce se întâlnesc, simt, gândesc și se inspiră reciproc.
                </p>
              </div>

              <div className="self-end">
                <img
                  src="src/assets/images/echipa/team.jpg"
                  className="h-[38vw] self-end rounded-[50%]"
                />
                <div className="w-[25vw] h-[25vw] rounded-[50%] bg-orange absolute bottom-[-2vw] left-[-16vw] dott" />
              </div>
             
            </div>
          </div>

          <div className='section-spectacole absolute w-full h-full bg-red'>
            <div className='relative'>
              <img
                src="src/assets/images/stagiunea.jpeg"
                alt="stagiunea"
                className="absolute top-[33vw] left-[40vw] image3"
              />
              <img
                src="src/assets/images/spectacol.jpg"
                alt="stagiunea"
                className="absolute top-[6vw] left-[30vw] w-[500px] image1"
              />

              <img
                src="src/assets/images/spectacol2.jpg"
                alt="stagiunea"
                className="absolute top-[25vw] left-[10vw] w-[500px] image2"
              />

            </div>
          </div>

          <div className='section-proiecte absolute w-full h-full bg-red'>
            <div className='relative'>
              <img
                src="src/assets/images/stagiunea.jpeg"
                alt="stagiunea"
                className="absolute top-[10vw] left-[30vw]"
              />
              <img
                src="src/assets/images/stagiunea.jpeg"
                alt="stagiunea"
                className="absolute top-[25vw] left-[10vw]"
              />
              <img
                src="src/assets/images/stagiunea.jpeg"
                alt="stagiunea"
                className="absolute top-[35vw] left-[40vw]"
              />
            </div>
          </div>

          <div className='section-sustine absolute w-full h-full bg-red'>
            <div className='relative'>
              <img className="mx-auto mb-8 image2" src="https://buluc.org/wp-content/themes/Buluc/assets/graphics/donatie.jpg" loading="lazy" alt="Image 2" />
            </div>
          </div>

          <div className='section-parteneri absolute w-full h-full bg-red p-5'>
          {/* <div className="grid grid-cols-3 gap-4">
          </div> */}
            <div className='relative'>
              <img
                src="src/assets/images/parteneri/carolia.png"
                className="absolute top-[6vw] left-[6vw] image3"
                style={{height: '23vw'}}
              />
              <img
                src="src/assets/images/parteneri/moara.png"
                className="absolute top-[4vw] left-[38vw] w-[500px] image1"
                style={{width: '25vw'}}
              />
              <img
                src="src/assets/images/parteneri/CrisACT.png"
                className="absolute top-[23vw] left-[10vw] w-[500px] image2"
                style={{width: '25vw'}}
              />
              <img
                src="src/assets/images/parteneri/vilu.png"
                className="absolute top-[36vw] left-[35vw] w-[500px] image2"
                style={{width: '20vw'}}
              />
              <img
                src="src/assets/images/parteneri/IQADS.png"
                className="absolute top-[31vw] left-[54vw] w-[500px] image2"
                style={{width: '20vw'}}
              />
              <img
                src="src/assets/images/parteneri/vinuri.png"
                className="absolute top-[23vw] left-[37vw] image2"
                style={{width: '30vw'}}
              />    
            </div>
          </div>

          {/* <div className='section absolute w-full h-full bg-red'>
              asdasd
            </div> */}
        </div>
      </div>
    </>
  );
}

const hidesliders = () => {
  const sliders = document.querySelectorAll('[class^="section"]');
  if(sliders) {
    sliders.forEach((elem: Element) => {
      elem.style.opacity = 0;
    })
  }
}

export default SliderNavbar;