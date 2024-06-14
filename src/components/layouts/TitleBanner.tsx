import "../../css/title-banner.css";
import Slider from 'react-slick';
import { FadeInViewPortAnimation, SlideViewPortAnimation } from "../animations/Animations";

type TitleBannerType = {
  bgBluredImg?: string, 
  bgImg?: string, 
  title?: string, 
  text?: string,
  colorText?: string,
  images?: string[],
  fullScreen?: boolean,
  textClass?: string,
}

export default function TitleBanner ({ title, bgBluredImg, bgImg, text, images, colorText, fullScreen, textClass }: TitleBannerType) {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
};

  return (
    <div className={`${fullScreen && 'w-screen'} relative ${images && 'has-slider'}`}>
      {bgBluredImg && <div className="w-screen absolute bg-cover bg-no-repeat bg-center h-[25vw] mb:h-[50vw] z-[-1] shadow-lg" style={{ backgroundImage: `url(${bgBluredImg})` }} />}

      <div className="px-[20vw] py-[5vw] mb:px-[10vw]">
        <FadeInViewPortAnimation className="img-banner relative overflow-hidden shadow-lg" style={{ backgroundImage: `url(${bgImg})` }}>
          <div className="absolute top-0 bottom-o right-0 left-0 z-[-1]">
            {images && (
              <Slider {...settings}>
                {images.map((img) => (
                  <div className="h-[60vh] w-full" key={img}>
                    <div className="h-full bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${img})` }} />
                  </div>
                ))}
              </Slider>
            )}
          </div>
          
          <div className="h-full flex flex-col justify-end">
            {!isMobile &&(<div className="bg-text">
                <h1 className={`text-${colorText}`}>{title}</h1>
                <p className={`text-${colorText} ${textClass}`}>
                  {text}
                </p>
              </div>
            )}
          </div>
        </FadeInViewPortAnimation>

        {isMobile && (
          <div className="h-full flex flex-col justify-end bg-white mb:p-[5vw] br">
            <div className="bg-text">
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
