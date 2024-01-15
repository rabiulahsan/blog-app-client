import { useParams } from "react-router-dom";
import UseAllBlogs from "../../Hooks/UseAllBlogs/UseAllBlogs";
import Navbar from "../Home/Navbar/Navbar";
import UseCountries from "../../Hooks/UseCountries/UseCountries";
import PageBanner from "../../Shared/PageBanner/PageBanner";
import BlogsCard from "../../Shared/BlogsCard/BlogsCard";
import SkeletonCard from "../../Components/SkeletonCard/SkeletonCard";

const SingleCountryPage = () => {
  //getting current country name
  const currentCountry = useParams().country;
  console.log(currentCountry);

  //getting all blogs
  const [allBlogs, isLoading] = UseAllBlogs();
  console.log(allBlogs);

  // getting all countries
  const [countries] = UseCountries();
  console.log(countries);

  //getting all current countries blogs
  const currentCountryBlogs = allBlogs?.filter(
    (blog) => blog?.country.toLowerCase() === currentCountry
  );
  console.log(currentCountryBlogs);

  //getting deatils of current country for page banner
  const currentCountryDetails = countries?.filter(
    (country) => country?.countryName === currentCountry
  );
  console.log(currentCountryDetails);

  return (
    <div>
      <Navbar></Navbar>
      <PageBanner details={currentCountryDetails[0]}></PageBanner>

      {/* this is for specific place card  */}
      <div className="grid gap-x-20 gap-y-16 grid-cols-1 lg:grid-cols-3 px-[10%]  ">
        {/* this id for skeleton */}
        {isLoading && <SkeletonCard number={16}></SkeletonCard>}
        {currentCountryBlogs?.map((place) => (
          <BlogsCard key={place.index} place={place}></BlogsCard>
        ))}
      </div>
    </div>
  );
};

export default SingleCountryPage;
