import { CiCircleCheck } from 'react-icons/ci';
import MainLayout from '../components/layouts/MainLayout';
import { FadeInAnimation } from '../components/animations/Animations';

export default function NewsletterSuccessPage() {

  return (
    <MainLayout>
      <FadeInAnimation className="container mt-20 mb:mt-10">
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 md:px-10 bg-white rounded-lg pt-4">
          <div className="mb-8">
            <CiCircleCheck className="w-24 h-24 mx-auto" />
          </div>

          <h1 className="text-lg md:text-5xl font-bold mb-6 text-gray-800">
            Bine ai venit în comunitatea Buluc!
          </h1>

          <p className="text-lg md:text-2xl text-gray-600 mb-4 max-w-2xl">
            Fii cu ochii pe inbox pentru vești din sufragerie.
          </p>
        </div>
      </FadeInAnimation>
    </MainLayout>
  );
}
