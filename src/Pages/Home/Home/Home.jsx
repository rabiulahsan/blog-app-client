import Footer from "../../../Shared/Footer/Footer";
import Trending from "../../../Shared/Trending/Trending";
import Banner from "../Banner/Banner";
import Beauty from "../Beauty/Beauty";
import Navbar from "../Navbar/Navbar";

import { motion, useScroll, useSpring } from "framer-motion";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  return (
    <div>
      <Navbar></Navbar>
      {/* it is for on scroll progress bar  */}
      <motion.div
        className="bg-orange-500 fixed w-full top-[64px] left-0 h-[4px] z-40"
        style={{ scaleX, transformOrigin: "left" }}
      ></motion.div>
      <Banner></Banner>
      <Beauty></Beauty>
      <Trending></Trending>
      <Footer></Footer>
    </div>
  );
};

export default Home;
