import { useState } from "react";
import PageTitle from "../../Components/PageTitle/PageTitle";
import ScrollProgressBar from "../../Components/ScrollProgressBar/ScrollProgressBar";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import PageBanner from "../../Shared/PageBanner/PageBanner";
import Navbar from "../Home/Navbar/Navbar";
import { useEffect } from "react";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure/UseAxiosSecure";
import useAuth from "../../Hooks/UseAuth/UseAuth";

const MyBlogPage = () => {
  const { user } = useAuth();
  const [axiosSecure] = UseAxiosSecure();
  const [myBlogs, setMyBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMyBlogsData = async () => {
      try {
        const res = await axiosSecure.get(`/myblogs?email=${user?.email}`);
        setMyBlogs(res?.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching favourite data:", error);
      }
    };

    // Fetch the data when the component mounts
    fetchMyBlogsData();
  }, [user, axiosSecure]);
  console.log(myBlogs);

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
