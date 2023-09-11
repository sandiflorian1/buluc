import MainLayout from "../components/layouts/MainLayout";
import { useRef, useEffect, Ref } from 'react';
import { gsap } from "gsap";
import Title from "../components/layouts/Title";
import "../css/teamMember.css";
import "../css/despre.css";

export interface IDespreProps { }

const MisiuneSection: React.FC = ({ ref }: any) => {
  return (
    <div className="misiune">
      <div className="flex flex-col md:flex-row mx-auto py-8 md:py-8" style={{ maxWidth: '38vw' }}>
        <div className="flex flex-col text-center text-misiune">
          <p className="mb-1 text-5xl md:text-xl text-center">Misiunea noastră este să dezvoltăm un spațiu, un loc în care oamenii să se adune în număr cât mai mare pentru a face și pentru a vedea artă.</p>
          <p className="mb-1 text-5xl md:text-xl text-center">Ne dorim să realizăm trecerea de la un spectacol de teatru la o întreagă experiență creativă, cu care publicul să se întâlnească de fiecare dată când ne strângem buluc.</p>
        </div>
      </div>
    </div>
  );
}

const LocatieSection: React.FC = () => {
  return (
    <div className="locatie">
      <div className="flex flex-col md:flex-row mx-auto py-8 md:py-8" style={{ maxWidth: '40vw' }}>
        <div className="flex flex-col text-center text-misiune">
          <p className="mb-1 text-5xl md:text-xl text-center">O casă din 1920 cu trăsături burgheze în inima Capitalei amplasată în zona Dorobanți într-o vilă interbelică. Locația este un spațiu creativ și versatil, ce dispune şi de o terasa exterioară unde ne strângem buluc seară de seară. Poveşti, oameni, experienţe - toate se adună buluc pe Madrid, 4.</p>
        </div>
      </div>
    </div>
  );
}

interface TeamMember {
  imageSrc: string;
  name: string;
  role: string;
  color: string;
  fondator?: boolean;
}

const TeamMemberCard: React.FC<TeamMember> = ({ imageSrc, name, role, color, fondator }) => {
  const circleRef = useRef(null);
  const dotRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(circleRef.current, { rotation: 360, duration: 1, ease: 'power1.inOut' });
  };

  const handleMouseLeave = () => {
    gsap.to(circleRef.current, { rotation: 125, duration: 1, ease: 'power1.inOut' });
    gsap.killTweensOf(dotRef.current);
  };

  return (
    <div>
      <div className="round-image-container relative">
        <div className="image-circle bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${imageSrc})` }}>
          <div className="circle" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={circleRef}>
            <div className={`image-dot bg-${color}`} ref={dotRef}></div>
          </div>
        </div>
        <div className={`image-circle-border absolute border-${color}`}>
          <div className="circle" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="dot" ref={dotRef}></div>
          </div>
        </div>
      </div>

      <h5 className="name">{name}</h5>
      <h6 className="role">{role}{fondator && ', fondator'}</h6>
    </div>
  );
};

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
        <div style={{ paddingTop: "0px" }} className="py-12 md:py-20 flex flex-col">
          <img className="mx-auto mb-4 maini" src="https://buluc.org/wp-content/themes/Buluc/assets/graphics/maini.jpg" loading="lazy" alt="Team" />
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

      <section id="locatie">
        <Title title='ținut' />
        <LocatieSection />
      </section>
    </MainLayout>
  );
};

export default Despre;

const teamMembers: TeamMember[] = [
  {
    imageSrc: "src/assets/images/echipa/mihaela-mardare.png",
    name: "Mihaela Mardare",
    role: " actriță, trainer",
    color: 'red',
    fondator: true,
  },

  {
    imageSrc: "src/assets/images/echipa/robert-ciupitu.png",
    name: "Robert Ciupitu",
    role: "actor, trainer",
    color: 'orange',
    fondator: true,
  },

  {
    imageSrc: "src/assets/images/echipa/marilena-adam.png",
    name: "Marilena Adam",
    role: "comunicare & social media",
    color: 'red',
    fondator: true,
  },

  {
    imageSrc: "src/assets/images/echipa/ionut-terteci.png",
    name: "Ionuț Terteci",
    role: "actor & coordonator tehnic Buluc",
    color: 'orange',
  },

  {
    imageSrc: "src/assets/images/echipa/stefania-techer.png",
    name: "Ștefania Țecher",
    role: "artist fotograf",
    color: 'red',
  },

  {
    imageSrc: "src/assets/images/echipa/andreea-istrate.png",
    name: "Andreea Istrate",
    role: "coregraf & coordonator event",
    color: 'red',
  },

  {
    imageSrc: "src/assets/images/echipa/cezar-stoica.png",
    name: "Cezar Stoica",
    role: "graphic designer",
    color: 'orange',
  },

  {
    imageSrc: "src/assets/images/echipa/alexandra.png",
    name: "Alexandra Florian",
    role: "web designer",
    color: 'red',
  },
];