import MainLayout from "../components/layouts/MainLayout";
import Slider from '../components/Slider';
export interface ISectacoleProps {
} 

export default function Sectacole(props: ISectacoleProps) {
  return (
    <MainLayout title="în sufragerie">
      <div className="pb-20" style={{ cursor: 'pointer'}}>
        <Slider slides={slides} />
      </div>
    </MainLayout>
  );
}

const slides = [
  {
    number: 1,
    title: 'din intamplare',
    description: 'Descriere pentru spectacol',
    imageUrl: 'src/assets/images/spectacol2.jpg',
    goToLink: '/spectacol-dinIntamplare',
  },

  // {
  //   number: 2,
  //   title: 'The Producers',
  //   description: 'The top apple producers around the world are China, United States, Turkey, Poland and Italy.',
  //   imageUrl: 'https://images.unsplash.com/photo-1458011170811-0c83ce240f99?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8b4e45d40741267302ef75900c03b756&auto=format&fit=crop&w=800&q=90',
  // },
  
];
