import { Fragment } from "react";
import MainLayout from "../components/layouts/MainLayout";
import ContainerComponent from '../components/layouts/ContainerComponent';
import { motion } from "framer-motion";
import Title from "../components/layouts/Title";
import TeamMemberCard from "../components/cards/TeamMemberCard";
import { ITeamMember } from "../types/cards/ITeamMember";
import IMAGES from "../assets/Images";
import { FadeInViewPortAnimation, FadeInAnimation } from "../components/animations/Animations";
import BannerTextAbsolute from "../components/layouts/BannerTextAbsolute";

import "../css/despre.css";
import TitleBanner from "../components/layouts/TitleBanner";

export interface IDespreProps { }

const MisiuneSection: React.FC = () => {
  return (
    <Fragment>
      <div className="mt-20 px-[13%] mb:px-[10%] pb-10">
        <BannerTextAbsolute
          imageURL={IMAGES.team}
          direction="left"
          className="h-[32vw] mb-20 mb:mb-10 mb:h-auto"
          title="buluc"
        >
          <p className="">
            {MisiuneTextBanner}
          </p>
        </BannerTextAbsolute>

        <BannerTextAbsolute
          imageURL={IMAGES.misiune}
          direction="right"
          className="h-[32vw] mb-20 mb:mb-10 mb:h-auto"
          title="misiune"
        >
          <p className="">
            {MisiuneText}
          </p>
        </BannerTextAbsolute>
      </div>
    </Fragment>
  );
}

const LocatieSection: React.FC = () => {
  return (
    <div className="locatie relative mb:mx-[10vw] pb-10">
      <img className="caracter-despre" src={IMAGES.caracter1} loading="lazy" alt="Image 1" />
      <TitleBanner
        title="loc de joaca"
        text={LocDeJoacaText}
        colorText="white"
        imageHeight='70vh'
        images={[IMAGES.sufrageria2, IMAGES.sufrageria3, IMAGES.sufrageria4, IMAGES.sufrageria5, IMAGES.sufrageria6]}
        fullScreen
      />
    </div>
  );
}

const ParteneriSection: React.FC = () => {
  return (
    <div className="flex flex-col mx-[20vw] mb:mx-[15vw] pb-10">
      <div className="">
        <Title title='parteneri' position="start" />
      </div>

      <div className="grid gap-4 grid-cols-2 md:grid-cols-7 my-4">
        {parteneri.map(({ id, link}) => {
          const imgName = `partener${id-1}` as keyof typeof IMAGES;
          return (
            <div className="my-auto px-2" key={id}>
              <a href={link} target="_blank">
                <img className="" src={IMAGES[imgName]} loading="lazy" alt={`partener-${id}`} />
              </a>
            </div>
          )
        })}
      </div>
    </div>
  );
}

const People = ({ members, title }: { members: ITeamMember[], title: string }) => (
  <div className="mt-8 flex flex-col pb-20 mb:pb-2">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
    >
      <div className="ml-[3vw]">
        <Title title={title} position="start" />
      </div>
    </motion.div>
    <div id="members" className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-8">
      {members.map((member, index) => (
        <TeamMemberCard
          key={index}
          imageSrc={member.imageSrc}
          name={member.name}
          role={member.role}
          color={member.color}
          fondator={member.fondator}
        />
      ))}
    </div>
  </div>
);

const Despre: React.FC = () => {
  return (
    <MainLayout noPadding>
      <FadeInViewPortAnimation id="misiune">
        <MisiuneSection />
      </FadeInViewPortAnimation>

      <ContainerComponent id="echipa">
        <People
          members={teamMembers}
          title='oamenii buluc'
        />

        {(colaboratori && <People
          members={colaboratori}
          title='colaboratori'
        />)}
      </ContainerComponent>

      <FadeInViewPortAnimation id="locatie">
        <LocatieSection />
      </FadeInViewPortAnimation>

      <FadeInViewPortAnimation id="parteneri" className="mt-8">
        <ParteneriSection />
      </FadeInViewPortAnimation>
    </MainLayout>
  );
};

