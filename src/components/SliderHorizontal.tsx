import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; // recomandat
import "../css/slider.css";

const SliderContent = ({ imageUrl }: { imageUrl: string }) => (
  <div className="h-[50vh] md:w-[320px] w-full">
    <div
      className="h-full w-full bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
  </div>
);

const MySlider = ({ slides }: { slides: string[] }) => {
  const settings = {
    infinite: true,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    fade: false,          
    centerMode: true,    
    variableWidth: true,

    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnHover: true,

    responsive: [
    {
      breakpoint: 768, 
      settings: {
        slidesToShow: 1,
        variableWidth: false, 
        centerMode: false,    
      }
    }
  ]
  };

  return (
    <div className="w-full h-[50vh] overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <SliderContent key={index} imageUrl={slide} />
        ))}
      </Slider>
    </div>
  );
};

export default MySlider;
