import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from 'react';

const FadeInAnimation = ({ children, className, ...props }: any) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

const FadeInViewPortAnimation = ({ children, className, ...props }: any) => {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        {...props}
      >
        {children}
      </motion.div>
    );
  };
   
const ScaleViewPortAnimation = ({ children, className, ...props }: any) => {
  return (
    <motion.div
      className={className}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

const ScaleAnimation = ({ children, className, ...props }: any) => {
  return (
    <motion.div
      className={className}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

const SlideYViewPortAnimation = ({ children, className, direction, ...props }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const cardVariants = {
    hidden: {
      opacity: 0,
      ...{ y: direction === 'up' ? 300 : -300 },
    },
    visible: {
      opacity: 1,
      ...{ y: 0 },
      transition: {
        delay: 0.2,
        duration: 0.5,
      },
    },
  };
    return (
      <motion.div
        className={className}
        ref={ref}
        variants={cardVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        {...props}
      >
        {children}
      </motion.div>
    );
  };

  const SlideXViewPortAnimation = ({ children, className, direction, ...props }: any) => {
    const ref = useRef(null);
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const isInView = useInView(ref, { once: true, amount: 1 });
    const cardVariants = {
      hidden: {
        opacity: 0,
        ...{ x: direction === 'right' ? 300 : -300 },
      },
      visible: {
        opacity: 1,
        ...{ x: 0 },
        transition: {
          delay: 0.2,
          duration: 0.5,
        },
      },
    };
      return (
        isMobile 
        ? (<div className={className}>{children}</div>)
        : (<motion.div
          className={className}
          ref={ref}
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          {...props}
        >
          {children}
        </motion.div>)
      );
    };

  const SlideRightAnimation = ({ children, className, direction, ...props }: any) => {
    const ref = useRef(null);
    const cardVariants = {
      hidden: {
        opacity: 0,
        ...{ x: direction === 'up' ? 300 : -300 },
      },
      visible: {
        opacity: 1,
        ...{ x: 0 },
        transition: {
          delay: 0.2,
          duration: 0.5,
        },
      },
    };
      return (
        <motion.div
          className={className}
          ref={ref}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          {...props}
        >
          {children}
        </motion.div>
      );
    };

    const AnimatedTextLine: React.FC<{ children: React.ReactNode; delay: number }> = ({ children, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <motion.p 
      ref={ref}
      className='text-[3.5vw]'
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 20
      }}
       transition={{ 
        duration: 0.8, 
        delay: isInView ? delay / 1000 : 0,
        ease: "easeOut" 
      }}
    >
      {children}
    </motion.p>
  );
};

export { 
  FadeInViewPortAnimation, 
  ScaleViewPortAnimation, 
  SlideYViewPortAnimation, 
  SlideXViewPortAnimation,
  FadeInAnimation, 
  SlideRightAnimation,
  ScaleAnimation,
  AnimatedTextLine,
}