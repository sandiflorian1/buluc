import Footer from '../Footer';
import SmallNavbar from "../SmallNavbar";

export default function MainLayout ({ children }: any) {

  return (
    <div className='h-screen'>
      <SmallNavbar />

      <div className='w-screen flex justify-center'>
        <div className='container'>
          {children}
        </div>
      </div>

      <Footer />
    </div>
  );
}
