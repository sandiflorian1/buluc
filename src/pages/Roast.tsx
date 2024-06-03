import MainLayout from "../components/layouts/MainLayout";
import BannerTextAbsolute from "../components/layouts/BannerTextAbsolute";
import SimpleSlider from '../components/SimpleSlider';
import IMAGES from "../assets/Images";
import { FadeInViewPortAnimation, ScaleViewPortAnimation } from "../components/animations/Animations";

export default function Roast() {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const width = isMobile ? '400' : '620';
  const height = isMobile ? '315' : '415'
  return (
    <MainLayout className="px-20">
      <div className="w-full mb:px-8 mb:w-[100vw] pt-20">
        <BannerTextAbsolute
          imageURL={IMAGES.bulling}
          direction="left"
          className="h-[30vw] pb-20 mb:h-auto"
          title="Să Luăm Bullying-ul la Roast"
        >
          <p className="">
            Buluc a pus bazele unui proiect educațional care readuce în discuție bullying-ul. Un fenomen mult prea puțin înțeles sau de cele mai multe ori confundat cu alte tipuri de comportament, dar și care afectează din ce în ce mai mulți tineri incluzând violență fizică și verbală, amenințări, tachinări, excluziune socială și agresiune psihologică.
          </p>
        </BannerTextAbsolute>

        <FadeInViewPortAnimation className="grid grid-cols-2 mb:grid-cols-1 gap-8 mb-20">
          <div>
            <p className="pb-4">
              Ne-am gândit să avem o abordare diferită a subiectului, așa că am pus în lumină două subiecte actuale cu care un adolescent se întâlnește în viața de zi cu zi. Principalul subiect este <span className="text-orange">bullying-ul</span> în lumea adolescenților și al doilea subiect este  <span className="text-orange">roast-ul</span>
              , un fenomen venit din Statele Unite ale Americii care face o trecere fină între insultă și umor.
            </p>

            <p>Evenimentul a avut loc pe 7 octombrie 2022 la Unteatru, sub forma a două interviuri de tip podcast cu public live, alături de doi moderatori: Robert Ciupitu și Cosmin Pană, 3 invitați din lumea stand up-ului: Adrian Nicolae, Alexandru Minculescu și Maria Popovici și un psiholog: Iulia Burcescu. </p>
            <br />
            <p>Proiect a fost finanțat din fonduri nerambursabile de la bugetul local al Sectorului 5 al Municipiul București prin legea 350/2005 prin Centrul Cultural și de Tineret „Ștefan Iordache”</p>

            <br />

            <p><span className="text-orange">Organizator:</span> Asociația „BULUC”</p>
            <p><span className="text-orange">Locație:</span> Unteatru</p>
            <p><span className="text-orange">Coordonator comunicare & social media:</span> Marilena Adam </p>
            <p><span className="text-orange">Coordonator filmare & graphic design:</span> Mihai Sighinas</p>
            <p><span className="text-orange">Parteneri Media:</span> IQads</p>
          </div>

          <div className="overflow-hidden">
            <SimpleSlider
              images={[IMAGES.roast4, IMAGES.roast5]}
              className="w-[30vw] h-[30vw] br overflow-hidden"
            ></SimpleSlider>
          </div>

        </FadeInViewPortAnimation>

        <div className="columns-3 gap-6 mb:columns-1 mb-20">
          <ScaleViewPortAnimation><img src={IMAGES.roast1} className="rounded-[2rem]"></img> </ScaleViewPortAnimation>
          <ScaleViewPortAnimation><img src={IMAGES.roast2} className="rounded-[2rem]"></img></ScaleViewPortAnimation>
          <ScaleViewPortAnimation><img src={IMAGES.roast3} className="rounded-[2rem]"></img></ScaleViewPortAnimation>
        </div>

        <div className="columns-2 gap-6 mb:columns-1 mb-20">
          <ScaleViewPortAnimation className="flex justify-center">
            <iframe width={width} height={height}
              src="https://www.youtube.com/embed/23dK88ntwwQ">
            </iframe>
          </ScaleViewPortAnimation>

          <ScaleViewPortAnimation className="flex justify-center">
            <iframe width={width} height={height}
              src="https://www.youtube.com/embed/3X53YqZo1Fs">
            </iframe>
          </ScaleViewPortAnimation>
        </div>
      </div>
    </MainLayout>
  );
}
