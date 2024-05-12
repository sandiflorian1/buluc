import MainLayout from "../components/layouts/MainLayout"; 
import TeamMemberCard from "../components/cards/TeamMemberCard";


export default function ChallengeYourself () {

  return (
    <MainLayout title="Challenge Yourself">
			<div className="w-full mt-auto mb-2">
				<h6 className="title">
						<span className="text-orange">.</span>
						{/* <span className="font-bold title">curs de dezvoltare personala prin tehnici teatrale</span> */}
				</h6>
			</div>

			<section id="unde">
				<div className="flex w-full h-[30vw] relative overflow-hidden">
          <div style={{ width: '15vw'}}>
            <div className="corner-circle c1 bg-red" />
            <div className="corner-circle c2 bg-white" />
          </div>
          <div>
           
          </div>

					<img
            src="src/assets/images/partye.jpg"
            alt="stagiunea"
            className="corner"
          />

				</div>
			</section>

      <section id="locatie">
				<div className="flex w-full h-[30vw] relative overflow-hidden justify-between">
          <div style={{ width: '15vw'}}>
            <div className="corner-circle c3 bg-orange" />
            <div className="corner-circle c4 bg-white" />
          </div>

          <div className="w-[40vw]">
            <h3 className="title font-bold text-orange text-end">
              .despre locatie
            </h3>

            <p className="mb-1 text-5xl md:text-xl text-end"> Într-o casă din 1920 cu trăsături burgheze în inima Capitalei amplasată in zona Dorobanți într-o vilă interbelică. O locație de care te vei îndrăgosti așa cum am făcut și noi prima dată când i-am pășit pragul. Un spațiu creativ si versatil, ce dispune şi de o terasa exterioară unde ne adunăm buluc seară de seară. </p>
          </div>

					{/* <img
            src="src/assets/images/partye.jpg"
            alt="stagiunea"
            className="corner"
          /> */}

				</div>
			</section>

      <section id="ce">
				<div className="flex w-full h-[30vw] relative overflow-x-clip">
          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1676385777209-1d435cc69c5a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="stagiunea"
              className="corner2"
            />
          </div>

          <div className="w-[45vw]">
            <h3 className="title font-bold text-red">
              .ce este challenge yourself?
            </h3>

            <p className="mb-1 text-5xl md:text-xl"> Challenge Yourself este, aşa cum spune şi numele - o provocare,o încercare de a te autodepăşi, dar şi orelaxare activă. </p>
            <p className="mb-1 text-5xl md:text-xl"> Îți propunem un curs ce se desfășoară pe o perioadă de 3 luni și care are ca scop formarea unei pauze în viețile noastre. Ne întâlnim în fiecare luni seară într-o casă interbelică unde, cu ajutorul tehnicilor teatrale, încercăm să ne deconectăm de la haosul zilnic și să ne reconectăm mai mult cu propria persoană. </p>

          </div>

					

				</div>
			</section>

      <section id="folos">
				<div className="flex w-full h-[30vw] relative overflow-x-clip mt-60">
          <div style={{ width: '20vw'}}>
            <div className="corner-circle c5 bg-red" />
            <div className="corner-circle c6 bg-white" />
            <div className="corner-circle c7 bg-orange" />
          </div>

          <div className="w-[45vw]">
            <h3 className="title font-bold text-orange">
              .unde și când ne pot fi de folos tehnicile teatrale?
            </h3>

            <p className="mb-1 text-5xl md:text-xl"> Aproape în fiecare moment în care trebuie să lucrăm cu emoția, imaginația și creativitatea, cu noi înșine dar și în relație cu ceilalți. </p>
            <p className="mb-1 text-5xl md:text-xl"> Mai simplu spus, ne folosesc în fiecare zi: </p>

            <ul className="yourself text-orange">
              <li>atunci când ne dorim sa fim productivi</li>
              <li>când vrem să avem o gândire pozitivă</li>
              <li>când ne dorim să avem curajul de a acționa şi libertatea de a ne exprima</li>
            </ul>

          </div>

					

				</div>
			</section>

      <section id="cum">
				<div className="flex w-full relative overflow-hidden mt-20">
          <div className="w-[35vw]">
            <h3 className="title font-bold text-orange">
              .cum te va schimba acest curs?
            </h3>

            <ul className="cum text-xl font-bold">
              <li>
                <img  src="src/assets/images/teatru.svg"/>
                Vei vedea de ce esti capabil cu adevarat prin ascultarea si gestionarea propriului corp</li>
              <li>
                <img  src="src/assets/images/teatru.svg"/>
                Îti vei îmbunätäti increderea prin gestionarea emotiilor </li>
              <li>
                <img  src="src/assets/images/teatru.svg"/>
                Îti vei dezvolta creativitatea prin arta improvizatiei</li>
              <li>
                <img  src="src/assets/images/teatru.svg"/>
                Vei descoperi ce înseamnă sã te joci cu propriile blocaje</li>
              <li>
                <img  src="src/assets/images/teatru.svg"/>
                Vei învăța lucruri noi despre tine, lucruri pe care probabil nici tu nu le știai, prin acceptarea si afirmarea propriei personalități</li>
              <li>
                <img  src="src/assets/images/teatru.svg"/>
                Vei reuși să te adaptezi situațiilor limită si vei scăpa de frica vorbitului în public</li>
              <li>
                <img  src="src/assets/images/teatru.svg"/>
                Te vei exprima liber, mai puternic și mai nuanțat</li>
            </ul>
          </div>

					<div className="w-[35vw]">
              <img
                src="https://plus.unsplash.com/premium_photo-1676385777209-1d435cc69c5a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="stagiunea"
                className="m-4 cum-img cm1"
              />
              <img
                src="https://plus.unsplash.com/premium_photo-1676385777209-1d435cc69c5a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="stagiunea"
                className="m-4 cum-img cm2"
              />
              <img
                src="https://plus.unsplash.com/premium_photo-1676385777209-1d435cc69c5a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="stagiunea"
                className="m-4 cum-img cm3"
              />
              <img
                src="https://plus.unsplash.com/premium_photo-1676385777209-1d435cc69c5a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="stagiunea"
                className="m-4 cum-img cm4"
              />
            </div>

				</div>
			</section>

      <section id="urmeaza">
				<div className="flex w-full h-[30vw] relative overflow-hidden mt-60 justify-end">
          <div className="w-[45vw]">
            <h3 className="title font-bold text-orange">
              .ce urmeaza dupa 3 luni de curs?
            </h3>

            <p className="mb-1 text-5xl md:text-xl"> După modulul de 3 luni al cursului, cursanții pregătesc un show de impro cu exerciții și jocuri pe care le-au făcut în aceste 3 luni. Ne place să spunem că este un Curs deschis cu apucături de show pentru că vrem să oferim o experiență relaxantă și distractivă în care fiecare iși invită în sufrageria noastră prietenii, familia sau chiar colegii de la job. </p>
            <br/>
            <p className="mb-1 text-5xl md:text-xl"> Ulterior poți opta pentru a continua experiența Challenge Yourself, alături de grupa de avansați unde aprofundăm lucrurile și ne îndreptăm ușor către teatru. </p>

          </div>

					<img
            src="src/assets/images/partye.jpg"
            alt="stagiunea"
            className="corner3"
          />

          <div className="corner-circle c8 bg-orange" />

				</div>
			</section>

      <section id="traineri">
				<div className="w-full mt-40 flex flex-col items-center">
            <h3 className="title font-bold text-orange">
              .traineri
            </h3>

            <p className="mb-1 text-5xl md:text-xl w-[45vw]"> Pe Madrid, 4 te vei întâlni în fiecare LUNI cu cei doi traineri pe care cu siguranţă îi vei îndrăgi! </p>

          <div id="members" className="flex gap-10 justify-center my-10">
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={index}
                imageSrc={member.imageSrc}
                name={member.name}
                color={member.color}
              />
            ))}
          </div>

          <p className="mb-1 text-5xl md:text-xl w-[60vw] text-center">Mella şi Robert au terminat Universitatea Națională de Artă Teatrală și Cinematografică "I.L. Caragiale" , București şi de mai bine de 4 ani sunt profii ăia cool din cadrul cursurilor de dezvoltare personală cu adulţi, dar şi cu copii.</p>
				</div>
			</section>



      
    </MainLayout>
  );
}


const teamMembers = [
  {
    imageSrc: "src/assets/images/echipa/mihaela-mardare.png",
    name: "Mella",
    color: 'red',
  },

  {
    imageSrc: "src/assets/images/echipa/robert-ciupitu.png",
    name: "Robert",
    color: 'orange',
  }
];