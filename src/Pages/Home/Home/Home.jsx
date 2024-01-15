import PageTitle from "../../../Components/PageTitle/PageTitle";
// import Footer from "../../../Shared/Footer/Footer";
import Trending from "../../../Shared/Trending/Trending";
import Banner from "../Banner/Banner";
import Beauty from "../Beauty/Beauty";
import BlogSection from "../BlogSection/BlogSection";
import CategorySection from "../CategorySection/CategorySection";
import Navbar from "../Navbar/Navbar";

import { motion, useScroll, useSpring } from "framer-motion";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  return (
    <div>
      {/* this is for title of the  page  */}
      <PageTitle pageDescription="Get Close to Nature"></PageTitle>

      <Navbar></Navbar>
      {/* it is for on scroll progress bar  */}
      <motion.div
        className="bg-orange-500 fixed w-full top-[64px] left-0 h-[4px] z-40"
        style={{ scaleX, transformOrigin: "left" }}
      ></motion.div>
      <Banner></Banner>
      <Beauty></Beauty>
      <BlogSection></BlogSection>
      <CategorySection></CategorySection>
      <Trending></Trending>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Home;
