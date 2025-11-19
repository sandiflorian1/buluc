import MainLayout from "../components/layouts/MainLayout"; 
import BlogCard from "../components/cards/BlogCard"; 
import IMAGES from "../assets/Images";
import { FadeInAnimation } from "../components/animations/Animations";

export default function Blog () {

  return (
    <MainLayout>
      <div className="container pt-20 mb:pt-10">
        <FadeInAnimation className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          {data.map((card) => (
            <BlogCard
              key={card.title} 
              data={card}
            />
            ))}
          
        </FadeInAnimation>
      </div>
    </MainLayout>
  );
}


const data = [
  {
    title: " Improvizație și joacă la Buluc: cum s‑a născut un spațiu creativ în București",
    text: "Ziua lucrează în companii, în ateliere de olărit și prin departamente de marketing sau de vânzări. În seara asta, sunt Cartoon Network, Realitatea TV, Taraf sau Trinitas, posturi TV într-un show de improvizație. Show-ul e absolvirea după trei luni de cursuri la Buluc, o asociație culturală care a pornit în 2021 ca o companie independentă de artiști.",
    imgURL: IMAGES.articol6,
    cardClass: 'w-full mb:p-0 mb:mb-10',
    link: 'https://www.revistacariere.ro/lifestyle/pauza-de-corporate/improvizatie-si-joaca-la-buluc-cum-sa-nascut-un-spatiu-creativ-in-bucuresti',
    externalLink: true,
  },
  {
    title: "„Acasă la Buluc” – Povestea actorului Robert Ciupitu și a antreprenoriatului creativ care aduce oamenii împreună",
    text: "Două lucruri în care cred cu tărie sunt perseverența și comunicarea sinceră. Mi se pare că, indiferent de cât de provocatoare devine o situație, dacă nu renunți ușor și știi să vorbești deschis cu oamenii din jurul tău, lucrurile încep să se așeze.",
    imgURL: IMAGES.articol2,
    cardClass: 'w-full mb:p-0',
    link: 'https://careers-business.ro/robert-ciupitu-actor-si-cofondator-buluc-antreprenoriat-cultural/',
    externalLink: true,
  },
  {
    title: "Asociația Buluc | o inițiativă menită să adune buluc oamenii la proiectele artiștilor independenți",
    text: "Poate sună clișeic, dar noi am înțeles că este foarte important să-ți păstrezi pe tot parcursul călătoriei tale curiozitatea și entuziasmul cu care ai pornit la drum. Credem că cele două fac diferența într-un proces creativ. Pe lângă asta, este foarte important să fii deschis către conexiuni, către oameni și să nu rămâi în bula ta: ar putea să te surprindă într-un sens pozitiv.",
    imgURL: IMAGES.articol1,
    cardClass: 'w-full mb:p-0 mb:mb-10',
    link: 'https://www.curatorialist.ro/asociatia-buluc-o-initiativa-menita-sa-adune-buluc-oamenii-la-proiectele-artistilor-independenti/',
    externalLink: true,
  },
  {
    title: "[Povești de bine] Buluc de tineri care vor să facă educație prin artă",
    text: "Când s-au închis ușile teatrelor și s-au tras cortinele peste scenele goale în pandemie, când nimic nu se mai întâmpla în lumea teatrului, un trio tineresc, format din doi actori și un creator de conținut, a înființat o asociație.",
    imgURL: IMAGES.team,
    cardClass: 'w-full mb:p-0',
    link: 'https://www.iqads.ro/articol/61717/povesti-de-bine-buluc-de-tineri-care-vor-sa-faca-educatie-prin-arta',
    externalLink: true,
  },
  {
    title: "The creARTive generation - from passion to profession",
    text: "Te-ai trezit într-o dimineață și ai realizat că pasiunea ta trebuie să devină profesie. Ti-ai dat seama că ceea ce iubești să faci și ce te menține fericit este exact ce te definește pe tine ca adolescent și îți oferă, totodată un sentiment de împlinire. Dar cum faci să transformi pasiunea în profesie?",
    imgURL: IMAGES.articol4,
    cardClass: 'w-full mb:p-0',
    link: 'https://www.iqads.ro/articol/66187/the-creartive-generation-from-passion-to-profession',
    externalLink: true,
  },
  {
    title: "Să Luăm Bullying-ul la Roast",
    text: "Compania independentă de artiști Buluc a pus bazele unui proiect educațional care readuce în discuție acest fenomen foarte cunoscut, dar mult prea puțin înțeles sau de cele mai multe ori confundat cu alte tipuri de comportament.",
    imgURL: IMAGES.bulling,
    cardClass: 'w-full mb:p-0',
    link: 'https://www.iqads.ro/articol/61479/sa-luam-bullying-ul-la-roast',
    externalLink: true,
  },
 
  // {
  //   title: "Card with an image",
  //   text: "This is a little bit better of a card!",
  //   imgURL: "https://images.unsplash.com/photo-1605811792344-5aa22c4faa37?q=80&w=2736&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   cardClass: 'w-1/3 mb:w-full',
  // },
  // {
  //   title: "Card with an image1",
  //   text: "This is a little bit better of a card!",
  //   imgURL: "https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80",
  //   cardClass: 'w-1/3 mb:w-full',
  // },
  // {
  //   title: "Card with an image2",
  //   text: "This is a little bit better of a card!",
  //   imgURL: "https://images.unsplash.com/photo-1605811792344-5aa22c4faa37?q=80&w=2736&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   cardClass: 'w-1/3 mb:w-full',
  // },
  // {
  //   title: "Card with an image3",
  //   text: "This is a little bit",
  //   imgURL: "https://images.unsplash.com/photo-1459478309853-2c33a60058e7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   cardClass: 'w-2/3 mb:w-full',
  // },
  // {
  //   title: "Card with an image4",
  //   text: "This is a little bit better",
  //   imgURL: "https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80",
  //   cardClass: 'w-1/3 mb:w-full',
  // },
]