import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import SignatureCanvas from 'react-signature-canvas';
import { modifyAdvConsentPdf } from '../utils/modifyAdvConsentPdf';
import { emailHandlerNetlify } from '../utils/emailHandlerNetlify'
import { emailHandlerCPannel } from '../utils/emailHandlerCPannel'
import SimpleCard from '../cards/SimpleCard';
import '../../css/form35.css';

// Regex patterns to allow only letters (without diacritics), numbers and spaces
const nameRegex = /^[a-zA-Z\s]*$/;
const phoneRegex = /^[0-9+]*$/;

interface ConsentAdvFormData {
  name: string;
  email: string;
  address: string;
  phone: string;
  period: '1' | '2';
}

export default function ConsentAdvForm() {
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const history = useHistory();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ConsentAdvFormData>();
  const signatureRef = useRef<SignatureCanvas>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: ConsentAdvFormData) => {
    try {
      setIsSubmitting(true);
      const signatureImage = signatureRef.current?.getTrimmedCanvas().toDataURL('image/png') || null;

      const pdfBlob = await modifyAdvConsentPdf({...data, signature: signatureImage });

      const base64pdf = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(pdfBlob);
        reader.onloadend = () => {
          resolve((reader.result as string).split(',')[1]); 
        };
        reader.onerror = err => reject(err);
      });

      function downloadPdf(pdfBlob: Blob, fileName: string = "document.pdf") {
        const url = URL.createObjectURL(pdfBlob);
        const link = document.createElement("a");
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }

      downloadPdf(pdfBlob, "consimtamant.pdf");

      const emailHTML = `<p> Cursantul ${data.name}, cu email-ul ${data.email}, a semnat consimțământul. Si a primit fisierul atașat.</p>`

      await emailHandlerNetlify({
        user_email: data.email,
        subject: "Consimțământ Challenge Yourself Avansati",
        message: emailHTML,
        form: `data:application/pdf;base64,${base64pdf}`
      });

      // await emailHandlerCPannel({
      //   to: data.email,
      //   subject: "Consimțământ Challenge Yourself Avansati",
      //   message: "Mulțumim ca ai completat acordul de participare și confidențialitate privind participarea la cursurile Buluc. Acest formular nu te obligă la continuarea cursului, dar este necesar si pentru participarea la prima ședință.",
      //   form: `data:application/pdf;base64,${base64pdf}`,
      // });

      reset();
      signatureRef.current?.clear();
      setIsSubmitting(false);

      // Redirect to success page
      history.push('/consimtamant-success');

    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
      // Redirect to error page
      history.push('/consimtamant-eroare');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SimpleCard>
       <h6 className="mb-2 font-bold text-center pb-10">Acord de participare la Cursul Challenge Yourself modul avansați</h6>

        <p className="mb-2">Subsemnatul/a:</p>
        <div className='flex gap-4 mb:flex-col'>
          <label className='w-1/4 mb:w-full'>
            <span>Nume/Prenume*:</span>
            <input
              type="text"
              size={25}
              {...register('name', {
                required: 'Numele este obligatoriu',
                pattern: {
                  value: nameRegex,
                  message: 'Numele poate conține doar litere, fără diacritice'
                }
              })} />
            {errors.name && <span className='error'>{errors.name.message}</span>}
          </label>

          <label className='w-1/4 mb:w-full'>
            <span>Adresa:*</span>
            <input
              type="text"
              size={25}
              {...register('address', {
                required: 'Adresa este obligatorie',
              })} />
            {errors.phone && <span className='error'>{errors.phone.message}</span>}
          </label>

          <label className='w-1/4 mb:w-full'>
            <span>Telefon:*</span>
            <input
              type="text"
              size={25}
              {...register('phone', {
                required: 'Telefonul este obligatoriu',
                pattern: {
                  value: phoneRegex,
                  message: 'Telefonul poate conține doar cifre și +'
                }
              })} />
            {errors.phone && <span className='error'>{errors.phone.message}</span>}
          </label>

          <label className='w-1/4 mb:w-full'>
            <span>Email*:</span>
            <input
              type="email"
              size={30}
              {...register('email', { required: 'Emailul este obligatoriu' })}
            />
            {errors.email && <span className='error'>{errors.email.message}</span>}
          </label>
        </div>
        <p className='mt-4'>în calitate de participant(ă) la cursul <b>Challenge Yourself - avansați</b>, declar că datele de mai sus sunt corecte și complete și am acces la adresa de email.</p>

        <p className="mb-2">Prin această anexă declar pe propria răspundere că am luat la cunoștință și sunt de acord cu următoarele:</p>
        
        <p className="mt-4 mb-2 font-bold">Abonament și plată</p>
        <ul className="list-star ml-6 space-y-2 mb-4">
          <li>Participarea la curs se realizează exclusiv pe baza unui abonament lunar. Plata per ședință, indiferent de numărul de ședințe la care participă cursantul, nu este posibilă.</li>
          <li>Ședințele la care cursantul nu poate participa nu se pot recupera la alte grupe, iar absențele nu modifică valoarea abonamentului lunar.</li>
          <li>Asociația Buluc nu își asumă răspunderea pentru eventualele întârzieri sau anulări din motivele personale ale cursanților.</li>
          <li>Plata abonamentului se efectuează la începutul fiecărei luni de curs, conform calendarului comunicat de Buluc și acoperă toate cele 4 ședințe programate în luna respectivă.</li>
          <li>Dacă plata pentru luna respectivă a fost efectuată, suma achitată nu se rambursează, inclusiv în cazul în care cursantul nu mai poate participa la una sau mai multe ședințe din luna respectivă.</li>
          <li>Pentru plata serviciilor oferite de Asociația Buluc se poate emite factură, pe baza datelor necesare facturării furnizate de participant. Factura poate circula fără ștampilă și semnătură conform Legii 227/2015 privind Codul Fiscal, Art. 319.</li>
          <li>Dacă dorești să întrerupi definitiv participarea la curs sau știi că nu vei putea participa într-o anumită lună, te rugăm să ne anunți cu cel puțin 10 zile înainte de începerea lunii respective.</li>
        </ul>

        <p className="mt-4 mb-2 font-bold">Structură / absențe</p>
        <ul className="list-star ml-6 space-y-2 mb-4">
          <li>Structura cursului se poate modifica în funcție de dinamica fiecărei grupe, de progresul participanților, de disponibilitatea spațiului și de alți factori care pot influența buna desfășurare a cursului. Acest lucru poate presupune modificarea, înlocuirea sau reprogramarea anumitor activități.</li>
          <li>Componența grupei, precum și ora de desfășurare a cursului, se pot modifica pe parcursul anului, în funcție de anumite situații care pot influența desfășurarea cursului. Participanții vor fi informați cu privire la eventualele modificări.</li>
          <li>Trainerii pot ajusta ponderea și succesiunea diferitelor module și activități, în funcție de parcursul grupei și de obiectivele de lucru stabilite pentru aceasta. Aceste ajustări pot include, de exemplu, alocarea unei perioade mai mari pentru lucrul la improvizație, teatru, monolog, exerciții de grup sau alte formate experiențiale. Deciziile privind structura și desfășurarea activităților aparțin trainerilor, ținând cont de dinamica și obiectivele grupei.</li>
          <li>Asociația Buluc își rezervă dreptul de a încheia participarea unui cursant în cazul unor comportamente sau situații care afectează în mod semnificativ buna desfășurare a cursului, a activităților sau a relației cu ceilalți participanți și traineri.</li>
          <li>Programul cursurilor și al activităților asociate acestora, inclusiv Improshow-uri și spectacole, se poate modifica în funcție de sărbătorile legale, disponibilitatea spațiului sau a trainerilor și alte situații neprevăzute care pot afecta desfășurarea programului. Participanții vor fi informați cu privire la eventualele modificări.</li>
          <li>Anul de curs se desfășoară, în mod obișnuit, pe durata a 10 luni, din septembrie până în iunie. Luna iulie poate avea un program și un format diferit față de cursul obișnuit, iar luna august reprezintă perioada de vacanță și nu face parte din abonamentul obișnuit.</li>
          <li><b>Pentru a păstra continuitatea grupului și buna desfășurare a cursului, fiecare cursant are dreptul să lipsească doar 5 luni (din 10) și nu mai mult de 2 luni consecutive.</b> În cazul unei absențe mai lungi de 2 luni consecutive, revenirea în grupa inițială nu mai poate fi garantată, deoarece programa și nivelul de lucru al grupei pot evolua în această perioadă. Participantul poate reveni la curs, însă grupa în care va fi reintegrat va fi stabilită în funcție de nivelul și parcursul său la momentul revenirii.</li>
          <li>Locația în care se desfășoară cursul se poate modifica pe parcursul anului. Participanții vor fi informați în prealabil cu privire la aceste modificări.</li>
        </ul>

        <p className="mt-4 mb-2 font-bold">Improshow / producții / reprezentații</p>
        <ul className="list-star ml-6 space-y-2 mb-4">
          <li>Improshow-urile și producțiile Buluc nu fac parte din cele 4 ședințe lunare incluse în abonamentul cursului și reprezintă activități distincte de curs.</li>
          <li>Participarea la acestea nu este obligatorie și poate fi condiționată de prezența și implicarea în cadrul cursului.</li>
          <li>Accesul în cadrul acestor evenimente se realizează pe baza unei donații minime recomandate. Valoarea donației recomandate poate varia în funcție de formatul evenimentului și de costurile asociate organizării acestuia.</li>
          <li>Donațiile adunate sunt împărțite, în mod obișnuit, între performerii implicați și Asociația Buluc. În situațiile în care evenimentul implică costuri suplimentare, precum închirierea sau utilizarea spațiului, acestea pot fi acoperite din suma colectată înainte de împărțirea acesteia. Modalitatea de distribuire poate varia în funcție de condițiile și costurile fiecărui eveniment.</li>
          <li>Serviciile de foto/video nu sunt incluse în mod automat în cadrul fiecărui Improshow sau spectacol. În funcție de disponibilitatea fotografilor/videografilor și de formatul evenimentului, pot fi realizate materiale foto și/sau video pentru documentarea și promovarea activităților Buluc.</li>
          <li>Pentru producțiile realizate în cadrul Modulului de Teatru, costurile aferente închirierii sălii de teatru/spectacol și serviciilor necesare desfășurării spectacolului sunt suportate integral de participanții înscriși în producția respectivă.</li>
          <li>Evenimentele și reprezentațiile care fac parte din activitatea cursului și implică participarea cursanților, inclusiv cele deschise publicului, pot avea acces pe bază de donație liberă. Donațiile sunt voluntare și sunt destinate susținerii activității Asociației Buluc și acoperirii costurilor asociate organizării și desfășurării acestora.</li>
        </ul>

        <h4 className="mt-6 mb-2 font-semibold">Nota de informare cu privire la protecția datelor personale</h4>
        <p className="mb-2">Având în vedere consimțământul încheiat între părți, vă informăm următoarele: <br/>  Datele cu caracter personal se vor prelucra în condițiile Regulamentului UE 2016/679 – privind protecția persoanelor fizice în ceea ce privește prelucrarea datelor cu caracter personal și privind libera circulație a acestor date.</p>
        <p className="mb-2">Tipurile de date cu caracter personal prelucrate sunt: numele și prenumele, adresa de email, numărul de telefon, semnătura, imaginile (fotografii și filmări) realizate de către Asociația Buluc în timpul desfășurării cursului, utilizate în scop de promovare și orice alte date furnizate în vederea executării consimțământului. Participarea la curs presupune acceptul ca imaginea (foto/video) să fie surprinsă în timpul activităților și utilizată de către Asociația Buluc în scop de promovare (site, social media, materiale de prezentare).</p>
        <p className="mb-2">Părțile, în calitate de operator de date, vor prelucra datele cu caracter personal ale persoanelor de contact, derulanților de contract, reprezentanților, salariaților sau a altor persoane ce au legătură directă cu derularea consimțământului încheiat între părți în scopul aducerii la îndeplinire a obligațiilor părților. Datele cu caracter personal vor fi prelucrate de Părți doar în scopul executării consimțământului, pentru îndeplinirea obligațiilor legale ce le revin precum și alte scopuri legitime cum ar fi realizarea raportărilor interne, arhivare etc.</p>
        <p className="mb-2">Datele cu caracter personal vor fi prelucrate pe toată durata colaborării precum și ulterior în scopuri legitime precum realizarea raportărilor interne, arhivare etc.</p>
        <p className="mb-2">Părțile au obligația de a informa direct, conform art. 12 și 13 din Regulamentul General privind protecția datelor, reprezentanții, salariații sau alte persoane împuternicite în relația cu cealaltă Parte cu privire la prelucrarea datelor lor de către cealaltă parte pentru scopuri de derulare a serviciilor, pentru îndeplinirea unor obligații legale precum și în alte scopuri legitime.</p>
        <p className="mb-2">Părțile se obligă să aplice toate măsurile tehnice și operaționale adecvate în vederea protejării datelor cu caracter personal împotriva oricăror pierderi, modificări, dezvăluiri sau acces neautorizat și împotriva procesării ilegale.</p>
        <p className="mb-4">Părțile se obligă să respecte clauzele de confidențialitate prevăzute în consimțământ.</p>

        <div className="mt-6" style={{ width: isMobile ? 200 : 500 }}>
          <p className="mb-4">Am luat la cunoștință,</p>
          <p className="text"> Semnătura:* </p>
          <div className="signarure">
            <SignatureCanvas
              ref={signatureRef}
              penColor='black'
              canvasProps={{ width: isMobile ? 200 : 500, height: 100, className: 'sigCanvas' }}
            />
          </div>
        </div>

        <div className="flex pb-4 mt-4">
          <button
            type="submit"
            className="px-6 py-2 bg-red text-white br disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Se procesează...' : 'Semnează'}
          </button>
        </div>

      </SimpleCard>
    </form>
  );
}
