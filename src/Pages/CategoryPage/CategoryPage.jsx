import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import PageBanner from "../../Shared/PageBanner/PageBanner";
import Navbar from "../Home/Navbar/Navbar";

const CategoryPage = () => {
  const details = {
    image:
      "https://images.unsplash.com/photo-1622779536320-bb5f5b501a06?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZGl2ZXMlMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D",
    name: "Categories",
  };
  return (
    <div>
      <Navbar></Navbar>
      <PageBanner details={details}></PageBanner>
      <SectionTitle heading="Find your Tour destination"></SectionTitle>
    </div>
  );
};

export default CategoryPage;