export default Despre;

const teamMembers: ITeamMember[] = [
  {
    imageSrc: IMAGES.echipaMihaelaMardare,
    name: "Mihaela Mardare",
    role: "fondator, actriță",
    color: 'red',
  },

  {
    imageSrc: IMAGES.echipaRobertCiupitu,
    name: "Robert Ciupitu",
    role: "fondator, actor",
    color: 'orange',
  },

  {
    imageSrc: IMAGES.echipaMarilenaAdam,
    name: "Marilena Adam",
    role: "fondator, social media manager",
    color: 'red',
  },

  {
    imageSrc: IMAGES.echipaAndrei,
    name: "Andrei Atabay",
    role: "actor",
    color: 'orange',
  },

  {
    imageSrc: IMAGES.echipaLixi,
    name: "Ioana Lixăndroaia",
    role: "actriță",
    color: 'red',
  },

  {
    imageSrc: IMAGES.echipaVictoras,
    name: "Matei Victoras",
    role: "actor",
    color: 'orange',
  },

    {
    imageSrc: IMAGES.echipaValentina,
    name: "Valentina Boldurescu",
    role: "actriță",
    color: 'red',
  },

  {
    imageSrc: IMAGES.echipaIonutTerteci,
    name: "Ionuț Terteci",
    role: "actor & artist videograf",
    color: 'orange',
  },

  {
    imageSrc: IMAGES.echipaAlexandraFlorian,
    name: "Alexandra Florian",
    role: "web developer",
    color: 'red',
  },

  {
    imageSrc: IMAGES.echipaAndreeaIstrate,
    name: "Andreea Istrate",
    role: "teatrolog & coordonator event",
    color: 'orange',
  },

  {
    imageSrc: IMAGES.echipaStefaniaTecher,
    name: "Ștefania Țecher",
    role: "artist fotograf",
    color: 'red',
  },

  {
    imageSrc: IMAGES.echipaAdreeaD,
    name: "Andreea Preda",
    role: "graphic designer & illustrator",
    color: 'orange',
  },
];

const colaboratori: ITeamMember[] | null = null;

const LocDeJoacaText = "Ne adunǎm Buluc în sufrageria unei vile interbelice din 1920 amplasatǎ în cartierului Dorobanți. Un spațiu creativ și versatil, cu o terasă primitoare unde ne strângem seară de seară. Locul nostru de joacă cu o atmosferă intimă și călduroasă care inspiră la creativitate."
const MisiuneText = "Misiunea noastră este să adunăm #buluc oameni ce simt, gândesc și se inspiră reciproc. Ne dorim să creăm conexiuni autentice, să încurajăm creativitatea și să inspirăm creșterea personală și culturală în cadrul unei experiențe de care ți se face dor."
const MisiuneTextBanner = "este o companie independentă de artiști înființată în anul 2021, care își propune să activeze în domeniul artistic atât prin producții teatrale cât și prin activități ce presupun dezvoltarea personală și educația prin artă."

const parteneri = [
  {
    id: 1,
    link: 'https://www.moaraghionea.ro/',
  },
  {
    id: 2,
    link: "https://carolia.ro/",
  },
  {
    id: 3,
    link: "https://vinuri.shop/",
  },
  {
    id: 4,
    link: "https://www.behance.net/aandreeav",
  },
  {
    id: 5,
    link: "https://ro.hama.com/",
  },
  {
    id: 6,
    link: "https://www.iqads.ro/",
  },
  {
    id: 7,
    link: "https://urbanmonkey.ro/",
  },
  {
    id: 8,
    link: "https://www.frufru.ro/",
  },
  {
    id: 9,
    link: "https://solarisplant.ro/",
  },
  {
    id: 11,
    link: "https://www.artsafari.ro/",
  },
  {
    id: 12,
    link: "https://www.culturadata.ro/",
  }];