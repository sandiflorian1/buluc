import { FaYoutube } from "react-icons/fa";
import MainLayout from "../components/layouts/MainLayout";
import BannerTextAbsolute from "../components/layouts/BannerTextAbsolute";
import SimpleSlider from '../components/SimpleSlider';
import IMAGES from "../assets/Images";
import { FadeInViewPortAnimation, ScaleViewPortAnimation } from "../components/animations/Animations";

export default function Roast() {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const isTablet = window.matchMedia("(max-width: 1200px)").matches;
  const width = isMobile ? '400' : (isTablet ? '360' : '420');
  const height = isMobile ? '285' : '315'

  return (
    <MainLayout className="px-20">
      <div className="w-full mb:px-8 mb:w-[100vw] pt-20">
        <BannerTextAbsolute
          imageURL={IMAGES.bulling}
          direction="left"
          className="h-[35vw] pb-20 mb:h-auto"
          title="Să Luăm Bullying-ul la Roast"
        >
          <p className="">
            Buluc a pus bazele unui proiect educațional care readuce în discuție bullying-ul. Un fenomen mult prea puțin înțeles sau de cele mai multe ori confundat cu alte tipuri de comportament, dar și care afectează din ce în ce mai mulți tineri incluzând violență fizică și verbală, amenințări, tachinări, excluziune socială și agresiune psihologică.
          </p>
        </BannerTextAbsolute>

        <FadeInViewPortAnimation className="grid grid-cols-2 mb:grid-cols-1 gap-8 mb-20">
          <div className="bg-white br p-6">
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
              className="w-[30vw] h-[32vw] mb:h-[20rem] br overflow-hidden"
            ></SimpleSlider>
          </div>

        </FadeInViewPortAnimation>

        <div className="grid grid-cols-6 gap-8 mb:gap-0 mb-20">
          <ScaleViewPortAnimation className="col-start-1 col-end-5 mb:col-end-7">
            <a href="https://www.youtube.com/embed/23dK88ntwwQ" target="_blank" >
              <div className="columns-2 gap-8 mb:gap-2">
                <img src={IMAGES.roast1} className="rounded-[2rem]"></img>
                <img src={IMAGES.roast2} className="rounded-[2rem]"></img>
              </div>
              <p className="flex py-4 justify-center mb:justify-start"> <FaYoutube size='20px' className="mr-2" /> Vezi episodul </p>
            </a>
          </ScaleViewPortAnimation>

          <ScaleViewPortAnimation className="col-start-5 mb:col-start-1 col-end-7">
            <a href="https://www.youtube.com/embed/23dK88ntwwQ" target="_blank">
              <a href="https://www.youtube.com/embed/3X53YqZo1Fs" target="_blank">
                <img src={IMAGES.roast3} className="rounded-[2rem] mb:my-4"></img>
                <p className="flex py-4"> <FaYoutube size='20px' className="mr-2" /> Vezi episodul </p>
              </a>
            </a>
          </ScaleViewPortAnimation>
        </div>
      </div>
    </MainLayout>
  );
}
