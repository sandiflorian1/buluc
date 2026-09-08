import MainLayout from '../components/layouts/MainLayout';
import { FadeInAnimation } from '../components/animations/Animations';

export default function ConsentErrorPage() {

  return (
    <MainLayout>
      <FadeInAnimation className="container mt-20 mb:mt-10">
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 bg-white rounded-lg">
          <div className="mb-8">
            <svg 
              className="w-24 h-24 text-red-500 mx-auto" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
              />
            </svg>
          </div>

          <h1 className="text-lg md:text-5xl font-bold mb-6 text-gray-800">
            Ne pare rău!
          </h1>

          <p className="text-lg md:text-2xl text-gray-600 mb-4 max-w-2xl">
            Consimțământul nu a putut fi salvat cu succes.
          </p>

          <p className="text-lg text-gray-500 mb-8 max-w-2xl">
            Vă rugăm să încercați mai târziu.
          </p>
        </div>
      </FadeInAnimation>
    </MainLayout>
  );
}
