import SectionTitle from "../../Components/SectionTitle/SectionTitle";
// import useAuth from "../../Hooks/UseAuth/UseAuth";
import PageBanner from "../../Shared/PageBanner/PageBanner";
import Navbar from "../Home/Navbar/Navbar";

const FavoritesPage = () => {
  //   const { user } = useAuth();

  const details = {
    image:
      "https://wander-lush.org/wp-content/uploads/2022/03/Beautiful-places-in-Bangladesh-WMC-hero.jpg",
    title: "Favourites",
  };
  return (
    <div>
      <Navbar></Navbar>
      <PageBanner details={details}></PageBanner>
      <SectionTitle heading="Your Next Adventure Awaits!"></SectionTitle>
    </div>
  );
};

export default FavoritesPage;
