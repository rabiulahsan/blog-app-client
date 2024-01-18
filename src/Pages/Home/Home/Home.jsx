import PageTitle from "../../../Components/PageTitle/PageTitle";
// import Footer from "../../../Shared/Footer/Footer";
import Trending from "../../../Shared/Trending/Trending";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Beauty from "../Beauty/Beauty";
import BlogSection from "../BlogSection/BlogSection";
import CategorySection from "../CategorySection/CategorySection";
import Navbar from "../Navbar/Navbar";
import ScrollToTop from "../../../Components/ScrollToTop/ScrollToTop";
import ScrollProgressBar from "../../../Components/ScrollProgressBar/ScrollProgressBar";

const Home = () => {
  return (
    <div>
      {/* this is for scroll to top after coming this page  */}
      <ScrollToTop></ScrollToTop>

      {/* this is for title of the  page  */}
      <PageTitle pageDescription="Get Close to Nature"></PageTitle>
      <Navbar></Navbar>

      {/* it is for on scroll progress bar  */}
      <ScrollProgressBar></ScrollProgressBar>
      <Banner></Banner>
      <Beauty></Beauty>
      <BlogSection></BlogSection>
      <CategorySection></CategorySection>
      <Trending></Trending>
      <About></About>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Home;
