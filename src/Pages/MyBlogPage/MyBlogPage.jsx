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
import SkeletonCard from "../../Components/SkeletonCard/SkeletonCard";
import MyBlogsCard from "./MyBlogsCard";
import Swal from "sweetalert2";

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

  // for swal notification
  const Toast = Swal.mixin({
    toast: true,
    position: "top-right",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  // for delete the selected blog
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/blogs/${id}`).then((data) => {
          // console.log(data.data);
          if (data.data.deletedCount) {
            const remaining = myBlogs.filter((blog) => blog._id !== id);
            setMyBlogs(remaining);
            Toast.fire({
              icon: "success",
              title: "Blog deleted successfully",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <ScrollToTop></ScrollToTop>
      <PageTitle pageDescription="My Blogs"></PageTitle>
      <Navbar></Navbar>
      <ScrollProgressBar></ScrollProgressBar>
      <PageBanner details={details}></PageBanner>
      <SectionTitle heading="Blogs that I Discover"></SectionTitle>

      {/* this is for skeleton */}
      {isLoading || myBlogs.length === 0 ? (
        <SkeletonCard number={10}></SkeletonCard>
      ) : (
        <div className="grid gap-x-20 gap-y-16 grid-cols-1 lg:grid-cols-3 px-[10%]  ">
          {myBlogs?.map((data) => (
            <MyBlogsCard
              key={data?._id}
              place={data}
              handleDelete={handleDelete}
            ></MyBlogsCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBlogPage;
