import ConsentForm from "../components/form/ConsentForm";
import { FadeInAnimation } from "../components/animations/Animations";
import Footer from '../components/Footer';
import IMAGES from '../assets/Images';

export interface IConsimtamantProps {
}

export default function ConsimtamantPage(props: IConsimtamantProps) {
  return (
    <div className='h-screen flex flex-col justify-between overflow-y-auto overflow-x-hidden' id="scrolled">
      <div className="absolute top-0 bottom-0 right-0 left-0 z-[-1]">
        <div className="bg-cover bg-no-repeat bg-center h-full w-full" style={{ backgroundImage: `url(${IMAGES.bg})` }}>
        </div>
      </div>

      <div className='pt-[2rem] mb:mt-0'>
        <div className='w-screen flex justify-center'>
          <div className='px-[13%] mb:px-[10%] pb-10'>
            <FadeInAnimation className="container mt-20 mb:mt-10">
              <div className="flex flex-col m-10 mb:m-0 gap-4">
                <ConsentForm />
              </div>
            </FadeInAnimation>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
