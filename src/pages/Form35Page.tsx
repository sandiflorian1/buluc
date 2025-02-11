import MainLayout from "../components/layouts/MainLayout";
import Form35 from "../components/form/Form35";
import SimpleCard from "../components/cards/SimpleCard";
import { FadeInAnimation } from "../components/animations/Animations";

export interface IForm35PageProps {
}

export default function Form35Page(props: IForm35PageProps) {
  const handleDownload = async () => {
    try {
      const response = await fetch('/form230.pdf');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'formular230.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };

  return (
    <MainLayout>
      <FadeInAnimation className="container mt-20 mb:mt-10">
        <div className="flex flex-row mb:flex-col m-10 mb:m-0 gap-4">
          <SimpleCard>
            <h4 className="mb-4">Redirecționează 3,5% din impozitul pe venit către Asociația ”Buluc”</h4>

            <p className="mb-2">
              A fi #buluc înseamnă a face parte dintr-o comunitate care își dorește să creeze conexiuni autentice, să inspire creșterea personală și culturală și să încurajeze creativitatea. Fie că vorbim de cursurile de dezvoltare personală, de proiectele culturale pe care le implementăm sau de spectacolele de teatru, toate au un singur punct comun: VOI (oamenii buluc)
            </p>

            <p className="mb-2">
              Credem că împreună, avem puterea de a schimba cultura orașului și de a susține comunitatea artiștilor independenți prin redirecționarea a 3,5% din impozitul pe venit către Asociația Buluc.
            </p>

            <h5 className="my-4">Cine poate redirecționa?</h5>
            <p className="mb-2">
              Numai contribuabilii care realizează venituri din salarii şi asimilate salariilor pot dispune asupra destinaţiei unei sume reprezentând până la 3,5% din impozitul stabilit conform legii, prin completarea formularului 230, către orice organizație non-guvernamentală ‒ asociație, fundație etc. dorește (conform art. 82, alin. 6 din Codul Fiscal). Practic, în acest fel, tu transmiți statului modul în care dorești să fie cheltuită o parte din impozitul tău pe venit.
            </p>

            <h5 className="my-4">Vrei să depui singur formularul? Iată ce ai de făcut:</h5>

            <button
              onClick={handleDownload}
              className="px-6 py-2 bg-red text-white br mb-4">
              Descarca formularul
            </button>

            <p>
              Completezi formularul cu datele tale. Îl scanezi și îl trimiți (în format PDF) pe <a href="mailto:contact@buluc.org" className="text-red">buluc.org@gmail.com</a> sau într-o direcție financiară de care aparții.
            </p>
          </SimpleCard>

          <SimpleCard>
            <h4>Cum pot redirecționa?</h4>
            <p>
              Completează formularul de mai jos până pe 20 mai! Durează mai puțin de un minut.
            </p>
            <Form35></Form35>
            <p>Odată ajuns la noi, echipa Buluc se ocupă de toată treaba.</p>
            <p className="font-bold">Mulțumim!</p>
          </SimpleCard>
        </div>
      </FadeInAnimation>
    </MainLayout>
  );
}
