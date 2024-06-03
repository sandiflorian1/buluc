import { FaYoutube } from "react-icons/fa";
import MainLayout from "../components/layouts/MainLayout";
import BannerTextAbsolute from "../components/layouts/BannerTextAbsolute";
import IMAGES from "../assets/Images";
import { FadeInViewPortAnimation } from "../components/animations/Animations";

export default function Creative() {
  return (
    <MainLayout className="px-20">
      <div className="w-full mb:px-8 mb:w-[100vw] pt-20">
        <BannerTextAbsolute
          imageURL={IMAGES.creartive}
          direction="left"
          className="h-[25vw] pb-20 mb:h-auto"
          title="The creARTive generation"
        >
          <p className="">
            Te-ai trezit într-o dimineață și ai realizat că pasiunea ta trebuie să devină profesie.  Ți-ai dat seama că ceea ce iubești să faci și ce te menține fericit este exact ce te definește pe tine ca om și îți oferă totodată un sentiment de împlinire. Dar cum faci să transformi pasiunea în profesie?
          </p>
        </BannerTextAbsolute>

        <FadeInViewPortAnimation className="grid grid-cols-6 mb:grid-cols-1 gap-8 pb-20">
          <div className="col-start-1 col-span-4 mb:col-span-7">
            <div className="columns-2">
              <div>
                <a href="https://www.youtube.com/watch?v=bMluOcQGx94">
                  <img src={IMAGES.creative1} className="rounded-[2rem]"></img>
                  <p className="flex py-4"> <FaYoutube size='20px' className="mr-2" /> ANCA DUMITRA | ACTORIE </p>
                </a>
              </div>
              <div>
                <a href="https://www.youtube.com/watch?v=MKE1qRpIIHQ&t=22s ">
                  <img src={IMAGES.creative3} className="rounded-[2rem]"></img>
                  <p className="flex py-4"> <FaYoutube size='20px' className="mr-2" /> IUSTIN CHIROIU | CREARE DE CONȚINUT </p>
                </a>
              </div>
              <div>
                <a href="https://www.youtube.com/watch?v=qhN9iTPQlxc&t=224s">
                  <img src={IMAGES.creative2} className="rounded-[2rem]"></img>
                  <p className="flex py-4"> <FaYoutube size='20px' className="mr-2" />  FLORIAN RUS | MUZICĂ </p>
                </a>
              </div>

              <div>
                <a href="https://www.youtube.com/watch?v=MYFArK3FTVM&t=15s">
                  <img src={IMAGES.creative4} className="rounded-[2rem] ml-auto"></img>
                  <p className="flex py-4"> <FaYoutube size='20px' className="mr-2" /> MARIA ZVINCA | CREARE DE CONȚINUT </p>
                </a>
              </div>
            </div>
          </div>

          <div className="col-start-5 col-end-7 mb:col-start-1 mb:col-end-7">
            <p>
              The creARTive generation: from passion to profession este un proiect educațional pentru adolescenți, sub forma unui Podcast live, cu public - care vorbește despre curaj, autenticitate și despre libertatea de a alege propriul drum, despre despre ce înseamnă o profesie artistică în România și cum putem transforma aptitudinile în instrumente de care ne putem ajuta să facem trecerea de la pasiune la profesie.
            </p>
            <br />
            <p>
              Ne-am adunat #buluc generații creARTive 𝗽𝗲 𝟮𝟱 & 𝟮𝟲 𝗻𝗼𝗶𝗲𝗺𝗯𝗿𝗶𝗲 la Unteatru unde am descoperit 4 povești care au reușit să ajungă de la pasiune la profesie.
            </p>
            <br />

            <p><span className="text-orange">Identitate vizuală:</span> Cezar Stoica</p>
            <p><span className="text-orange">Coordonator comunicare & social media:</span> Marilena Adam</p>
            <p><span className="text-orange">Coordonator event:</span> Andreea Istrate</p>
            <p><span className="text-orange">Filmare & Montaj:</span> Adfilm</p>
            <p><span className="text-orange">Foto:</span> Ștefania Țecher & Ionuț Terteci</p>
            <p><span className="text-orange">Parteneri Media:</span> IQads</p>

            <br />

            <p className="text-[14px]">*Proiect finanțat din fonduri nerambursabile de la bugetul local al Sectorului 5 al Municipiul București prin legea 350/2005 prin Centrul Cultural și de Tineret „Ștefan Iordache”.</p>
            <br />
            <p className="text-[14px]">
              **Conținutul acestui material nu reprezintă în mod necesar poziţia oficială a Sectorului 5 al Municipiului București sau a Centrului Cultural şi de Tineret Ştefan Iordache
            </p>


          </div>
        </FadeInViewPortAnimation>
      </div>
    </MainLayout>
  );
}
