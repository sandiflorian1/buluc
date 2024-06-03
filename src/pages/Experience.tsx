import MainLayout from "../components/layouts/MainLayout";
import { useRef, useEffect, Ref } from 'react';
import { gsap } from "gsap";
import TitleBanner from "../components/layouts/TitleBanner";
import BannerTextAbsolute from "../components/layouts/BannerTextAbsolute";
import IMAGES from "../assets/Images";
import { FadeInViewPortAnimation, SlideViewPortAnimation } from "../components/animations/Animations";


export interface IExperienceProps { }
const Experience: React.FC = () => {
  const experienceRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: 0 });
    tl.fromTo(experienceRef.current, { opacity: 0 }, { opacity: 1, duration: 1 })

    return () => {
      tl.kill();
    };
  });

  return (
    <MainLayout noPadding>
      <FadeInViewPortAnimation>
        <TitleBanner
          title="@The Experience"
          text={"O călătorie artisticăa unde te vei conecta cu sinele tău într-un spațiu safe, unde natura devine nu doar o sursă de inspirație, ci și un partener în procesul creativ. Este o creștere interioară ce pleacă de la prima activitate de învățare a omului - JOCUL. Timp de 4 zile explorăm diverse forme de exprimare artistică: de la mișcarea corporală, la teatru, de la depășirea barierelor, la joacă - toate sub forma unei competiții."}
          bgBluredImg={IMAGES.Experience1}
          bgImg={IMAGES.Experience2}
          colorText="white"
          textClass="text-bg"
        />
      </FadeInViewPortAnimation>

      <div className="mx-[12%] mb:mx-6">
        <BannerTextAbsolute
          imageURL={IMAGES.Experience4}
          direction="left"
          className="h-[35vw] pb-20"
          title="Ce am pregătit?"
        >
          <p className="">
            Competitivitatea stă la baza acestei experiențe și te va teleporta direct într-un bootcamp artistic careva îmbina relaxarea cu ateliere de expresie corporală, teatru, activități ce presupun depășirea barierelor, și multă joacă Pe tot parcursul probelor & atelierelor vei aduna puncte care vor conta la finalul călătoriei. Pregătim multe surprize și un podium care abia așteaptă să fie cucerit.
          </p>
        </BannerTextAbsolute>
      </div>

      <div className="mx-[12%] mb:mx-6">
        <FadeInViewPortAnimation className="grid grid-cols-6 mb:grid-cols-1 gap-8 pb-20">
          <div className="col-start-1 col-end-3 mb:col-end-7">
            <h4 className="title pb-4 text-red">
              PENTRU CINE ESTE?
            </h4>
            <ul className="list-disc pl-8">
              <li>pentru cei care competiția este ghidată de adrenalină</li>
              <li>pentru cei care iubesc să-și depășească limitele </li>
              <li>pentru cei care au experimentat sau nu cursul Challenge Yourself </li>
              <li>pentru tine, dacă îți este dor să te joci</li>
            </ul>
          </div>

          <div className="col-end-7 col-span-4 mb:col-span-7">
            <h4 className="title pb-4 text-red">
              CE ESTE INCLUS
            </h4>

            <ul className="list-disc pl-8 grid grid-cols-2 gap-x-10">
              <li>un sat doar pt tine - exclusivitate în locație</li>
              <li>curte de 5000m2</li>
              <li>3 nopți de cazare (1 - august)</li>
              <li>3 mese pe zi 100% homemade</li>
              <li>apa de izvor & ceaiuri nelimitat pe timpul zilei</li>
              <li>3 cafele de persoana/ zi - cafea de specialitate</li>
              <li>acces la saună</li>
              <li>vin & Prosecco</li>
              <li>transport dus - întors</li>
              <li>goodies & premii de la parteneri</li>
            </ul>

          </div>
        </FadeInViewPortAnimation>
      </div>

      <div className="mx-[12%] mb:mx-6">
        <BannerTextAbsolute
          imageURL={IMAGES.Experience5}
          direction="right"
          className="h-[35vw] pb-20"
          title="YOGA CU MARTA"
        >
          <p className="">
            Alături de Martha ne vom bucura de yoga la apus, unde ne conectăm la respirație, ne ghidăm armonios spre o stare de spirit de liniște, pace, prezență. Vom termina cu o meditatie ghidata sau chiar yoga Nidra (Yoga Nidra, cunoscută și sub numele de somn yoghin) este o meditație ghidată extrem de benefică. Clasa este accesibilă tuturor nivelelor de practică.
          </p>
        </BannerTextAbsolute>
      </div>

      <div className="mx-[12%] mb:mx-6 pb-20">
        <div className="columns-2 gap-10">
          <SlideViewPortAnimation direction="up" className="pb-6">
            <h4 className="text-orange">Drumeție cu liv tu visit</h4>
            <p>Împreună cu LIV TU VISIT  - creatori de explorări urbane și experiențe turistice inedite - vom parcurge un traseu pe munții Coziei - cu istorie & legende.</p>
          </SlideViewPortAnimation>
          <SlideViewPortAnimation><img src={IMAGES.Experience6}></img></SlideViewPortAnimation>
          <SlideViewPortAnimation><img src={IMAGES.Experience6}></img></SlideViewPortAnimation>
          <SlideViewPortAnimation className="pt-6">
            <h4 className="text-orange">Foc de tabără</h4>
            <p>Ne strângem buluc seara, la foc de tabără, în jurul poveștilor sub cerul înstelat și sub privirile atente ale vârfului Cozia. Un moment de de conectare și de regăsire a simplității și a frumuseții vieții chiar la poalele muntelui.</p>
          </SlideViewPortAnimation>
        </div>
      </div>

      <div className="mx-[12%] mb:mx-6">
        <BannerTextAbsolute
          imageURL={IMAGES.Experience8}
          direction="left"
          className="h-[40vw] pb-20"
          title="Despre albastru și origini"
        >
          <p className="pb-4">
            Un sat din Berislăvești, Jud. Vâlcea format din 4 case vechi de peste 100 de ani srămutate și readuse la viață, din nordul țării, alături de un hambar transformat în vatra satului – locul unde ne vom aduna buluc cu toții la povesti si la bucate delicioase. Un loc în care timpul parcă stă în loc.
          </p>
          <ul className="list-disc pl-8">
            <li>Casa Amurg</li>
            <li>Casa Zori de Zi</li>
            <li>Casa Rădăcini</li>
            <li>Casa Origini</li>
            <li>Hambarul Albastru și Origini</li>
          </ul>
        </BannerTextAbsolute>
      </div>

      <div className="mx-[12%] mb:mx-6">
        <BannerTextAbsolute
          imageURL={IMAGES.Experience7}
          direction="right"
          className="h-[40vw] pb-20"
          title="BUCĂTĂRIA"
        >
          <p className="pb-4">
            Te vei bucura de o bucatarie cu mult bun gust și de influențe din multe culturi. Și, mai ales, 100% homemade. 3 mese pe zi  gătite “with a twist”, niciodată banal. O mancare…eclectică, așa cum este și satul Albastru și Origini.
          </p>
          <p className="pb-4">
            Vei lua masa într-o șură veche, transformată în bucatarie, șezătoare, sufragerie, loc de povesti, loc de adunări buluc …și dacă ești fan mâncării vegetariene - te vei bucura de legume de sezon.
          </p>
        </BannerTextAbsolute>
      </div>

      <div className="mx-[12%] mb:mx-6 pb-20">
        <h4 className="title pb-4 text-orange">
          ECHIPA
        </h4>
        <div className="columns-4 mb:columns-1 gap-10">
          <SlideViewPortAnimation direction="up" className="pb-4"><p className="text-orange text-xl mb:text-5xl text-center">Mella - trainer </p></SlideViewPortAnimation>
          <SlideViewPortAnimation><img src={IMAGES.echipaMihaelaMardare}></img></SlideViewPortAnimation>
          <SlideViewPortAnimation><img src={IMAGES.echipaRobertCiupitu}></img></SlideViewPortAnimation>
          <SlideViewPortAnimation direction="up" className="pt-4"><p className="text-red text-xl mb:text-5xl text-center">Robert - trainer </p></SlideViewPortAnimation>
          <SlideViewPortAnimation direction="up" className="pb-4"><p className="text-orange text-xl mb:text-5xl text-center">Mari - comunicare & social media  </p></SlideViewPortAnimation>
          <SlideViewPortAnimation><img src={IMAGES.echipaMarilenaAdam}></img></SlideViewPortAnimation>
          <SlideViewPortAnimation><img src={IMAGES.echipaCezarStoica}></img></SlideViewPortAnimation>
          <SlideViewPortAnimation direction="up" className="pt-4"><p className="text-red text-xl mb:text-5xl text-center">Cezar - identitate vizuală</p></SlideViewPortAnimation>
        </div>
      </div>

      <FadeInViewPortAnimation className="mx-[12%] mb:mx-6 pb-4">
        <h4 className="title pb-4 text-orange">
          Cum mă înscriu?
        </h4>
        <p>Înscrierea se face exclusiv prin email la rezervari.buluc@gmail.com</p>
      </FadeInViewPortAnimation>

      <FadeInViewPortAnimation className="mx-[12%] mb:mx-6 pb-20">
        <h4 className="title pb-4 text-orange">
          LOCURI LIMITATE
        </h4>
      </FadeInViewPortAnimation>

    </MainLayout>
  );
};

export default Experience;