import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
  return (
    <motion.div
      animate={{ opacity: [0, 0.2, 0.8, 1] }}
      transition={{ ease: "easeInOut", duration: 1, times: [0, 0.5, 0.6, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
