import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);

  return (
    <>
      {/* it is for on scroll progress bar  */}
      <motion.div
        className="bg-orange-500 fixed w-full top-[64px] left-0 h-[4px] z-40"
        style={{ scaleX, transformOrigin: "left" }}
      ></motion.div>
    </>
  );
};

export default ScrollProgressBar;
