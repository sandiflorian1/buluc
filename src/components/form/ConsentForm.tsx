import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import SignatureCanvas from 'react-signature-canvas';
import { modifyConsentPdf } from '../utils/modifyConsentPdf';
import { emailHandlerNetlify } from '../utils/emailHandlerNetlify'
import { emailHandlerCPannel } from '../utils/emailHandlerCPannel'
import SimpleCard from '../cards/SimpleCard';
import '../../css/form35.css';


// Regex patterns to allow only letters (without diacritics), numbers and spaces
const nameRegex = /^[a-zA-Z\s]*$/;
const phoneRegex = /^[0-9+]*$/;

interface ConsentFormData {
  name: string;
  address: string;
  email: string;
  phone: string;
  period: '1' | '2';
}

export default function ConsentForm() {
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ConsentFormData>();
  const signatureRef = useRef<SignatureCanvas>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: ConsentFormData) => {
    try {
      setIsSubmitting(true);
      const signatureImage = signatureRef.current?.getTrimmedCanvas().toDataURL('image/png') || null;

      const pdfBlob = await modifyConsentPdf({...data, signature: signatureImage });

      const base64pdf = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(pdfBlob);
        reader.onloadend = () => {
          resolve((reader.result as string).split(',')[1]); 
        };
        reader.onerror = err => reject(err);
      });

      // function downloadPdf(pdfBlob: Blob, fileName: string = "document.pdf") {
      //   const url = URL.createObjectURL(pdfBlob);
      //   const link = document.createElement("a");
      //   link.href = url;
      //   link.download = fileName;
      //   document.body.appendChild(link);
      //   link.click();
      //   document.body.removeChild(link);
      //   URL.revokeObjectURL(url);
      // }

      // downloadPdf(pdfBlob, "consimtamant.pdf");

      const emailHTML = `<p> Cursantul ${data.name}, cu email-ul ${data.email}, a semnat consimțământul. Si a primit fisierul atașat.</p>`

      await emailHandlerNetlify({
        user_email: data.email,
        subject: "Consimțământ Challenge Yourself",
        message: emailHTML,
        form: `data:application/pdf;base64,${base64pdf}`
      });

      await emailHandlerCPannel({
        to: data.email,
        subject: "Consimțământ Challenge Yourself",
        message: "Mulțumim ca ai completat acordul de participare și confidențialitate privind participarea la cursurile Buluc. Acest formular nu te obligă la continuarea cursului, dar este necesar si pentru participarea la prima ședință.",
        form: `data:application/pdf;base64,${base64pdf}`,
      });

      reset();
      signatureRef.current?.clear();
      setIsSubmitting(false);

    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SimpleCard>
        <h3 className="mb-2 font-bold text-center pb-10">Consimțământ</h3>

        <p className="mb-2">Subsemnatul/a:</p>
        <div className='flex gap-4 mb:flex-col'>
          <label className='w-1/3 mb:w-full'>
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

          <label className='w-1/3 mb:w-full'>
            <span>Adresa:*</span>
            <input
              type="text"
              size={25}
              {...register('address', {
                required: 'Adresa este obligatorie',
              })} />
            {errors.phone && <span className='error'>{errors.phone.message}</span>}
          </label>

          <label className='w-1/3 mb:w-full'>
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

          <label className='w-1/3 mb:w-full'>
            <span>Email*:</span>
            <input
              type="email"
              size={30}
              {...register('email', { required: 'Emailul este obligatoriu' })}
            />
            {errors.email && <span className='error'>{errors.email.message}</span>}
          </label>
        </div>
        <p className='mt-4'>în calitate de participant(ă) la cursul <b>Challenge Yourself - începători</b>, declar că datele de mai sus sunt corecte și complete și am acces la adresa de email.</p>

        <p className="mb-2">Prin acest acord, confirm că am citit, am înțeles și sunt de acord cu următoarele condiții de participare la curs:</p>
        <p className="font-bold mb-2">Abonament și plată</p>
        <ul className="list-star ml-6 space-y-2">
          <li> <b>Cursul Challenge Yourself, modulul de începători (3 luni) funcționează sub forma unui abonament în care ședințele pierdute de către participanți nu se pot recupera la o altǎ grupǎ.</b></li>
          <li>Asociația Buluc nu își asumă răspunderea pentru eventualele întârzieri sau anulări din motivele personale ale cursanților, iar absențele nu modifică valoarea abonamentului.</li>
          <li><b>Plata cursului se efectuează conform opțiunii de plată alese: lunar, la începutul fiecărei luni de curs, sau integral, la începutul modulului. Plata lunară acoperă cele 4 ședințe programate în luna respectivă, iar plata integrală acoperă toate cele 12 ședințe din cele 3 luni ale modulului.</b></li>
          <li>Dacă ai efectuat deja plata pentru una dintre cele două opțiuni de abonament (lunar sau întregul modul), suma achitată nu va putea fi rambursată, indiferent de circumstanțele care pot apărea ulterior.</li>
          <li>Dacă dorești să întrerupi definitiv participarea la curs sau știi că nu vei putea participa într-o anumită lună, te rugăm să ne anunți cu cel puțin 10 zile înainte de începerea lunii respective.</li>
          <li>Improshowul de la finalul modulului este o sedinta bonus la care participarea nu este obligatorie</li>
          <li>Data Improshow-ului poate suferi modificări în funcție de disponibilitatea spațiului, a sărbătorilor legale sau a altor situații neprevăzute.</li>
          <li>Pentru perioadele de sărbători (Crăciun, Anul Nou, Paște, etc.) programul cursurilor se poate modifica.</li>
          <li>Asociația Buluc își rezervă dreptul de a încheia participarea unui cursant în cazul unor comportamente sau situații care afectează în mod semnificativ buna desfășurare a cursului, a activităților sau a relației cu ceilalți participanți și traineri.</li>
          <li>Pentru plata serviciilor oferite de Asociația Buluc se poate emite factură, pe baza datelor necesare facturării furnizate de participant. Factura poate circula fără ștampilă și semnătură conform Legii 227/2015 privind Codul Fiscal, Art. 319.</li>
          <li>Opțiuni de plată a cursului:
            <div className="mt-2">
              <label className="flex flex-row mb-2">
                <input
                  type="radio"
                  value="1"
                  className="mr-2"
                  {...register('period', { required: 'Vă rugăm să selectați o variantă' })}
                />
                <span><b>VARIANTA 1</b> - PLATA LUNARĂ  <b>(479 lei/lună)</b></span>
              </label>
              <label className="flex flex-row mb-2">
                <input
                  type="radio"
                  value="2"
                  className="mr-2"
                  {...register('period', { required: 'Vă rugăm să selectați o variantă' })}
                />
                <span><b>VARIANTA 2</b> - PLATA ÎNTREGULUI MODUL <b>(1259 lei/modul 3 luni)</b></span>
              </label>
              {errors.period && <span className='error mt-2'>{errors.period.message}</span>}
				    </div>
          </li>
        </ul>
        <p className='font-thin'>*Opțiunea bifată ne ajută să știm pentru ce variantă de plată optezi inițial și poate fi schimbată ulterior.</p>

        <h4 className="mt-6 mb-2 font-semibold">Nota de informare cu privire la protecția datelor personale</h4>
        <p className="mb-2">Având în vedere consimțământul încheiat între părți, vă informăm următoarele: Datele cu caracter personal se vor prelucra în condițiile Regulamentului UE 2016/679 – privind protecția persoanelor fizice în ceea ce privește prelucrarea datelor cu caracter personal și privind libera circulație a acestor date.</p>
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
            {isSubmitting ? 'Se trimite...' : 'Trimite'}
          </button>
        </div>

      </SimpleCard>
    </form>
  );
}
