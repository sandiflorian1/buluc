import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { FaChevronDown } from 'react-icons/fa';
const SCROLL_THRESHOLD = 20;
const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const scrollableElement = document.getElementById('scrolled');
    const handleScroll = () => {
      const currentScroll = scrollableElement?.scrollTop || 0;
      const isAtTopFirstTime = currentScroll < SCROLL_THRESHOLD && isVisible;
      if (currentScroll >= SCROLL_THRESHOLD && !isAtTopFirstTime) {
        gsap.to('.scroll-indicator', {
          opacity: 0,
          duration: 1,
        }).eventCallback('onComplete', () => {setIsVisible(false);});
      }
    };

    scrollableElement?.addEventListener('scroll', handleScroll);
    return () => {
      gsap.killTweensOf('.scroll-indicator');
      scrollableElement?.removeEventListener('scroll', handleScroll)
    }
  }, []);

  useEffect(() => {
    gsap.to('.scroll-indicator', {
      y: 10,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 text-orange">
      <FaChevronDown size={24} className="scroll-indicator" />
    </div>
  );
};

export default ScrollIndicator;
