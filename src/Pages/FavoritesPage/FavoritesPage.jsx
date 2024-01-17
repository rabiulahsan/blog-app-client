import SectionTitle from "../../Components/SectionTitle/SectionTitle";
// import useAuth from "../../Hooks/UseAuth/UseAuth";
import PageBanner from "../../Shared/PageBanner/PageBanner";
import Navbar from "../Home/Navbar/Navbar";
import ScollToTop from "../../Components/ScrollToTop/ScrollToTop";
import UseFavourite from "../../Hooks/UseFavourite/UseFavourite";
import SkeletonCard from "../../Components/SkeletonCard/SkeletonCard";
import BlogsCardFavourite from "../../Shared/BlogsCard/BlogsCardFavourite";
// import BlogsCard from "../../Shared/BlogsCard/BlogsCard";

const FavoritesPage = () => {
  //   const { user } = useAuth();
  const [favouriteData, isLoading] = UseFavourite();
  // console.log(favouriteData);

  const details = {
    image:
      "https://wander-lush.org/wp-content/uploads/2022/03/Beautiful-places-in-Bangladesh-WMC-hero.jpg",
    title: "Favourites",
  };

  return (
    <div>
      <ScollToTop></ScollToTop>
      <Navbar></Navbar>
      <PageBanner details={details}></PageBanner>
      <SectionTitle heading="Your Next Adventure Awaits!"></SectionTitle>
      {/* this id for skeleton */}
      {isLoading && <SkeletonCard number={10}></SkeletonCard>}
      <div className="grid gap-x-20 gap-y-16 grid-cols-1 lg:grid-cols-3 px-[10%]  ">
        {favouriteData?.map((data) => (
          <BlogsCardFavourite
            key={data?._id}
            place={data}
            isLoading={isLoading}
          ></BlogsCardFavourite>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
