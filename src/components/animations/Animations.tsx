import { motion } from "framer-motion";

const FadeInViewPortAnimation = ({ children, className, ...props }: any) => {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
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
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        {...props}
      >
        {children}
      </motion.div>
    );
  };

export { FadeInViewPortAnimation, ScaleViewPortAnimation }