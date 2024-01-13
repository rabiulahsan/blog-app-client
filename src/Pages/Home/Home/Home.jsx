import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";

import { motion, useScroll, useSpring } from "framer-motion";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  return (
    <div>
      <motion.div
        className="bg-orange-500 sticky top-0 left-0 h-[4px] z-40"
        style={{ scaleX, transformOrigin: "left" }} // here transformOrigin helps to start it from the left
        //This property specifies where the transformation (scaling in this case) should originate,
        // and setting it to "left" ensures that the progress bar starts from the left side.
      ></motion.div>
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
};

export default Home;
