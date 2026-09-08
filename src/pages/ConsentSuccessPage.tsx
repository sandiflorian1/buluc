import MainLayout from '../components/layouts/MainLayout';
import { FadeInAnimation } from '../components/animations/Animations';

export default function ConsentSuccessPage() {

  return (
    <MainLayout>
      <FadeInAnimation className="container mt-20 mb:mt-10">
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 md:px-10 bg-white rounded-lg">
          <div className="mb-8 text-green-500">
            <svg 
              className="w-24 h-24 text-green-500 mx-auto" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
          </div>

          <h1 className="text-lg md:text-5xl font-bold mb-6 text-gray-800">
            Mulțumim!
          </h1>

          <p className="text-lg md:text-2xl text-gray-600 mb-4 max-w-2xl">
            Consimțământul tău a fost semnat cu succes.
          </p>

          <p className="text-lg text-gray-500 mb-8 max-w-2xl">
          Te așteptăm la prima ședință!
          </p>
        </div>
      </FadeInAnimation>
    </MainLayout>
  );
}
