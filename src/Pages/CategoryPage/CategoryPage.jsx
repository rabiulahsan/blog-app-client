import PageTitle from "../../Components/PageTitle/PageTitle";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import UseCategories from "../../Hooks/UseCategories/UseCategories";
import CardForPage from "../../Shared/CardForPage/CardForPage";
import PageBanner from "../../Shared/PageBanner/PageBanner";
import Navbar from "../Home/Navbar/Navbar";

const CategoryPage = () => {
  const [categories] = UseCategories();

  const details = {
    image:
      "https://images.unsplash.com/photo-1622779536320-bb5f5b501a06?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZGl2ZXMlMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D",
    title: "Categories",
  };
  return (
    <div>
      {/* this is for scroll to top after coming this page  */}
      <ScrollToTop></ScrollToTop>
      {/* this is for title of the  page  */}
      <PageTitle pageDescription="Categories"></PageTitle>
      <Navbar></Navbar>
      <PageBanner details={details}></PageBanner>
      <SectionTitle heading="Find your Tour destination"></SectionTitle>
      <div className="grid gap-16 grid-cols-1 lg:grid-cols-4 px-[10%]  mb-[5%]">
        {categories.map((category) => (
          <CardForPage key={category?.id} details={category}></CardForPage>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
