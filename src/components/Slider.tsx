import Slider from 'react-slick';
import { useHistory  } from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../css/slider.css";

interface SlideProps {
    number: number;
    title: string;
    description: string;
    imageUrl: string;
    goToLink: () => {};
  }

const SliderContent = ({ 
    number, title, description, imageUrl, 
    goToLink, 
}: SlideProps) => (
    <div 
        className="slider__content" 
        onClick={goToLink}
    >
      <div className="slider__text">
        {/* <span>{number}</span> */}
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <figure className="slider__image">
        <img src={imageUrl} alt={`Slide ${number}`} />
      </figure>
    </div>
  );

const MySlider = ({ slides }: {slides: SlideProps[]}) => {
    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
    };

    const history = useHistory();
    const goToLink = (link: string) => history.push(link);

    return (
        <Slider {...settings}>

{slides.map((slide: any) => (
        <SliderContent
            key={slide.number}
            number={slide.number}
            title={slide.title}
            description={slide.description}
            imageUrl={slide.imageUrl}
            goToLink={() => goToLink(slide.link)}
        />
      ))}
        
        </Slider>
    );
};

export default MySlider;