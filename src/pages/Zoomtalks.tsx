import { FaInstagram } from "react-icons/fa";
import MainLayout from "../components/layouts/MainLayout";
import BannerTextAbsolute from "../components/layouts/BannerTextAbsolute";
import IMAGES from "../assets/Images";
import { ScaleViewPortAnimation, FadeInViewPortAnimation } from "../components/animations/Animations";

export default function Doact() {
  return (
    <MainLayout noPadding>
      <div className="w-full mb:px-8 mb:w-[100vw] pt-20 px-[12%]">
        <BannerTextAbsolute
          imageURL={IMAGES.zoomtalks}
          direction="right"
          title="Zoomtalks"
          className="h-[35vw] pb-20 mb:h-auto"
        >
          <p className="">
            În cadrul mai multor întâlniri online cu diferiți artiști sau absolvenți ai facultăților de teatru din România, dar și din întreaga lume, tinerii aveau ocazia să afle toate informațiile despre ce înseamnă viața de facultate, dar și cea de după, proiecte, repetiții, filmări și în general, tot ce ține de viața unui artist într-o lume atât de mare. Toate acestea pe platforma ZOOM unde am strâns peste 150 de adolescenți și peste 20 de artiști invitați.
          </p>
        </BannerTextAbsolute>
      </div>
      <FadeInViewPortAnimation className="columns-4 mb:columns-1 gap-0 pb-20">
        {Galery.map((image, index) => (
          <img
            src={image}
            alt={`image ${index + 1}`}
            className="h-full w-full mb:p-4"
          />
        ))}
      </FadeInViewPortAnimation>
      <div className="px-[12%]">
        <ScaleViewPortAnimation className="columns-2 mb:columns-1 gap-8 mb-20">
          <div className="bg-white br p-6 mb:mb-4">
            <p>
              Fiind o comunitate foarte implicată, ulterior a apărut ZoomClass - care avea în centrul atenției workshop-uri de dezvoltare personală prin teatru, organizate atât fizic, cât și online cu adolescenți din diferite orașe ale României.
            </p>
          </div>
          <div className="bg-white br p-6">
            <p className="pb-2">
              În prezent proiectul „ZoomTalks” generează conținut educațional online pe Instagram cu informații despre teatru, dar și despre diferite proiecte culturale sau educaționale pentru adolescenți.
            </p>

            <a href="https://www.instagram.com/zoomtalks/" target="_blank"> <p className="flex text-red"> <FaInstagram size='20px' className="mr-2 mt-[2px]" /> Vezi pagina </p></a>
          </div>
        </ScaleViewPortAnimation>
      </div>
    </MainLayout>
  );
}

const Galery = [IMAGES.zoomtalks3, IMAGES.zoomtalks1, IMAGES.zoomtalks4, IMAGES.zoomtalks2 ]