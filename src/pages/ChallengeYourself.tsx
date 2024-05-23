import MainLayout from "../components/layouts/MainLayout"; 
import TeamMemberCard from "../components/cards/TeamMemberCard";
import IMAGES from "../assets/Images";
import BannerTextAbsolute from "../components/layouts/BannerTextAbsolute";
import SimpleSlider from '../components/SimpleSlider';


export default function ChallengeYourself () {

  return (
    <MainLayout>
      <div className="py-20">
        <a href="/experience">
          <h3 className="title font-bold text-orange">
            @The Experience
          </h3>
        </a>

        <a href="/office">
          <h3 className="title font-bold text-orange">
            @The Office
          </h3>
        </a>
      </div>

      <BannerTextAbsolute
        imageURL={IMAGES.CYImage1}
        direction="right"
        className="h-[30vw] mb-20"
      >
        <p className="pb-2">
          Challenge Yourself este așa cum spune și numele -
          <span className="text-orange"> o provocare, o încercare de a te autodepasi, dar și o relaxare activă care are ca scop formarea unei pauze în viețile noastre. </span> 
          Ne întâlnim o dată pe săptămână într-o casă interbelică unde, cu ajutorul tehnicilor teatrale, încercăm să ne deconectăm de la haosul zilnic și să ne conectăm mai mult cu propria persoană.
        </p>

        <p className="">
          Îți propunem un curs ce se desfășoară pe o perioadă de 3 luni unde ”ne jucăm” prin intermediul unor tehnici teatrale pe care le vei folosi în fiecare moment în care trebuie să lucrezi cu emoția, imaginația și creativitatea, cu tine însuți, dar și în relație cu ceilalți.
        </p>
      </BannerTextAbsolute>

      <BannerTextAbsolute
        imageURL={IMAGES.CYImage3}
        direction="left"
        className="h-[25vw] pb-20"
        title="Unde se întâmplă?"
      >
        <p className="">
          La locul nostru de joacă de pe str. Madrid 4. În sufrageria unei case interbelice din 1920 în zona Dorobanți. Un spațiu creativ si versatil, ce dispune şi de o terasa exterioară unde ne adunăm buluc seară de seară.
        </p>
      </BannerTextAbsolute>

			<div className="grid grid-cols-2 mb:grid-cols-1 gap-8 pb-20">
        <div className="">
          <h4 className="title pb-4 text-red">
            Unde și când ne pot fi de folos tehnicile teatrale?
          </h4>
          <p className="pb-4">
            Aproape în fiecare moment în care trebuie să lucrăm cu emoția, imaginația și creativitatea, cu noi înșine dar și în relație cu ceilalți.
          </p>

          <p className="pb-2">Mai simplu spus, <span className="text-orange">ne folosesc în fiecare zi:</span></p>
          <ul className="list-disc pl-8">
            <li className="text-red pl">atunci când ne dorim sa fim productivi</li>
            <li className="text-orange">când vrem să avem o gândire pozitivă</li>
            <li className="text-red">când ne dorim să avem curajul de a acționa şi libertatea de a ne exprima</li>
          </ul>
        </div>

        <div className="">
          <h4 className="title pb-4 text-red">
            Cum te va schimba acest curs?
          </h4>
          <p>Aproape în fiecare moment în care trebuie să lucrăm cu emoția, imaginația și creativitatea, cu noi înșine dar și în relație cu ceilalți.
          </p>

          <p className="pb-4">Mai simplu spus, ne folosesc în fiecare zi:</p>
          <ul className="list-disc pl-8">
            <li>Vei vedea de ce ești capabil cu adevărat prin ascultarea si gestionarea propriului corp;</li>
            <li>Îți vei îmbunătăți încrederea prin gestionarea emoțiilor;</li>
            <li>Îți vei dezvolta creativitatea prin arta improvizației;</li>
            <li>Vei descoperi ce înseamnă să te joci cu propriile blocaje;</li>
            <li>Vei învăța lucruri noi despre tine, lucruri pe care probabil nici tu nu le știai, prin acceptarea si afirmarea propriei personalități;</li>
            <li>Vei reuși să te adaptezi situațiilor limită si vei scăpa de frica vorbitului în public;</li>
            <li>Te vei exprima liber, mai puternic și mai nuanțat;</li>
          </ul>

        </div>
			</div>

      <div className="grid grid-cols-3 gap-6 w-full h-[30vw] mb-20">
        <div className="image-cover br" style={{ backgroundImage: `url(${IMAGES.CYImage4})`}}></div>
        <div className="image-cover br" style={{ backgroundImage: `url(${IMAGES.CYImage8})`}}></div>
        <div className="image-cover br" style={{ backgroundImage: `url(${IMAGES.CYImage6})`}}></div>
      </div>


      <div className="grid grid-cols-2 mb:grid-cols-1 gap-8 mb-20">
        <div>
          <h4 className="title pb-4 text-red">
            Ce urmează după cele 3 luni de curs?
          </h4>

          <p className="pb-4">
            La finalul modulului, cursanții pregătesc un show de improvizație cu exerciții și jocuri pe care le-au făcut în aceste 3 luni. Ne place să spunem că este <span className="text-orange">un curs deschis cu apucături de show</span> pentru că vrem să oferim o experiență relaxantă și distractivă unde fiecare persoană își invită în sufrageria noastră prietenii, familia sau chiar colegii de la job.
          </p>

          <p>Ulterior, Challenge Yourself continuă la grupele de avansați unde trecem la un alt nivel, aprofundam exercițiile de creativitate, improvizație și spontaneitate. Descoperim cum ne putem folosi de acestea în viața de zi cu zi, dar și care este conexiunea lor cu teatrul. Ne jucăm mai mult și ne distrăm într-un spectacol de Improvizație “pe bune”</p>
        </div>

        <div className="overflow-hidden">
          <SimpleSlider
            images={[IMAGES.Show1, IMAGES.Show2, IMAGES.Show3, IMAGES.Show4, IMAGES.Show5, IMAGES.Show6, IMAGES.Show7]}
            className="w-[30vw] h-[30vw] br overflow-hidden"
          ></SimpleSlider>
        </div>

      </div>

      <div className="px-20 pb-20">
          <h3 className="text-red">
            Traineri
          </h3>

          <p className=""> Pe Madrid, 4 te vei întâlni cu cei doi traineri pe care cu siguranţă îi vei îndrăgi: Mella şi Robert. Ei au terminat Universitatea Națională de Artă Teatrală și Cinematografică "I.L. Caragiale", București şi de mai bine de 5 ani sunt profii ăia cool din cadrul cursurilor de dezvoltare personală cu adulţi, dar şi cu copii.</p>

        <div id="members" className="flex mb:inline gap-10 justify-center my-10">
          <TeamMemberCard
            key={1}
            imageSrc={IMAGES.echipaMihaelaMardare}
            name=""
            color="red"
          />
          <TeamMemberCard
              key={2}
              imageSrc={IMAGES.echipaRobertCiupitu}
              name=""
              color="orange"
            />
        </div>
      </div>

      <div className="px-20 pb-20">
          <h4 className="title text-red pb-4">
            Alege varianta care ți se potrivește și contactează-ne.
          </h4>

          <div className="flex mb:inline gap-10 justify-center my-4">
            <div className="p-10 border-[20px] border-orange rounded-full mb:mb-10">
              <h5 className="text-center font-bold pb-4">
                VARIANTA 1 - PLATA LUNARA
              </h5>
              <p className="text-center">
                4 sedinte/ luna
              </p>
              <p className="text-center">
                o sedinta/ saptamana
              </p>
            </div>

            <div className="p-10 border-[20px] border-red rounded-full">
              <h5 className="text-center font-bold pb-4">
                VARIANTA 2 - PLATA INTEGRALA MODUL
              </h5>

              <p className="text-center">
                12 sedinte/ 3 luni
              </p>
              <p className="text-center">
                o sedinta/ saptamana
              </p>
            </div>

          </div>
          <p className="text-center text-black">*Plata integrala a cursului se achita in prima sedinta a fiecarei luni in functie de varinata aleasa</p>
      </div>

      <div className="pb-20">
        <div className="grid grid-cols-2 mb:grid-cols-1 gap-8">
          <div>
            <h4 className="text-orange">
              Cursul challenge yourself:
            </h4>

            <ul className="list-disc pl-8">
              <li>are are 4 ședințe pe lună/ 1 ședință/săptămână</li>
              <li>funcționează sub forma unui abonament, iar ședințele nu se pot recupera</li>
              <li>se achită în prima ședință a fiecărei luni</li>
            </ul>
            
          </div>

          <div>
            <h4 className="text-orange">
              Cum îmi rezerv locul? 
            </h4>
            <p>
              <span className="text-red font-bold">Locul se consideră rezervat după achitarea avansului nerambursabil în valoare de 100 de lei (avans ce acoperă prima ședință)</span>. Acesta se scade automat din plata primei luni sau plata întregului modul. 
            </p>
          </div>

        </div>
      </div>

      <a aria-label="Chat on WhatsApp" target="_blank" href="https://wa.me/1XXXXXXXXXX"> 
      </a>



      
    </MainLayout>
  );
}
