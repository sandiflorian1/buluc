import React from 'react';
import { Link } from 'react-router-dom';

interface Edition {
  title: string;
  subtitle: string;
  route: string;
}

const editions: Edition[] = [
  {
    title: "Editia #3",
    subtitle: "Experience V3",
    route: "/ChyExperience3"
  },
  {
    title: "Editia #2",
    subtitle: "Experience V2",
    route: "/ChyExperience2"
  },
  {
    title: "Editia #1",
    subtitle: "Experience V1",
    route: "/experience"
  },
];

interface EditionsCarouselProps {
  currentPage: string;
}

const EditionsCarousel: React.FC<EditionsCarouselProps> = ({ currentPage }) => {
  const currentIndex = editions.findIndex(edition => edition.route === currentPage);

  const previousEdition = currentIndex > 0 ? editions[currentIndex - 1] : null;
  const nextEdition = currentIndex < editions.length - 1 ? editions[currentIndex + 1] : null;

  return (
    <div className="w-full bg-white py-10 px-4">
      <div className="flex items-center justify-between">
        {/* Previous Button */}
        {previousEdition && (
          <Link to={previousEdition.route} className="flex items-center gap-2 text-gray-800 hover:text-gray-600 transition-colors">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <div>
              <p className="text-gray-500">Vezi</p>
              <h5 className="font-bold">{previousEdition.title}</h5>
            </div>
          </Link>
        )}

        {/* Current Edition Info */}
        <div className="flex-1 text-center">
          {/* <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Challenge Yourself
          </h2> */}
          {/* <p className="text-gray-600 md:text-base mt-1">
            {editions[currentIndex]?.subtitle}
          </p> */}
        </div>

        {/* Next Button */}
        {nextEdition && (
          <Link to={nextEdition.route} className="flex items-center gap-2 text-gray-800 hover:text-gray-600 transition-colors">
            <div className="text-right">
              <p className="text-gray-500">Vezi</p>
              <h5 className="font-bold">{nextEdition.title}</h5>
            </div>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
};

export default EditionsCarousel;
