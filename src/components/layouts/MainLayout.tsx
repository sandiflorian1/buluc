import Footer from '../Footer';
import SmallNavbar from "../SmallNavbar";
import Title from "./Title";

export default function MainLayout ({ children, title }: any) {

  return (
    <div className='h-screen overflow-y-scroll overflow-x-hidden'>
      <SmallNavbar />

      <section id="title">
          <div 
            className="w-full flex h-48 sm:h-64 md:h-96 bg-bottom bg-cover bg-no-repeat" 
            style={{ backgroundImage: "url(https://buluc.org/wp-content/themes/Buluc/assets/graphics/spectacole-background.jpg)" }}
          >
             <Title title={title} />
          </div>
      </section>

      <div className='w-screen flex justify-center'>
        <div className='container px-[10%]'>
          {children}
        </div>
      </div>

      <Footer />
    </div>
  );
}
