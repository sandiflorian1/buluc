import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaTimes } from 'react-icons/fa';
import NewsletterForm from './form/NewsletterForm';
import IMAGES from '../assets/Images';

const hideOn = ['/newsletter-succes', '/consimtamant', '/consimtamant-success'];

const NewsletterPopup: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const footer = document.querySelector('.footer');
    if (!footer) return;
    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0.05 }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, [pathname]);

  if (hideOn.includes(pathname)) return null;

  return (
    <>
      {!open && !footerVisible && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-red text-white px-5 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
          aria-label="Deschide formularul de newsletter"
        >
          <FaEnvelope />
          <span className="text-sm mb:text-[0.75rem] font-semibold tracking-wider">NEWSLETTER</span>
        </button>
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            key="newsletter-overlay"
            className="fixed inset-0 z-40 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
        )}
        {open && (
          <motion.div
            key="newsletter-panel"
            className="fixed inset-x-0 bottom-0 z-50 flex justify-center"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: 'easeOut' }}
          >
            <div className="relative w-full max-w-lg">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center overflow-hidden z-10">
                <img src={IMAGES.logo} alt="Buluc" className="w-14 h-14 object-contain" />
              </div>
              <div
                className="newsletter-popup bg-red text-white px-8 pt-16 pb-10"
                style={{ borderRadius: '200% 200% 0 0' }}
              >
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-8 right-8 text-white/70 hover:text-white"
                  aria-label="Închide"
                >
                  <FaTimes size={22} />
                </button>
                <h5 className="my-2 text-center">ABONEAZĂ-TE LA NEWSLETTER</h5>
                <p className="text-[1.2vw] mb:text-[0.85rem] mb-4 text-center">Noutăți despre cursuri, ateliere și evenimente Buluc.</p>
                <NewsletterForm hideTitle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NewsletterPopup;
