import Slider from 'react-slick';
export interface ISimpleSliderProps {
    images: String[],
    className: string,
}

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
};


export default function SimpleSlider({ images, className }: ISimpleSliderProps) {
  return (
    <Slider {...settings}>
      {images.map((img) => (
          <div className={className}>
            <div className="h-full image-cover br" style={{ backgroundImage: `url(${img})` }} />
          </div>
      ))}
    </Slider>
  );
}