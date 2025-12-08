import "../../css/title-banner.css";
import Slider from 'react-slick';
import { FadeInViewPortAnimation } from "../animations/Animations";

type TitleBannerType = {
  imageHeight?: string, 
  bgImg?: string, 
  title?: string, 
  text?: string,
  colorText?: string,
  images?: string[],
  fullScreen?: boolean,
  textClass?: string,
}

export default function TitleBanner ({ title, imageHeight = '60vh', bgImg, text, images, colorText, fullScreen, textClass }: TitleBannerType) {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
};

  return (
    <div className={`${fullScreen && 'w-screen'} relative ${images && 'has-slider'}`}>
      <div>
        <FadeInViewPortAnimation className="img-banner relative overflow-hidden shadow-lg" style={{ backgroundImage: `url(${bgImg})`, height: imageHeight }}>
          <div className="absolute top-0 bottom-o right-0 left-0 z-[-1]">
            {images && (
              <Slider {...settings}>
                {images.map((img) => (
                  <div className={`h-[${imageHeight}] w-full`} key={img}>
                    <div className="h-full bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url("${img}")` }} />
                  </div>
                ))}
              </Slider>
            )}
          </div>
          
          <div className="px-[20vw] mb:px-[10vw] h-full flex flex-col justify-end">
            {!isMobile &&(<div className="bg-text">
                <h1 className={`text-${colorText}`} style={{ textShadow: colorText === 'white' ? '1px 1px 2px black' : '1px 1px 2px white'}}>{title}</h1>
                <p className={`text-${colorText} ${textClass} `} style={{ textShadow: colorText === 'white' ? '1px 1px 2px black' : '1px 1px 2px white'}}>
                  {text}
                </p>
              </div>
            )}
          </div>
        </FadeInViewPortAnimation>

        {isMobile && (
          <div className="h-full flex flex-col justify-end bg-white p-[5vw] br mt-4">
            <div className="">
              <h1>{title}</h1>
              <p>
                {text}
              </p>
            </div>
          </div>
        )}
      </div>

      
    </div>
  );
}
