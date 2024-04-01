import "../../css/title-banner.css";
import Slider from 'react-slick';

type TitleBannerType = {
  bgBluredImg?: string, 
  bgImg?: string, 
  title?: string, 
  text?: string,
  images?: string[],
}

export default function TitleBanner ({ title, bgBluredImg, bgImg, text, images }: TitleBannerType) {

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
};

  return (
    <div className={`w-screen relative ${images && 'has-slider'}`}>
      <div className="w-screen absolute bg-cover bg-no-repeat bg-center h-[25vw] z-[-1]" style={{ backgroundImage: `url(${bgBluredImg})`, filter: "blur(10px)" }} />

      <div className="px-[20vw] py-[5vw]">
        <div className="img-banner relative overflow-hidden" style={{ backgroundImage: `url(${bgImg})` }}>
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
          
          <div className="h-full flex flex-col justify-end ">
            <div className="bg-text">
              <h1><span className="text-red text-3xl">.</span>{title}</h1>
              <p>
                {text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
