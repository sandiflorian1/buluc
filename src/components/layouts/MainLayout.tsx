import Footer from '../Footer';
import Navbar from "../Navbar";
import Title from "./Title";
import IMAGES from '../../assets/Images';

export default function MainLayout({ children, title, noPadding, bgImg }: any) {
const bgImage = bgImg || IMAGES.bg;

  return (
    <div className='h-screen flex flex-col justify-between overflow-y-auto overflow-x-hidden' id="scrolled">
      <div className="absolute top-0 bottom-0 right-0 left-0 z-[-1]">
        <div className="bg-cover bg-no-repeat bg-center h-full w-full" style={{ backgroundImage: `url(${bgImage})` }}>
        </div>
      </div>
      <Navbar />

      <div className='pt-[5rem] mb:mt-0'>
        {title &&
          (<section id="title">
            <div className="w-full mt-10">
              <Title title={title} />
            </div>
          </section>
          )}

        <div className='w-screen flex justify-center'>
          <div className={`${noPadding ? '' : 'px-[13%] mb:px-[10%]'} pb-10`}>
            {children}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
