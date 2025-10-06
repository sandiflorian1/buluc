import React, { useMemo, useRef, useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import MainLayout from '../components/layouts/MainLayout';
import SimpleCard from "../components/cards/SimpleCard";

type FaqItem = {
  question: string;
  answer: React.ReactNode;
};

type FaqSection = {
  title: string;
  items: FaqItem[];
};

const useMeasuredMaxHeight = (open: boolean) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [maxHeight, setMaxHeight] = useState<string>('0px');

  useEffect(() => {
    if (open) {
      const contentHeight = ref.current?.scrollHeight ?? 0;
      setMaxHeight(`${contentHeight}px`);
      // Recalculate in case of late-loading fonts or images
      const id = requestAnimationFrame(() => {
        if (ref.current) setMaxHeight(`${ref.current.scrollHeight}px`);
      });
      return () => cancelAnimationFrame(id);
    } else {
      setMaxHeight('0px');
    }
  }, [open]);

  useEffect(() => {
    const handleResize = () => {
      if (open && ref.current) {
        setMaxHeight(`${ref.current.scrollHeight}px`);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [open]);

  return { ref, style: { maxHeight } };
};

const FaqItemRow: React.FC<FaqItem> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  const { ref, style } = useMeasuredMaxHeight(open);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full flex items-center justify-between text-left gap-4 py-4 bg-transparent border-0 font-inherit cursor-pointer"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="text-lg md:text-xl font-semibold text-gray-800">{question}</span>
        <FaChevronDown
          className={`flex-shrink-0 w-5 h-5 text-gray-500 transition-transform duration-200 ${open ? 'transform rotate-180' : ''}`}
          aria-hidden
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={style}
      >
        <div ref={ref} className="pb-4 text-gray-700 text-base md:text-lg">
          {typeof answer === 'string' ? <p className="mb-2">{answer}</p> : answer}
        </div>
      </div>
    </div>
  );
};

const Faq: React.FC = () => {
  const sections: FaqSection[] = useMemo(() => [
    {
      title: 'Structura cursului',
      items: [
        {
          question: 'Cate sedinte sunt intr-o luna?',
          answer: 'Cursul are patru sedinte pe luna, cate una pe saptamana.'
        },
        {
          question: 'Pot recupera sedintele pierdute?',
          answer: 'Nu, sedintele pierdute nu se pot recupera in alta grupa. Cursul functioneaza sub forma unui abonament.'
        },
        {
          question: 'Ce se intampla dupa modulul de incepatori?',
          answer: (
            <>
              <p className="mb-2">
                Dupa finalizarea modulului de incepatori, grupa ta poate continua cu modulul avansati. Daca numarul de inscrisi permite,
                grupa continua in aceeasi formula. Daca nu, te inscrii intr-o grupa existenta care se afla la acelasi nivel cu tine sau pe
                lista de asteptare pentru formarea unei grupe noi.
              </p>
              <p>De obicei, grupele merg in formula existenta catre avansati pentru ca se inscriu toti participantii.</p>
            </>
          )
        },
        {
          question: 'Trebuie sa am experienta pentru a participa?',
          answer: 'Nu, modulul de incepatori este gandit pentru orice persoana dornica de joaca, relaxare si deconectare.'
        },
        {
          question: 'Ce varsta trebuie sa am pentru a participa?',
          answer: 'Minim 18 ani.'
        },
        {
          question: 'Ma pot inscrie direct la modulul de avansati?',
          answer: 'Nu, pentru a ajunge la clasele de avansati trebuie sa parcurgi mai intai modulul de incepatori.'
        },
      ]
    },
    {
      title: 'Plata cursului',
      items: [
        {
          question: 'Cum se face plata cursului?',
          answer: 'Plata pentru luna curenta se achita la prima sedinta, conform variantei alese si calendarului intern.'
        },
        {
          question: 'Trebuie sa platesc tot modulul dintr-o data?',
          answer: 'Cursul poate fi achitat in doua variante: lunar: in valoare de 449 lei, sau integral, modul complet: in valoare de 1149 lei.'
        },
        {
          question: 'Daca aleg varianta 2 (intregul modul) pot sa platesc in mai multe transe?',
          answer: 'Nu, plata integrala se face o singura data.'
        },
        {
          question: 'Cum imi rezerv locul la curs?',
          answer: 'Locul se rezerva prin achitarea unui avans nerambursabil in valoare de 150 lei, care acopera prima sedinta. Aceasta suma se scade automat din plata lunii sau a intregului modul.'
        },
        {
          question: 'Exista reduceri pentru plata integrala a modulului?',
          answer: 'Da, plata integrala (varianta 2) include o reducere de 15%.'
        },
        {
          question: 'Pot achita doar sedintele la care stiu ca vin?',
          answer: 'Nu, plata cursului se face lunar sau integral, nu per sedinta.'
        },
      ]
    },
    {
      title: 'Situatii speciale',
      items: [
        {
          question: 'Ce fac daca m-am inscris, am achitat cursul si nu mai pot ajunge? Primesc banii inapoi?',
          answer: 'Daca ai efectuat plata pentru oricare dintre optiunile de abonament (lunar sau integral), suma achitata nu poate fi rambursata, indiferent de circumstante.'
        },
        {
          question: 'Participarea la Improshow-ul final este obligatorie?',
          answer: 'Nu.'
        },
      ]
    }
  ], []);

  return (
    <MainLayout title="FAQ – Întrebări frecvente" className="mb:text-center">
      <div className="max-w-4xl mx-auto py-8 md:py-12">
        {sections.map((section) => (
           <SimpleCard cardClass="p-4 mb-10">
          <section key={section.title} className="mb-8">
            <h4 className=" font-bold text-gray-800 mb-4 pb-4">{section.title}</h4>
            <div className="border-t border-gray-200">
              {section.items.map((item) => (
                <FaqItemRow key={item.question} {...item} />
              ))}
            </div>
          </section>
          </SimpleCard>
        ))}
      </div>
    </MainLayout>
  );
};

export default Faq;
