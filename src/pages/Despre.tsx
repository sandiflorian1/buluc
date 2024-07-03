import MainLayout from "../components/layouts/MainLayout";
import ContainerComponent from '../components/layouts/ContainerComponent';
import { motion } from "framer-motion";
import Title from "../components/layouts/Title";
import TeamMemberCard from "../components/cards/TeamMemberCard";
import { ITeamMember } from "../types/cards/ITeamMember";
import IMAGES from "../assets/Images";
import { FadeInViewPortAnimation } from "../components/animations/Animations";

import "../css/despre.css";
import TitleBanner from "../components/layouts/TitleBanner";

export interface IDespreProps { }

const MisiuneSection: React.FC = () => {
  return (
    <div className="misiune">
      <TitleBanner
        text={MisiuneTextBanner}
        bgBluredImg={IMAGES.teamBlur}
        bgImg={IMAGES.team}
        colorText="black"
      />

      <div className="mx-[20vw] mb:mx-[10vw] p-[3vw] mb:p-[5vw] mb-20 bg-white br">
        <Title title='misiune' position="start" />
        <p>{MisiuneText}</p>
      </div>
    </div>
  );
}

const LocatieSection: React.FC = () => {
  return (
    <div className="locatie" >
      <TitleBanner
        title="loc de joaca"
        text={LocDeJoacaText}
        colorText="white"
        bgBluredImg={IMAGES.sufrageriaBlur}
        images={[IMAGES.sufrageria2, IMAGES.sufrageria3, IMAGES.sufrageria4, IMAGES.sufrageria5, IMAGES.sufrageria6]}
        fullScreen
      />
    </div>
  );
}

const ParteneriSection: React.FC = () => {
  const parteneri = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="flex flex-col mx-[20vw] mb:mx-[10vw] pb-10">
      <div className="">
        <Title title='parteneri' position="start" />
      </div>

      <div className="grid gap-4 grid-cols-2 md:grid-cols-5 my-4">
        {parteneri.map((index) => {
          const imgName = `partener${index}` as keyof typeof IMAGES;
          return (
            <div className="my-auto px-2" key={index}>
              <img className="" src={IMAGES[imgName]} loading="lazy" alt={`partener-${index}`} />
            </div>
          )
        })}
      </div>
    </div>
  );
}

const People = ({ members, title }: { members: ITeamMember[], title: string }) => (
  <div className="mt-8 flex flex-col">
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
    fondator: true,
  },

  {
    imageSrc: IMAGES.echipaRobertCiupitu,
    name: "Robert Ciupitu",
    role: "fondator, actor",
    color: 'orange',
    fondator: true,
  },

  {
    imageSrc: IMAGES.echipaMarilenaAdam,
    name: "Marilena Adam",
    role: "fondator",
    color: 'red',
    fondator: true,
  },

  {
    imageSrc: IMAGES.echipaCezarStoica,
    name: "Cezar Stoica",
    role: "graphic designer",
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
    role: "coregraf & coordonator event",
    color: 'red',
  },

  {
    imageSrc: IMAGES.echipaStefaniaTecher,
    name: "Ștefania Țecher",
    role: "artist fotograf",
    color: 'red',
  },

  {
    imageSrc: IMAGES.echipaIonutTerteci,
    name: "Ionuț Terteci",
    role: "actor & artist videograf",
    color: 'orange',
  },
];

const colaboratori: ITeamMember[] | null = null;

const LocDeJoacaText = "O casă cu trăsături burgheze din inima Capitalei amplasată în zona Dorobanți, într-o vilă interbelică din anul 1920. Un spațiu creativ și versatil, ce dispune și de o terasă exterioară unde ne adunăm buluc seară de seară. Locul nostru de joacă cu o atmosferă intimă și călduroasă care inspiră la creativitate."
const MisiuneText = "Misiunea noastră este să adunăm #buluc oameni ce simt, gândesc și se inspiră reciproc. Ne dorim să creăm conexiuni autentice, să încurajăm creativitatea și să inspirăm creșterea personală și culturală în cadrul unei experiențe de care ți se face dor."
const MisiuneTextBanner = "Buluc este o companie independentă de artiști înființată în anul 2021, care își propune să activeze în domeniul artistic atât prin producții teatrale cât și prin activități ce presupun dezvoltarea personală și educația prin artă."