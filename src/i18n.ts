import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // Detectează limba utilizatorului
  .use(LanguageDetector)
  // Pasează instanța i18n către react-i18next
  .use(initReactI18next)
  // Inițializează i18next
  .init({
    debug: true, // Activează modul debug pentru a vedea loguri în consolă
    fallbackLng: 'ro', // Limba de rezervă, dacă limba detectată nu este disponibilă
    interpolation: {
      escapeValue: false, // Nu este necesar pentru React, deoarece face deja escape la valori
    },
    resources: {
      // Aici vom adăuga traducerile
      en: {
        translation: {
          office: {
            title: "@The Office",
            intro: "<strong>Challenge Yourself @The Office</strong> is designed around the core principles of personal and professional development, supporting both individual performance and overall organizational success. This interactive and engaging experience encourages team members to grow through creative theatrical methods that inspire confidence, communication, and adaptability.",
            workshopDescription: "During this dynamic and engaging workshop, participants will be guided through a series of theatrical exercises and activities that challenge them to explore and push beyond their limits, improve their communication skills, and strengthen their self-confidence.",
            objectivesTitle: "Objectives:",
            objectives: [
              "Explore and develop communication skills and teamwork abilities",
              "Improve adaptability and problem-solving skills in a professional context",
              "Stimulate creativity and innovative thinking when addressing workplace challenges",
              "Develop empathy and leadership skills",
              "Increase self-confidence and enhance stress management in presentations or public-interaction situations"
            ],
            benefitsTitle: "Benefits:",
            benefits: [
              "More confident and motivated employees, capable of approaching professional challenges with creativity and assurance",
              "An improved organizational culture based on effective communication and collaboration",
              "Enhanced communication skills",
              "Increased self-confidence",
              "Improved adaptability",
              "Strengthened teamwork abilities",
            ],
            trainersTitle: "Trainers",
            trainersDescription: "Our team is composed of professional actors and personal development specialists with extensive experience in facilitating corporate workshops. This workshop is delivered together with the Buluc team trainers—graduates of the National University of Theatre and Film 'I.L. Caragiale' in Bucharest, with over 5 years of experience in personal development courses using theatrical techniques for adults, as well as for teenagers and children.",
            locationTitle: "Where the magic happens",
            locationDescription: "We adapt to your company’s needs. Choose the option that best fits your team.",
            location1Title: "in our living room",
            location1Description: "on Madrid Street no. 4, inside a 1920s house in the Dorobanți neighborhood, a creative and versatile space, complete with an outdoor terrace where we gather every evening",
            location2Title: "your living room",
            location2Description: "at your office, hosted right within your company, in a familiar environment. A conference room or an open space large enough to allow movement and interaction among participants",
            location3Title: "during a TEAMBUILDING",
            location3Description: "in a space that inspires and supports true relaxation and creative flow",
            contactWhatsapp: "Write to us on WhatsApp",
            contactEmail: "Drop us an email"
          }
        }
      },
      ro: {
        translation: {
          office: {
            title: "@The Office",
            intro: "<strong>Challenge Yourself @The Office</strong> are la bază dezvoltarea personală și profesională a angajaților, contribuind la îmbunătățirea performanței individuale și a succesului organizațional. O experiență interactivă și provocatoare, menită să încurajeze creșterea personală și profesională a membrilor unei echipe prin intermediul tehnicilor teatrale.",
            workshopDescription: "În cadrul acestui workshop dinamic și interactiv, participanții vor fi conduși printr-o serie de exerciții și activități teatrale care îi vor provoca să-și exploreze și să-și depășească limitele, să-și îmbunătățească abilitățile de comunicare și să-și dezvolte încrederea în sine.",
            objectivesTitle: "Obiective:",
            objectives: [
              "Explorarea și dezvoltarea abilităților de comunicare și colaborare în echipă",
              "Îmbunătățirea capacității de adaptare și rezolvare a problemelor în contextul profesional",
              "Stimularea creativității și a gândirii inovatoare în soluționarea provocărilor de la locul de muncă",
              "Dezvoltarea empatiei și a abilităților de leadership",
              "Creșterea încrederii în sine și gestionarea stresului în situații de prezentare sau de interacțiune în public"
            ],
            benefitsTitle: "Beneficii:",
            benefits: [
              "Angajați mai încrezători și mai motivați, capabili să abordeze provocările profesionale cu creativitate și încredere",
              "O cultură organizațională îmbunătățită, bazată pe comunicare eficientă și colaborare",
              "Îmbunătățirea abilităților de comunicare",
              "Creșterea coeziunii echipei și un mediu de lucru pozitiv",
              "Dezvoltarea abilităților de leadership și public speaking"
            ],
            trainersTitle: "Traineri",
            trainersDescription: "Echipa noastră este formată din actori profesioniști și specialiști în dezvoltare personală cu o vastă experiență în facilitarea workshopurilor corporate. Acest workshop se întâmplă alături de trainerii echipei Buluc care au absolvit Universitatea Națională de Artă Teatrală și Cinematografică 'I.L. Caragiale', București şi au o experiență de mai bine de 5 ani în cadrul cursurilor de dezvoltare personală prin tehnici teatrale pentru adulţi, dar şi pentru adolescenți și copii.",
            locationTitle: "Unde se întâmplă?",
            locationDescription: "Ne adaptăm în funcție de nevoile companiei tale. Alege varianta care crezi că ți se potrivește.",
            location1Title: "la noi ACASĂ",
            location1Description: "în sufrageria de pe str. Madrid 4, într-o casă din 1920 din zona Dorobanți. Un spațiu creativ si versatil, ce dispune şi de o terasa exterioară unde ne adunăm buluc seară de seară.",
            location2Title: "la tine ACASĂ",
            location2Description: "la birou, găzduit chiar în cadrul companiei, într-un mediu familiar. O sală de conferințe sau un spațiu deschis suficient de mare pentru a permite mișcarea și interacțiunea participanților.",
            location3Title: "în TEAMBUILDING",
            location3Description: "într-un loc care să ofere inspirație facilitând astfel un mediu propice pentru deconectare și creativitate",
            contactWhatsapp: "Scrie-ne pe whatsapp",
            contactEmail: "Trimite-ne un email"
          }
        }
      }
    }
  });

export default i18n;
