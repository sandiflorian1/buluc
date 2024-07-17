import MainLayout from "../components/layouts/MainLayout";
import BannerTextAbsolute from "../components/layouts/BannerTextAbsolute";
import SimpleSlider from '../components/SimpleSlider';
import IMAGES from "../assets/Images";
import { FadeInViewPortAnimation } from "../components/animations/Animations";

export default function Doact() {
  return (
    <MainLayout className="px-20">
      <div className="w-full mb:px-4 mb:w-[100vw] pt-20">
        <BannerTextAbsolute
          imageURL={IMAGES.doact}
          direction="left"
          title="Tabăra DOACT"
          className="h-[35vw] mb-20 mb:mb-10 mb:h-auto"
        >
          <p className="">
            DOACT este tabăra de teatru pentru adolescenții cu vârsta cuprinsă între 14-19 ani creată special pentru a construi o comunitate de tineri mult mai pregătiți pentru momentul în care decid să-și urmeze pasiunea pentru artă.
            Misiunea acestui proiect a stat la baza dorinței de a pregăti generațiile viitoare în a fi mai încrezători, mai curajoși că pot face ceea ce le place și îi pasionează.
          </p>
        </BannerTextAbsolute>

        <FadeInViewPortAnimation className="flex pb-20 w-full mb:block">
          <div>
            <img src={IMAGES.doact2} className="w-[80rem] mb:mx-auto mb:mb-10 rounded-[2rem]"></img>
          </div>
          <div className="pl-10 mb:pl-0">
            <div className="bg-white br p-6">
              <h4 className="title pb-4 text-orange">
                Echipa
              </h4>
              <p>
                În colaborare cu CrisACT Production, tabăra DOACT s-a bucurat de 2 ediții în care am descoperit trăirile fiecărui adolescent, ne-am inspirat din poveștile lor și am scris un text împreună care mai târziu, în ultima seară din tabără a avut debutul pe scenă, în aplauze, în lumina reflectoarelor, pe o scenă adevărată!
              </p>
              <br />
              <p><span className="text-red">Mihaela Mardare </span> - trainer </p>
              <p><span className="text-red">Robert Ciupitu </span> - trainer </p>
              <p><span className="text-red">Ionut Terteci </span> - trainer </p>
              <p><span className="text-red">Marilena Adam </span> - social media & comunicare </p>
              <p><span className="text-red">Cristian Constantin </span> - coordonator CrisACT Production </p>
            </div>
          </div>
        </FadeInViewPortAnimation>

        <FadeInViewPortAnimation className="grid grid-cols-4 gap-8 mb-20 mb:mb-10">
          <div className="col-start-1 col-end-3 mb:col-end-7 bg-white br p-6">
            <h4 className="text-orange">Ateliere:</h4>
            <ul className="list-disc pl-8">
              <li>Introducere în Arta Actorului</li>
              <li>Mișcare Scenica</li>
              <li>Scriere creativa</li>
              <li>Introducere în procesul artistic</li>
              <li>Masca neutra in exprimarea corporala</li>
              <li>Masca de caracter în construcția unui spectacol de teatru</li>
              <li>Adaptarea procesului artistic în fata camerei</li>
            </ul>
            <br />
            <h4 className="text-orange">Obiective principale:</h4>
            <ul className="list-disc pl-8">
              <li>vei fi mai prezent și mai disponibil în a consolida relații reale de prietenie</li>
              <li>vei învăța lucru cu partenerul alături de blocajele ce pot apărea</li>
              <li>vei afla care sunt modalitățile de descoperire și consolidare ale unui parcurs scenic</li>
            </ul>
          </div>

          <div className="col-start-3 mb:col-start-1 col-span-3 mb:col-end-7">
            <div className="overflow-hidden">
              <SimpleSlider
                images={[IMAGES.doact1, IMAGES.doact3, IMAGES.doact4, IMAGES.doact6, IMAGES.doact7, IMAGES.doact8]}
                className="w-[30vw] h-[30vw] mb:h-[24rem] br overflow-hidden"
              ></SimpleSlider>
            </div>
          </div>
        </FadeInViewPortAnimation>
        <FadeInViewPortAnimation className="columns-2 mb:columns-1 gap-8 mb-20 mb:mb-10">
          <div className="bg-white br p-6">
            <h4 className="text-orange">Distracție:</h4>
            <p>Zilele din tabără sunt și despre distracție, cunoaștere și prietenie! Pe lângă ateliere și repetiții ne-am bucurat și de o serie de activități extra: treasure hunt, pool party, games night, movie nights și multe alte surprize.</p>
          </div>
          <div className="bg-white br p-6">
            <h4 className="text-orange">Locație:</h4>
            <p>
              În stațiunea Pucioasa, județul Dâmbovița, într-un loc în care timp de o săptămână ne-am distrat și ne-am descoperit pe noi, mai departe de oraș și mai aproape de natură, un cadru care ne face bine.
            </p>
          </div>
        </FadeInViewPortAnimation>





      </div>
    </MainLayout>
  );
}
