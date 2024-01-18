import PageTitle from "../../Components/PageTitle/PageTitle";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import PageBanner from "../../Shared/PageBanner/PageBanner";
import Navbar from "../Home/Navbar/Navbar";

const Write = () => {
  const details = {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Ratargul_Swamp_Forest%2C_Sylhet%2C_Bangladesh.jpg/2560px-Ratargul_Swamp_Forest%2C_Sylhet%2C_Bangladesh.jpg",
    title: "Write",
  };

  return (
    <div>
      <ScrollToTop></ScrollToTop>
      <PageTitle pageDescription="write"></PageTitle>
      <Navbar></Navbar>
      <PageBanner details={details}></PageBanner>
      <SectionTitle heading="Write a Blog"></SectionTitle>
    </div>
  );
};

export default Write;
