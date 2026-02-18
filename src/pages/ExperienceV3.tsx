import { FaEnvelope } from "react-icons/fa";
import { useRef } from "react";
import TeamMemberCard from "../components/cards/TeamMemberCard";
import MainLayout from "../components/layouts/MainLayout";
import IMAGES from "../assets/Images";
import ImageWithText from "../components/layouts/ImageWithText";
import { AnimatedTextLine } from "../components/animations/Animations";
import SliderHorizontal from "../components/SliderHorizontal"
import FaqItemRow from '../components/layouts/FaqItemRow';

export interface IExperienceProps { }
const Experience: React.FC = () => {
  const signupRef = useRef<HTMLDivElement>(null);
  const scrollToSignup = () => {
    signupRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <MainLayout noPadding noNavbar>
      <ImageWithText 
        image={IMAGES.ExperienceV3}
        textBoxClass='flex justify-center items-center bg-red bg-[#f5f1a0]'  
      >
        <div className='text-red flex flex-col justify-center items-center'>
          <a href="/" className='pb-10'>
            <div className="h-[5rem] w-[11rem] bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.logo})` }}></div>
          </a>

          <h1 className='text-center pb-10'>The Challenge Yourself @Experience #3</h1>
          <h4 className='pb-4'>LET’S GET AWKWARD</h4>
          <p className='pb-1'>30 iulie - 2 august 2026</p>
          <p>Mesendorf Gasthaus</p>

          <button className="my-8 px-2 text-[1.5rem] border-b-2 border-red" onClick={scrollToSignup}>Înscrie-te acum</button>
        </div>
      </ImageWithText>

       <ImageWithText 
        image={IMAGES.ExperienceV3}
        textRight={true}
        textBoxClass='flex justify-center items-center bg-red bg-[#f5f1a0]'  
      >
         <div className='px-20 text-red mb:px-8'>
          <p className='text-2xl pb-10 mb:text-[20px] mb:pb-4'>
            O experienta creativa de patru zile construită ca un proces organic unde transformăm frica de penibil in <strong>curaj</strong>. Este despre <strong>libertate, energie creativa si bucuria de a fi tu</strong>. Un bootcamp artistic pentru oamenii care simt că frica de penibil le ține uneori vocea pe pauză: in viața de zi cu zi, in corp, în relații, în exprimare.
          </p>

          <p className='text-2xl pb-10 mb:text-[20px] mb:pb-4'>
            Împreunǎ vom experimenta vulnerabilitatea într-un mediu sigur și vom învǎța sǎ ne bucurǎm de stângăcii și ridicol, transformându-le în putere personală.
          </p>

          <button className="my-4 px-2 text-[1.5rem] border-b-2 border-red" onClick={scrollToSignup}>Înscrie-te acum</button>
        </div>
      </ImageWithText>

      <ImageWithText 
        image={IMAGES.ExperienceV3_4}
        textRight={true}
        textBoxClass='flex justify-center items-center bg-[#859762]'  
      >
        <div className='px-20 text-white mb:px-8'>
          <p className='text-2xl pb-10 mb:text-[20px]'>
            O experienta creativa de patru zile construită ca un proces organic unde transformăm frica de penibil in <strong>curaj</strong>. Este despre <strong>libertate, energie creativa si bucuria de a fi tu</strong>. Un bootcamp artistic pentru oamenii care simt că frica de penibil le ține uneori vocea pe pauză: in viața de zi cu zi, in corp, în relații, în exprimare.
          </p>

          <p className='text-2xl pb-10 mb:text-[20px]'>
            Împreunǎ vom experimenta vulnerabilitatea într-un mediu sigur și vom învǎța sǎ ne bucurǎm de stângăcii și ridicol, transformându-le în putere personală.
          </p>
        </div>
      </ImageWithText>

      <div className='p-20 bg-white mb:p-8'>
        <AnimatedTextLine delay={1200}><p className='text-[3.5vw] mb:text-[20px]'>Un spațiu în care penibilul nu e evitat, ci explorat</p></AnimatedTextLine>
        <AnimatedTextLine delay={1400}><p className='text-[3.5vw] mb:text-[20px]'>Să te exprimi</p></AnimatedTextLine>
        <AnimatedTextLine delay={400}><p className='text-[3.5vw] mb:text-[20px]'> Un spațiu în care ai voie să greșești</p></AnimatedTextLine>
        <AnimatedTextLine delay={800}><p className='text-[3.5vw] mb:text-[20px]'>Să te joci</p></AnimatedTextLine>
        <AnimatedTextLine delay={1000}><p className='text-[3.5vw] mb:text-[20px]'>Și poate pentru prima dată după mult timp, să te simți liber</p></AnimatedTextLine>
      </div>

      <ImageWithText 
        image={IMAGES.ExperienceV3_2}
        textBoxClass='flex flex-col justify-center bg-[#ed9561]'  
      >
        <div className='text-white px-20 mb:px-8'>
           <h3 className="pb-4 mb:pb-2">
              Pentru cine este? 
            </h3>
            <ul className="list-star ml-8">
              <li className='pb-2 text-2xl mb:text-[18px]'>pentru oricine simte nevoia să se reconecteze cu sine printr-o provocare artistică, în mijlocul naturii</li>
              <li className='pb-2 text-2xl mb:text-[18px]'>pentru oricine vrea să <strong>își înfrunte frica de penibil</strong> într-un mediu sigur și distractiv</li>
              <li className='pb-2 text-2xl mb:text-[18px]'>pentru cei care simt că au nevoie de o pauză de la zgomotul cotidian și vor să se redescopere</li>
              <li className='pb-2 text-2xl mb:text-[18px]'>pentru cei care vor sa transforme penibilul in energie creativa si curaj</li>
              <li className='pb-2 text-2xl mb:text-[18px]'>pentru cei care evită să facă ce-și doresc din teama de a părea ridicoli</li>
            </ul>
        </div>
      </ImageWithText>

      <ImageWithText 
        image={IMAGES.ExperienceV3_3}
        textRight={true}
        textBoxClass='flex flex-col justify-center bg-[#859762]'  
      >
        <div className='text-white px-20 mb:px-8'>
          <h3 className="pb-4 mb:pb-2">
            Ce am pregatit
          </h3>

          <ul className="list-star pl-8">
            <li className='pb-2 text-2xl mb:text-[18px]'>o experienta creativa de patru zile</li>
            <li className='pb-2 text-2xl mb:text-[18px]'>ateliere interactive despre prezenta, expunere, improvizatie, joaca</li>
            <li className='pb-2 text-2xl mb:text-[18px]'>sesiuni active in care inveti facand </li>
            <li className='pb-2 text-2xl mb:text-[18px]'>lucuri individual si de grup cu feedback real</li>
            <li className='pb-2 text-2xl mb:text-[18px]'>timp pentru relaxare si deconectare </li>
          </ul>
        </div>
      </ImageWithText>

      <ImageWithText 
        image={IMAGES.ExperienceV3_5}
        textBoxClass='flex flex-col justify-center bg-[#ed9561]'  
      >
        <div className='text-white px-20 mb:px-8'>
          <div>
          <h3 className="pb-4 mb:pb-2">
            Ce este inclus?
          </h3>

          <ul className="list-star pl-8">
            <li className='pb-2 text-2xl mb:text-[18px]'>cazare 4 zile si 3 nopti in inima Transilvaniei, la Mesendorf Gasthaus </li>
            <li className='pb-2 text-2xl mb:text-[18px]'>cazare care imbina linistea cu confortul </li>
            <li className='pb-2 text-2xl mb:text-[18px]'>spatii de relaxare & deconectare </li>
            <li className='pb-2 text-2xl mb:text-[18px]'>o bibliotecă doar pentru tine cu canapele și fotolii unde te poti pierde ori de cate ori vrei un moment doar pentru tine</li>
            <li className='pb-2 text-2xl mb:text-[18px]'>3 mese pe zi gatite proaspat cu cu ingrediente locale</li>
            <li className='pb-2 text-2xl mb:text-[18px]'>transport dus-intors </li>
            <li className='pb-2 text-2xl mb:text-[18px]'>ateliere creative </li>
            <li className='pb-2 text-2xl mb:text-[18px]'>materiale incluse pentru activitati </li>
            <li className='pb-2 text-2xl mb:text-[18px]'>invitati speciali - anuntati la momentul potrivit </li>
            <li className='pb-2 text-2xl mb:text-[18px]'>goodies & premii de la parteneri </li>
          </ul>
        </div>
          
        </div>
      </ImageWithText>

      <div className='bg-white py-20'>
        <div className="mb-20 mb:mb-10">
          <div className="w-100% mb:pb-2">
            <h3 className="title bg-white text-[#ed9561] mx-[12%] mb-10 mb:mx-6">
              Echipa
            </h3>

          <div id="members" className="flex mb:inline gap-10 justify-center">
            {teamMembers.map((member) => (
              <TeamMemberCard
                key={member.key}
                imageSrc={member.imageSrc}
                name={member.name}
                role={member.role}
                color={member.color}
              />
            ))}
          </div>
        </div>
      </div>
      </div>

      <ImageWithText 
        image={IMAGES.ExperienceV3_6}
        textRight={true}
        textBoxClass='flex justify-center items-center bg-[#859762]'  
      >
        <div className='text-white px-20 mb:px-8'>
          <h3 className='pb-4 mb:pb-2'>Invitati speciali</h3>
          <p className='pb-20 text-xl mb:text-[18px] mb:pb-8'>Invitații speciali care vor se vor alătura acestei ediții vor fi dezvăluiți in luna aprilie. Pregătește-te să descoperi oameni care te vor provoca, inspira și încuraja să te exprimi liber.</p>

          <h3 className='pb-4 mb:pb-2'>Relaxare & Deconectare </h3>
          <p className='text-xl mb:text-[18px]'>Această experiență include momente dedicate liniștii și reconectării cu tine. Te vei bucura de sesiuni de yoga, plimbări prin sat și explorarea împrejurimilor, timp petrecut în livadă sau în bibliotecǎ. Totul într-un ritm blând, care îți permite să te oprești, să respiri și să te reconectezi cu prezentul.</p>
        </div>
      </ImageWithText>

      <ImageWithText 
        images={[
          IMAGES.ExperienceV3_7,
          IMAGES.ExperienceV3_8,
          IMAGES.ExperienceV3_9,
          IMAGES.ExperienceV3_10,
        ]}
        textBoxClass='flex justify-center items-center bg-[#729ed1]'
      >
        <div className='text-white px-20 mb:px-8'>
          <h3 className='pb-4 mb:pb-2'>Despre Mesendorf Gasthaus </h3>
          <p className='text-xl mb:text-[18px]'>Ne vom aduna buluc în fermecătorul sat Mesendorf, în inima Transilvaniei. Aici vei fi cazat în gospodării săsești tradiționale, unde fiecare cameră îmbină armonios detalii autentice care pastreaza farmecul moștenirii sasesti cu elemente contemporane. Fiecare spațiu este unic, dar toate se completează reciproc, creând o experiență armonioasă și primitoare. Proprietatea a fost restaurată cu grijă, astfel încât să păstreze patrimoniul săsesc și să ofere oaspeților noștri relaxare și confort pe măsura așteptărilor.</p>
        </div>
      </ImageWithText>

      <ImageWithText 
        image={IMAGES.ExperienceV3_13}
        textRight={true}
        textBoxClass='flex justify-center items-center bg-[#859762]'
      >
        <div className='text-white px-20 mb:px-8'>
          <h3 className='pb-4 mb:pb-2'>Bucătăria</h3>
          <p className='text-xl mb:text-[18px]'>Te vei bucura de o bucătărie prepartata cu ingrediente pe cat posibil locale și naturale. 3 mese pe zi gătite “with a twist”, niciodată banal. Toate mesele se servesc sub formă de bufet, iar oaspeții se pot servi după pofta inimii cu bunătățile locale, atent alese și preparate conform specificului zonei, după rețete clasice de inspirație românească dar și austro-ungară.</p>
        </div>
      </ImageWithText>

      <div className='w-[100vw]'>
        <SliderHorizontal slides={[
          IMAGES.ExperienceV3_5, 
          IMAGES.ExperienceV3_14, 
          IMAGES.ExperienceV3_15,
          IMAGES.ExperienceV3_16,
          IMAGES.ExperienceV3_17,
          IMAGES.ExperienceV3_18,
          IMAGES.ExperienceV3_19,
          IMAGES.ExperienceV3_1, 
          IMAGES.ExperienceV3_20,
          ]} />
      </div>

      <div className="bg-white p-20 mb:p-10">
        <p className="text-[5vw] w-[70vw] mb:w-full mb:text-[3rem]">Ce spun participanții despre edițiile anterioare</p>
      </div>

      <div className="bg-[#ed9561] p-20 mb:p-10 flex text-white gap-6 mb:flex-col">
        <div className="flex-1 p-4">
          <p className="underline pb-4">Andreea, #edițiile 1 & 2 </p>
          <p className="italic pb-2">CHY Experience este mai mult decat un weekend-away. E un loc și un timp în care ai răgazul să te uiți spre tine, sa te cunoști mai bine, sa dai forma emoțiilor și gândurilor tale. Pentru mine, cele 2 CHY au fost momente în care mi-am luat sufletul la plimbare în siguranță, în joacă, în căldura încrederii în oamenii frumoși pe care i-am întâlnit.
          </p>
          <p className="italic">Recomand tuturor să își facă acest cadou și să meargă măcar o dată în CHY Exp! ❤️</p>
        </div>

        <div className="flex-1 p-4">
          <p className="underline pb-4">Mihaela, #ediția 2 </p>
          <p className="italic pb-2">
            M-am înscris la Challenge Experience #2 pentru că simțeam nevoia să redescopăr cine sunt în afara zonei mele de confort. M-am înscris chiar dacă nu cunoșteam pe nimeni și am descoperit acolo niște oameni expresivi și empatici, care își dădeau voie să fie exact așa cum sunt. Nu aveam la acel moment nicio legătură cu teatrul sau improvizația și totuși nu m-am simțit nicio secundă nelalocul meu. Din contră, am simțit că locul meu era fix acolo.
          </p>
          <p className="italic pb-2">
            Pentru mine, întreaga experiență a fost exact ce aveam nevoie pentru a prinde curajul să mă joc mai mult și să fiu eu, cu tot cu pachetul de emoții.
          </p>
          <p className="italic">
            Dacă ai ajuns până aici și ceva din povestea mea rezonează cu tine, înseamnă că Challenge Experience #3 poate să fie exact ce ai și tu nevoie 🫶🏻
          </p>
        </div>

        <div className="flex-1 p-4">
          <p className="underline pb-4">Andrei, #ediția 2 </p>
          <p className="italic">Experiența CHY#2 a fost pur și simplu excepțională! Patru zile pline de distracție, aventura și momente de descoperire personală, care mi-au rămas în amintire. Echipa Buluc a fost, și de aceasta data, la înălțime: au ales o locație superbă, au organizat activități provocatoare și au creat ocazia perfectă de a lega prietenii autentice. Conexiunea cu trainerii a fost imediată, iar clasele au depasit toate asteptarile. Iar colegii… nu știu cum reușesc, dar de fiecare data se aduna cei mai cool oameni!</p>
        </div>
        {/* <div className="flex-1 p-4">
          <p className="underline pb-4">Irina, #ediția 2</p>
          <p className="italic">
            Am participat la CHY Experience #2 pentru prima dată vara trecută. Am venit fără așteptări, curioasă de surprizele pregătite de organizatori.
          </p>
          <p className="italic">
            Am fost plăcut surprinsă de cadrul unde s-a desfășurat tabăra: vedere la piscurile montane, o oază de relaxare, conectare autentică, creștere personală într-un mediu sigur în care să îți poți explora și exprima emoțiile.
          </p>
          <p className="italic">De-abia aștept ediția următoare.</p>
        </div> */}
      </div>

      <div className="bg-white">
        <div className="flex mb:flex-col">
          <div className="p-20 mb:p-10">
             <h3 className="title bg-white text-[#ed9561] mb-10 mb:mx-6">
              FAQs
            </h3>
            {questions.map((item) => (
              <FaqItemRow key={item.question} {...item} />
            ))}
          </div>
        
          <div className="w-[50vw] mb:w-[100vw] mb:h-[80vh]">
           <div className="bg-cover bg-no-repeat bg-center h-[100%] mb:w-full" style={{ backgroundImage: `url(${IMAGES.ExperienceV3_21})` }}></div>
          </div>  
        </div>
      </div>

      <div className="bg-white px-20 py-20 mb:px-8 mb:py-20" ref={signupRef}>
         <div className="w-full flex">
          <div className="bg-red email-btn">
            <a href="mailto:rezervari.buluc@gmail.com" className="flex items-center">
              <FaEnvelope size='30px' className="mr-2" />
              <span>SOLICITA OFERTA DETALIATĂ</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* colors */}
      <div>
        <div className="bg-[#dd645b] border-[#dd645b]"></div>
        <div className="bg-[#729ed1] border-[#729ed1]"></div>
        <div className="bg-[#859762] border-[#859762]"></div>
        <div className="bg-[#ed9561] border-[#ed9561]"></div>
      </div>
    </MainLayout>
    
  );
};

