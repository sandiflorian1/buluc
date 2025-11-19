import { Link } from 'react-router-dom';
import MainLayout from "../components/layouts/MainLayout";
import IMAGES from "../assets/Images";
import { FadeInAnimation } from "../components/animations/Animations";

export interface IExperienceProps { }
const Experience: React.FC = () => {

  return (
    <MainLayout noPadding>
      <FadeInAnimation>
        <img src={IMAGES.experienceSoon} className="w-[100vw]" />
        {/* <ScrollIndicator /> */}

        <div className="flex flex-col items-center gap-5 py-10">
          <h5 className='text-center'>Vezi cum a fost la editile anterioare</h5>
          <div className="w-full flex justify-center gap-5">
            <div className="bg-orange rounded-lg py-2 px-4">
              <Link to="/experience" className='text-white'>Editia 1</Link>
            </div>

            <div className="bg-red rounded-lg py-2 px-4">
              <Link to="/ChyExperience2" className='text-white'>Editia 2</Link>
            </div>
          </div>
        </div>
       
      </FadeInAnimation>
    </MainLayout>
  );
};

export default Experience;