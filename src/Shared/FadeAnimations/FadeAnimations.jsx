/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const FadeAnimations = ({ direction, children, delay }) => {
  //   console.log(direction);

  const variants = {
    initial: {
      x: direction === "right" ? -300 : direction === "left" ? 300 : 0,
      y: direction === "down" ? -300 : direction === "up" ? 100 : 0,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: `${delay}` },
    },
  };
  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: false }}
    >
      {children}
    </motion.div>
  );
};

export default FadeAnimations;
