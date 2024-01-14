import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import PageBanner from "../../Shared/PageBanner/PageBanner";
import Navbar from "../Home/Navbar/Navbar";

const BlogPage = () => {
  const details = {
    image: "https://sb.ecobnb.net/app/uploads/sites/3/2022/04/copertina-1.jpg",
    name: "Blogs",
  };
  return (
    <div>
      <Navbar></Navbar>
      <PageBanner details={details}></PageBanner>
      <SectionTitle heading="Know about your Destination"></SectionTitle>
    </div>
  );
};

export default BlogPage;
