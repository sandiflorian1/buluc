import MainLayout from "../components/layouts/MainLayout"; 
import BlogCard from "../components/cards/BlogCard"; 
import IMAGES from "../assets/Images";

export default function Blog () {

  return (
    <MainLayout>
      <div className="container mx-auto w-50 py-20">
        <div className="flex flex-wrap justify-center">
          {data.map((card) => (
            <BlogCard
              key={card.title} 
              data={card}
            />
            ))}
          
        </div>
      </div>
    </MainLayout>
  );
}


const data = [
  {
    title: "Început de Buluc",
    text: "Oamenii: Hai să facem cunoștință! Buluc: sunt o companie independentă de artiști înființată în anul 2021, care își propune să activeze în domeniul artistic atât prin producții teatrale cât și prin activități ce presupun dezvoltarea personală și educația prin artă.",
    imgURL: IMAGES.people,
    cardClass: 'w-2/3 mb:w-full',
    link: '/gazeta-buna-dimineata-la-cafeluta',
  },
  {
    title: "Zoomtalks",
    text: "Zoomtalks este un proiect ce își propune să creeze cât mai multe conexiuni între generații.",
    imgURL: IMAGES.zoomtalks,
    cardClass: 'w-1/3 mb:w-full ',
    link: '/gazeta-zoomtalks',
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