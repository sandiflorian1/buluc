import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import "../css/slider.css";

interface SlideProps {
    number: number;
    title: string;
    imageUrl: string;
    description: any;
    galery?: any;
    width?: string;
    edition?: number;
  }

const SliderContent = ({
  number, title, description, imageUrl, galery, width, edition
}: SlideProps) => (
  <div>
    <div className={`slider__content shadow-lg mb:flex-col bg-white ${width}`}>
      <div className="slider__text">
        {edition && <span className="slider__edition tracking-wider">#ediția{edition}</span>}
        {title}
        {description}
      </div>
      <figure className="slider__image">
        <img src={imageUrl} alt={`Slide ${number}`} />
      </figure>
    </div>

    <div>
      {galery}
    </div>
  </div>
);

const MySlider = ({ slides }: { slides: SlideProps[] }) => {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: !isMobile,
    dots: isMobile,
    fade: true,
    autoplay: !isMobile && true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };
  const width = slides.length > 1 ? 'w-[85%]' : 'mx-2 mb:mx-10';
  return (
    <Slider {...settings}>
      {slides.map((slide: any) => (
        <SliderContent
          key={slide.number}
          number={slide.number}
          title={slide.title}
          description={slide.description}
          edition={slide.edition}
          imageUrl={slide.imageUrl}
          galery={slide.galery}
          width={width}
        />
      ))}
    </Slider>
  );
};

export default MySlider;