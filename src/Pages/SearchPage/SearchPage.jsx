import { useEffect, useState } from "react";
import PageTitle from "../../Components/PageTitle/PageTitle";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import PageBanner from "../../Shared/PageBanner/PageBanner";
import Navbar from "../Home/Navbar/Navbar";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  const [searchresult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const searchValue = useParams().value;
  // console.log(searchValue);

  useEffect(() => {
    const fetchFavouriteData = async () => {
      try {
        await fetch(`http://localhost:5000/search?value=${searchValue}`)
          .then((res) => res.json())
          .then((data) => {
            setSearchResult(data);
            setIsLoading(false);
          });
      } catch (error) {
        console.error("Error fetching favourite data:", error);
      }
    };

    // Fetch the data when the component mounts
    fetchFavouriteData();
  }, [searchValue]);
  console.log(searchresult);

  const details = {
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgCmUnysdBFxZ3si20tNS7YXPsg7fbSyvM-r_aSpfORblMbo9Fq1mNGjRB2yeqOy5qlDr-GZQdUcH1KysPeLqmK6QWaS4dqmMp-XUqHSPhZTR3ofsipf_4bGOUAE5w682cPhPlMQWFtK93u0E3imyBU3_sOrjfe3cGhWMZrbfruNX2DuKCqjoUMPEQyXg/w1200-h630-p-k-no-nu/Kuakata_SeaBeach.jpg",
    title: "Search",
  };
  return (
    <div>
      <ScrollToTop></ScrollToTop>
      <PageTitle pageDescription="Search"></PageTitle>
      <Navbar currentSearch={searchValue}></Navbar>
      <PageBanner details={details}></PageBanner>
      <SectionTitle heading="Search Results"></SectionTitle>
      <p>search page</p>
    </div>
  );
};

export default SearchPage;
