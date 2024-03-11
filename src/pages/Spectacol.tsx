import MainLayout from "../components/layouts/MainLayout"; 
import { Title, Paragraph, Subtitle } from "../components/layouts";


export default function Blog () {

  return (
    <MainLayout title="Din intamplare – Stagiunea din sufragerie">
      <section id="spectacol">
        <div className="spectacol md:flex pb-8">
          <Paragraph style={{ maxWidth: '50vw' }}>
            <p className="mb-1 text-5xl md:text-xl"> ”Din intamplare„ este primul spectacol din Stagiunea din sufragerie. Te invităm să vezi un spectacol despre iubire și bani, dar mai ales despre iubire. Două lumi diferite se întâlnesc din întâmplare. Ce se întâmplă atunci? Se poate, oare, ca cele două să se îndrăgostească? …</p>
            <br/>
            <p className="mb-1 text-5xl md:text-xl"> Se joacă la Carolia Social House, pe Madrid, 4 (zona Dorobanți)  </p>
            <p className="mb-1 text-5xl md:text-xl"> Accesul la eveniment se face doar pe bază de rezervare & donație recomandată. </p>
            <p className="mb-1 text-5xl md:text-xl"> Pentru rezervări: mesaj privat pe Instagram/Facebook sau whatsapp 0740 993 479. </p>
            <p className="mb-1 text-5xl md:text-xl mb-4"> Ne strângem buluc? </p>

            <div className="w-full mt-auto mb-2">
              <h6 className="title font-bold">
                  <span className="text-orange">.</span>
                    distribuție:
              </h6>
              <h6><span className="pl-10"> Mihai : </span> <span className="text-orange title"> Ionuț Terteci </span></h6>
              <h6><span className="pl-10"> Carla : </span> <span className="text-orange title"> Mihaela Mardare </span></h6>
            </div>

            <div className="w-full mt-auto mb-2">
              <h6 className="title">
                  <span className="text-orange">.</span>
                  <span className="font-bold title">coordonator spectacol:</span>
                  <span className="text-orange pl-1"> Mihaela Mardare </span>
              </h6>
            </div>

            <div className="w-full mt-auto mb-2">
              <h6 className="title">
                  <span className="text-orange">.</span>
                  <span className="font-bold title">text:</span>
                  <span className="text-orange pl-1"> Buluc</span>
              </h6>
            </div>
            
            <div className="w-full mt-auto mb-2">
              <h6 className="title">
                  <span className="text-orange">.</span>
                  <span className="font-bold title">durată spectacol:</span>
                  <span className="text-orange pl-1"> 50 min </span>
              </h6>
            </div>
          </Paragraph>

          <img
            src="src/assets/images/din-intamplare.jpg"
            alt="stagiunea"
            className="mx-8"
            style={{ borderRadius: '8px', width: '45%' }}
          />
        </div>

        <Title title='galerie foto' />

        <a href="/sufragerie" className="text-purple-600 hover:text-purple-500 underline text-sm">👈 Înapoi la spectacole</a>
      </section>
    </MainLayout>
  );
}
