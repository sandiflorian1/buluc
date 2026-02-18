import cn from 'classnames';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

const SliderContent = ({
  imageUrl,
  key
}: { imageUrl: string, key: number }) => (
  <div className="bg-cover bg-no-repeat bg-center h-[100vh] w-[50vw] mb:w-full mb:h-[100vh]" key={key} style={{ backgroundImage: `url(${imageUrl})` }}>
  </div>
);

const MySlider = ({ slides }: { slides: any }) => {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    fade: true,
    autoplay: !isMobile && true,
    autoplaySpeed: 8000,
    pauseOnHover: true,
  };
  return (
    <Slider {...settings}>
      {slides.map((slide: any, index: number) => (
        <SliderContent
          imageUrl={slide}
          key={index}
        />
      ))}
    </Slider>
  );
};

export default function ImageWithText({ children, image, images, textRight, textBoxClass }: any) {
  return (
    <div className='w-[100vw] h-[100vh] flex mb:inline mb:h-auto overflow-hidden'>
      <div className={cn('w-[50vw] h-full mb:w-full mb:h-[100vh]', textRight && 'order-1', textBoxClass)}>
        {children}
      </div>
      {images && <div className={'w-[50vw] h-[100vh] mb:w-[100vw]'}><MySlider slides={images} /></div>}
      {image && <div className={'w-[50vw] bg-cover bg-no-repeat bg-center h-full mb:w-full mb:h-[100vh]'} style={{ backgroundImage: `url(${image})` }}></div>}
    </div>
  );
}
