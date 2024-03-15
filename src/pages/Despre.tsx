import MainLayout from "../components/layouts/MainLayout";
import { useRef, useEffect, Ref } from 'react';
import { gsap } from "gsap";
import Title from "../components/layouts/Title";
import TeamMemberCard from "../components/cards/TeamMemberCard";
import { ITeamMember } from "../types/cards/ITeamMember";
import IMAGES from "../assets/Images";

import "../css/despre.css";

export interface IDespreProps { }

const MisiuneSection: React.FC = ({ ref }: any) => {
  return (
    <div className="misiune">
      <div className="flex flex-col md:flex-row mx-auto py-8 md:py-8" style={{ maxWidth: '50vw' }}>
        <div className="flex flex-col text-misiune">
          <p className="mb-1 text-5xl md:text-xl">Misiunea noastră este să dezvoltăm un spațiu, un loc în care oamenii să se adune în număr cât mai mare pentru a face și pentru a vedea artă.</p>
          <p className="mb-1 text-5xl md:text-xl">Ne dorim să realizăm trecerea de la un spectacol de teatru la o întreagă experiență creativă, cu care publicul să se întâlnească de fiecare dată când ne strângem buluc.</p>
        </div>
      </div>
    </div>
  );
}

const LocatieSection: React.FC = () => {
  return (
    <div className="locatie">
      <div className="relative">
        <img className="mx-auto mb-4 maini" src={IMAGES.sufrageria} loading="lazy" alt="locatie" />

        <div className="flex flex-col md:flex-row mx-auto pb-8 md:pb-8" style={{ maxWidth: '60vw' }}>
          <div className="flex flex-col text-misiune">
            <p className="mb-1 text-5xl md:text-xl">Ne strângem buluc într-o casă cu trăsături burgheze din inima Capitalei amplasată în zona Dorobanți într-o vilă interbelică din anul 1920. Un loc care te duce înapoi în timp doar de la primii pași făcuți în casă. Un spațiu care îmbină elemente pline de istorie și tradiție: plafon înalt, ferestre mari care permit luminii naturale să pătrundă în încăperi & pardoseli care răsună. Locul nostru de joacă cu o atmosferă intimă și călduroasă care inspiră la creativitate.  </p>
          </div>
        </div>
      </div>
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <img className="mx-auto mb-4 maini" src={IMAGES.sufrageria2} loading="lazy" alt="locatie2" />
        <img className="mx-auto mb-4 maini" src={IMAGES.sufrageria3} loading="lazy" alt="locatie3" />
        <img className="mx-auto mb-4 maini" src={IMAGES.sufrageria4} loading="lazy" alt="locatie4" />
      </div>
    </div>
  );
}

const ParteneriSection: React.FC = () => {
  return (
    <div className="locatie">
      <div className="flex flex-col md:flex-row mx-auto py-8 md:py-8">
        <img className="mx-auto mb-4 maini" src={IMAGES.parteneri} loading="lazy" alt="Team" />
      </div>
    </div>
  );
}

const Despre: React.FC = () => {
  const misiuneRef = useRef(null);
  const echipaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: 0 });
    tl.fromTo(misiuneRef.current, { opacity: 0 }, { opacity: 1, duration: 1 })
      .fromTo(echipaRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });

    return () => {
      tl.kill();
    };
  });

  return (
    <MainLayout title="misiune">
      <section id="misiune" ref={misiuneRef}>
        <MisiuneSection />
      </section>

      <section id="echipa" className="echipa" ref={echipaRef}>
        <div style={{ paddingTop: "0px" }} className="py-12 md:py-20 mt-8 flex flex-col">
          <Title title='oamenii bulúc' />
          <div id="members" className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-8">
            {teamMembers.map((member, index) => (
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
      </section>

      <section id="locatie" >
        <Title title='loc de joacă' />
        <LocatieSection />
      </section>

      <section id="parteneri" className="mt-8">
        <Title title='parteneri' />
        <ParteneriSection />
      </section>
    </MainLayout>
  );
};

export default Despre;

const teamMembers: ITeamMember[] = [
  {
    imageSrc: IMAGES.echipaMihaelaMardare,
    name: "Mihaela Mardare",
    role: " actriță, trainer",
    color: 'red',
    fondator: true,
  },

  {
    imageSrc: IMAGES.echipaRobertCiupitu,
    name: "Robert Ciupitu",
    role: "actor, trainer",
    color: 'orange',
    fondator: true,
  },

  {
    imageSrc: IMAGES.echipaMarilenaAdam,
    name: "Marilena Adam",
    role: "comunicare & social media",
    color: 'red',
    fondator: true,
  },

  {
    imageSrc: IMAGES.echipaIonutTerteci,
    name: "Ionuț Terteci",
    role: "actor & coordonator tehnic Buluc",
    color: 'orange',
  },

  {
    imageSrc: IMAGES.echipaStefaniaTecher,
    name: "Ștefania Țecher",
    role: "artist fotograf",
    color: 'red',
  },

  {
    imageSrc: IMAGES.echipaAndreeaIstrate,
    name: "Andreea Istrate",
    role: "coregraf & coordonator event",
    color: 'red',
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
    role: "web designer",
    color: 'red',
  },
];