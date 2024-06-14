import MainLayout from "../components/layouts/MainLayout";
import BannerTextAbsolute from "../components/layouts/BannerTextAbsolute";
import IMAGES from "../assets/Images";
import { ScaleViewPortAnimation } from "../components/animations/Animations";

export default function Doact() {
  return (
    <MainLayout className="px-20">
      <div className="w-full mb:px-8 mb:w-[100vw] pt-20">
        <BannerTextAbsolute
          imageURL={IMAGES.zoomtalks}
          direction="left"
          className="h-[35vw] pb-20 mb:h-auto"
        >
          <p className="">
            ZoomTalks este un proiect cultural apărut în pandemie din dorința de a oferi liceenilor pasionați de teatru și film o viziune asupra facultăților de teatru din România. În cadrul mai multor întâlniri online cu diferiți artiști sau absolvenți ai facultăților de teatru din România, dar și din întreaga lume, tinerii aveau ocazia să afle toate informațiile despre ce înseamnă viața de facultate, dar și cea de după, proiecte, repetiții, filmări și în general, tot ce ține de viața unui artist într-o lume atât de mare. Toate acestea pe platforma ZOOM unde am strâns peste 150 de adolescenți și peste 20 de artiști invitați.
          </p>
        </BannerTextAbsolute>

        <ScaleViewPortAnimation className="columns-2 mb:columns-1 gap-8 mb-20">
          <div className="bg-white br p-6">
            <p>
              Fiind o comunitate foarte implicată, ulterior a apărut ZoomClass - care avea în centrul atenției workshop-uri de dezvoltare personală prin teatru, organizate atât fizic, cât și online cu adolescenți din diferite orașe ale României.
            </p>
          </div>
          <div className="bg-white br p-6">
            <p>
              În prezent proiectul „ZoomTalks” generează conținut educațional online pe Instagram cu informații despre teatru, dar și despre diferite proiecte culturale sau educaționale pentru adolescenți.
            </p>
          </div>
        </ScaleViewPortAnimation>

      </div>
    </MainLayout>
  );
}
