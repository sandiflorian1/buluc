import MainLayout from "../components/layouts/MainLayout"; 
import BlogCard from "../components/cards/BlogCard"; 

export default function Blog () {

  return (
    <MainLayout title="blog">
      <div className="container mx-auto w-50">
        <div className="flex flex-wrap justify-center">
          {data.map((card) => (
            <BlogCard 
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
    title: "O conexiune",
    text: "Într-o seară, dintr-o idee și pentru că orice se mutase în online, pe platforma Zoom, am decis să facem ceva autentic și valoros pentru adolescenți.",
    imgURL: "https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80",
    cardClass: 'w-1/3 mb:w-full ',
  },
  {
    title: "Bună dimineața la cafeluță! - cu Buluc",
    text: "Bună dimineața la cafeluță! Azi avem un invitat special, nou în domeniul artistic, care abia așteaptă să ne povestească despre planurile lui de viitor. Chiar dacă are doar câteva luni, Buluc crește foarte repede, este plin de energie și dornic să ne vorbească despre pasiunile sale, despre prietenii ce i-au fost aproape de mic copil, despre ceea ce îl motivează să se dezvolte.",
    imgURL: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=3013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cardClass: 'w-2/3 mb:w-full',
  },
  {
    title: "Card with an image",
    text: "This is a little bit better of a card!",
    imgURL: "https://images.unsplash.com/photo-1605811792344-5aa22c4faa37?q=80&w=2736&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cardClass: 'w-1/3 mb:w-full',
  },
  {
    title: "Card with an image1",
    text: "This is a little bit better of a card!",
    imgURL: "https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80",
    cardClass: 'w-1/3 mb:w-full',
  },
  {
    title: "Card with an image",
    text: "This is a little bit better of a card!",
    imgURL: "https://images.unsplash.com/photo-1605811792344-5aa22c4faa37?q=80&w=2736&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cardClass: 'w-1/3 mb:w-full',
  },
  {
    title: "Card with an image",
    text: "This is a little bit",
    imgURL: "https://images.unsplash.com/photo-1459478309853-2c33a60058e7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cardClass: 'w-2/3 mb:w-full',
  },
  {
    title: "Card with an image",
    text: "This is a little bit better",
    imgURL: "https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80",
    cardClass: 'w-1/3 mb:w-full',
  },
]