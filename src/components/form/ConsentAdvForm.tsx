import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
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
  phone: string;
  period: '1' | '2';
}

export default function ConsentAdvForm() {
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
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

    //   function downloadPdf(pdfBlob: Blob, fileName: string = "document.pdf") {
    //     const url = URL.createObjectURL(pdfBlob);
    //     const link = document.createElement("a");
    //     link.href = url;
    //     link.download = fileName;
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    //     URL.revokeObjectURL(url);
    //   }

    //   downloadPdf(pdfBlob, "consimtamant-adv.pdf");

      const emailHTML = `<p> Cursantul ${data.name}, cu email-ul ${data.email}, a semnat consimțământul. Si a primit fisierul atașat.</p>`

      await emailHandlerNetlify({
        user_email: data.email,
        subject: "Consimțământ Challenge Yourself Avansati",
        message: emailHTML,
        form: `data:application/pdf;base64,${base64pdf}`
      });

      await emailHandlerCPannel({
        to: data.email,
        subject: "Consimțământ Challenge Yourself Avansati",
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
        <h3 className="mb-2 font-bold text-center pb-10">Consimțământ Avansați</h3>

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
        <p className='mt-4'>în calitate de participant(ă) la cursul <b>Challenge Yourself - avansați</b>, declar că datele de mai sus sunt corecte și complete și am acces la adresa de email.</p>

        <p className="mb-2">Prin această anexă declar pe propria răspundere că am luat la cunoștință și sunt de acord cu următoarele:</p>
        <ul className="list-star ml-6 space-y-2">
          <li> <b>Cursul Challenge Yourself - avansați</b>  (curs cu frecvență lunară - 4 ședințe/lună), funcționează sub forma unui abonament în care ședințele pierdute de către participanți <b>nu se pot recupera.</b> Asociația Buluc nu își asumă răspunderea pentru eventualele întârzieri sau anulări din motivele personale ale cursanților.</li>
          <li> Dacă ai efectuat deja plata pentru abonamentul cursului, suma achitată nu va putea fi rambursată, indiferent de circumstanțele care pot apărea ulterior. </li>
          <li><b>Plata</b> se va face la prima ședință din fiecare <b>lună nouă de curs, nu la prima ședință la care ajunge cursantul</b> - prin transfer bancar direct în contul asociației Buluc sau numerar la locația noastră. Modulul de avansați se achită lunar - 449 lei / lună.</li>
          <li>Se va emite factură aferentă serviciilor oferite de Asociația Buluc pe baza datelor de identificare pe care ni le veți comunica. Factura poate circula fără ștampilă și semnătură conform Legii 227/2015 privind Codul Fiscal, Art. 319.</li>
          <li>Cursul se desfășoară pe perioadă nedeterminată, așadar <b> întreruperea cursului se anunță cu cel puțin 14 de zile înainte de următoarea lună.</b></li>
          <li>În cazul în care un participant nu poate ajunge într-o anumită lună de curs, el se preocupă să anunțe trainerii cu minim 14 zile înainte de data stabilită. Mai puțin în cazul situațiilor neprevăzute.</li>
          <li><b>Fiecare cursant are dreptul să lipsească doar 5 luni (din 10) și nu mai mult de 2 luni consecutive.</b> În felul ăsta se asigură o desfășurare mai eficientă a grupei.</li>
          <li><b>Improshow-urile sau producțiile</b> BULUC funcționează pe bază de <b>donație minimă recomandată sau liberă</b>, astfel un anumit procent din donații se va duce către locația care găzduiește evenimentul, dar și catre Buluc (foto, organizare), iar restul donațiilor se duc către performeri.</li>
          <li>În cazul închirierii unei săli de teatru/spectacol pentru realizarea unui spectacol (producție), prețul chiriei este susținut integral de participanții implicați in producția respectivă, incluzând toate serviciile oferite de spațiu pentru o bună desfășurare a spectacolului.</li>
          <li>Participarea la improshow-urile și producțiile Buluc <b>nu</b> este obligatorie și se va face în funcție și de prezența la curs.</li>
          <li>Structura cursului, se poate modifica în funcție de dinamica fiecarei grupe.</li>
          <li>În cazul unor probleme sau neînțelegeri, Asociația Buluc își rezervă dreptul de a opri colaborarea cu orice participant.</li>
          <li>Pentru perioadele de sărbători (Crăciun, Anul Nou, Paște, etc.) programul cursurilor se poate modifica în funcție de calendarul fiecărui an.</li>
        </ul>

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
