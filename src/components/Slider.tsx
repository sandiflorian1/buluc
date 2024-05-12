import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import "../css/slider.css";

interface SlideProps {
    number: number;
    title: string;
    imageUrl: string;
    description: any;
    galery: any;
    width: string;
  }

const SliderContent = ({ 
  number, title, description, imageUrl, galery, width
}: SlideProps) => (
  <div>
    <div 
        className={`slider__content mb:flex-col ${width}`} 
    >
      <div className="slider__text">
        <h3 className='pb-5'>{title}</h3>
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

const MySlider = ({ slides }: {slides: SlideProps[]}) => {
    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
    };
    const width = slides.length > 1 ? 'w-[85%]' : 'mb:mx-10';
    return (
        <Slider {...settings}>
          {slides.map((slide: any) => (
            <SliderContent
                key={slide.number}
                number={slide.number}
                title={slide.title}
                description={slide.description}
                imageUrl={slide.imageUrl}
                galery={slide.galery}
                width={width}
            />
          ))}
        </Slider>
    );
};

export default MySlider;