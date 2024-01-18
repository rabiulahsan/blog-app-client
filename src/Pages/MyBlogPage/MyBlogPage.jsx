import PageTitle from "../../Components/PageTitle/PageTitle";
import ScrollProgressBar from "../../Components/ScrollProgressBar/ScrollProgressBar";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import PageBanner from "../../Shared/PageBanner/PageBanner";
import Navbar from "../Home/Navbar/Navbar";

const MyBlogPage = () => {
  const details = {
    image:
      "https://www.bangladeshtravelandtours.com/wp-content/uploads/2023/04/30.jpg",
    title: "My Blogs",
  };

  return (
    <div>
      <ScrollToTop></ScrollToTop>
      <PageTitle pageDescription="My Blogs"></PageTitle>
      <Navbar></Navbar>
      <ScrollProgressBar></ScrollProgressBar>
      <PageBanner details={details}></PageBanner>
      <SectionTitle heading="Blogs that I Discover"></SectionTitle>
    </div>
  );
};

export default MyBlogPage;