const teamMembers = [
  {
    key: "mella",
    imageSrc: IMAGES.ExperienceV3_echipa_3,
    name: "Mihaela Mardare",
    role: "Trainer",
    color: "[#dd645b]"
  },
  {
    key: "robert",
    imageSrc: IMAGES.ExperienceV3_echipa_4,
    name: "Robert Ciupitu",
    role: "Trainer",
    color: "[#729ed1]"
  },
  {
    key: "mari",
    imageSrc: IMAGES.ExperienceV3_echipa_2,
    name: "Marilena Adam",
    role: "Storyteller",
    color: "[#859762]"
  },
  {
    key: "andreea",
    imageSrc: IMAGES.ExperienceV3_echipa_1,
    name: "Andreea Istrate",
    role: "Flow Keeper",
    color: "[#ed9561]"
  }
];

const questions = [
  {
    question: 'Cui se adresează această experiență?',
    answer: 'Oricui simte că vrea să iasă din rutină, să se exprime mai liber și să lucreze cu frica de penibil într-un cadru sigur și relaxat.'
  },
  {
    question: 'Am nevoie de o experiență anume ca sǎ particip?',
    answer: 'Nu, experiența este gândită pentru oricine.'
  },
  {
    question: 'Cum se desfășoară cele patru zile?',
    answer: 'Cele patru zile sunt construite ca un proces, cu momente diferite de explorare, pauză și integrare. Programul complet este transmis participanților înainte de sosire.'
  },
  {
    question: 'Cum este structurat programul zilnic?',
    answer: 'Programul este flexibil și gândit ca o balanță între activități ghidate și momente de relaxare. Există timp dedicat experiențelor comune, dar și spațiu în care fiecare poate alege ce are nevoie: pauză, liniște sau explorare.'
  },
  {
    question: 'Este o experiență intensă sau relaxată?',
    answer: 'Este un mix echilibrat între provocare și pauză & joacǎ, astfel încât să poți lucra cu tine fără presiune.'
  },
  {
    question: 'Ce este inclus in pret?',
    answer: 'Prețul include cazarea, transportul, mesele pe durata experienței, acces permanent la apă, cafea și ceai, ateliere personalizate, goodiebag & multe alte surprize…'
  },
  {
    question: 'Cum pot afla prețul?',
    answer: 'Scrie-ne un email la rezervari.buluc@gmail.com, iar noi îți vom trimite toate detaliile legate de preț și înscriere.'
  },
  {
    question: 'Trebuie să plătesc toată suma din start?',
    answer: 'La momentul înscrierii se achită un avans care asigură blocarea locului, iar restul sumei poate fi plătită în tranșe, conform contractului, dar dacă vrei poți achita totul chiar de la momentul înscrierii. '
  },
  {
    question: 'Dacă nu mai pot participa, primesc banii înapoi?',
    answer: 'În caz de anulare, nu putem oferi rambursare. '
  }
]

export default Experience;