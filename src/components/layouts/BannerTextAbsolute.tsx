import "../../css/banner-text-absolute.css";
import { motion, useInView } from "framer-motion";
import { useRef } from 'react';

export default function BannerTextAbsolute ({ imageURL, title, children, direction, className }: any) {
  const ref = useRef(null);
           const isInView = useInView(ref, { once: true, amount: 0.1 });
           const isMobile = window.matchMedia("(max-width: 768px)").matches;
           const cardVariants = {
            hidden: {
              opacity: 0,
              ...!isMobile && { x: direction === 'right' ? 500 : -500 },
            },
            visible: {
              opacity: 1,
              ...!isMobile && { x: 0 },
              transition: {
                delay: 0.2,
                duration: 0.5,
              },
            },
          };
  return (
    <motion.div
      ref={ref} 
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`banner-text-absolute ${className}`} 
    >
      {direction === 'right' && (
         <div className={`image ${direction}`} style={{ backgroundImage: `url(${imageURL})` }}></div>
      )}

      <motion.div 
        className={`text-wrapper ${direction}`}
        variants={cardVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="text">
          <h4 className="title pb-4">
              {title}
          </h4>

          {children}
        </div>
      </motion.div>

      {direction === 'left' && (
        <div className={`image ${direction}`} style={{ backgroundImage: `url(${imageURL})` }}></div>
      )}
    </motion.div>
    );
  }
  