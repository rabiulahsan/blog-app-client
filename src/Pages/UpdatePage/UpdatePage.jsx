import { useNavigate, useParams } from "react-router-dom";
import PageTitle from "../../Components/PageTitle/PageTitle";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import PageBanner from "../../Shared/PageBanner/PageBanner";
import Navbar from "../Home/Navbar/Navbar";
import UseAllBlogs from "../../Hooks/UseAllBlogs/UseAllBlogs";
import SkeletonCard from "../../Components/SkeletonCard/SkeletonCard";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure/UseAxiosSecure";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/UseAuth/UseAuth";
import Swal from "sweetalert2";

const UpdatePage = () => {
  const { user } = useAuth();
  const [axiosSecure] = UseAxiosSecure();
  const navigate = useNavigate();

  //getting current blog id
  const currentBlogId = useParams().id;
  //   console.log(currentBlogId);
  const [allBlogs, isLoading] = UseAllBlogs();
  const currentBlog = allBlogs?.find((blog) => blog._id === currentBlogId);
  //   console.log(currentBlog);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // for swal notification
  const Toast = Swal.mixin({
    toast: true,
    position: "top-right",
    showConfirmButton: false,
    timer: 6000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const onSubmit = (data) => {
    const updatedBlog = {
      ...data,
      email: user?.email,
    };
    console.log(updatedBlog);
    axiosSecure
      .put(`/blogs?email=${user?.email}&id=${currentBlog?._id}`, updatedBlog)
      .then((data) => {
        console.log(data);
        if (data.data.modifiedCount > 0) {
          Toast.fire({
            icon: "success",
            title: "Blog Updated successfully",
          });
          navigate("/myblogs");
        }
      });
  };

  const details = {
    image:
      "https://www.africaodyssey.com/site/odyssey-image-proxy/lodges/cocoa-island=403739-300.jpg",
    title: "Update",
  };

  return (
    <div>
      <ScrollToTop></ScrollToTop>
      {/* this is for title of the  page  */}
      <PageTitle
        pageDescription={"update - " + currentBlog?.placeName}
      ></PageTitle>
      <Navbar></Navbar>
      <PageBanner details={details}></PageBanner>
      <SectionTitle heading="Update the Blog"></SectionTitle>
      {isLoading && (
        <div className="grid gap-x-20 gap-y-16 grid-cols-1 lg:grid-cols-2 px-[10%] my-[5%]">
          <SkeletonCard number={2}></SkeletonCard>
        </div>
      )}

      {/* update form  */}
      <div className="mx-[8%] mb-[6%]">
        <form onSubmit={handleSubmit(onSubmit)} className="relative">
          <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
            {/* place name  */}
            <div className="form-control w-full mb-4">
              <label className="label block text-gray-700 text-sm font-bold">
                <span className="label-text font-semibold">Place Name</span>
              </label>
              <input
                type="text"
                placeholder="Place Name"
                defaultValue={currentBlog?.placeName}
                {...register("placeName", { required: true, maxLength: 25 })}
                className="input-style"
              />
              {errors.class_name && (
                <span className="text-red-600">Class Name is required</span>
              )}
            </div>

            {/* writer  */}
            <div className="form-control w-full mb-4">
              <label className="label block text-gray-700 text-sm font-bold">
                <span className="label-text font-semibold">Writer</span>
              </label>
              <input
                readOnly
                type="text"
                value={user?.displayName}
                {...register("writer", { required: true, maxLength: 120 })}
                className="input-style"
              />
            </div>

            {/* location  */}
            <div className="form-control w-full mb-4">
              <label className="label block text-gray-700 text-sm font-bold">
                <span className="label-text font-semibold">Location</span>
              </label>
              <input
                type="text"
                placeholder="Location"
                defaultValue={currentBlog?.location}
                {...register("location", { required: true, maxLength: 30 })}
                className="input-style"
              />
              {errors.location && (
                <span className="text-red-600">Location is required</span>
              )}
            </div>

            {/* category */}
            <div className="form-control w-full max-w-xs">
              <label className="label block text-gray-700 text-sm font-bold">
                <span className="label-text font-semibold">
                  Select Category
                </span>
              </label>
              <div className="input-group">
                <select
                  {...register("category", { required: true })}
                  className="select select-bordered text-black"
                >
                  <option selected value="">
                    Select Category
                  </option>
                  <option
                    selected={currentBlog?.category === "hike"}
                    value="hike"
                  >
                    Hike
                  </option>
                  <option
                    selected={currentBlog?.category === "national-park"}
                    value="national-park"
                  >
                    National Park
                  </option>
                  <option
                    selected={currentBlog?.category === "village"}
                    value="village"
                  >
                    Village
                  </option>
                  <option
                    selected={currentBlog?.category === "city"}
                    value="city"
                  >
                    City
                  </option>
                  <option
                    selected={currentBlog?.category === "lake"}
                    value="lake"
                  >
                    Lake
                  </option>
                  <option
                    selected={currentBlog?.category === "forest"}
                    value="forest"
                  >
                    Forest
                  </option>
                  <option
                    selected={currentBlog?.category === "beach"}
                    value="beach"
                  >
                    Beach
                  </option>
                  <option
                    selected={currentBlog?.category === "gracier"}
                    value="gracier"
                  >
                    Gracier
                  </option>
                  <option
                    selected={currentBlog?.category === "canyon"}
                    value="canyon"
                  >
                    Canyon
                  </option>
                  <option
                    selected={currentBlog?.category === "monument"}
                    value="monument"
                  >
                    Monument
                  </option>
                  <option
                    selected={currentBlog?.category === "waterfall"}
                    value="waterfall"
                  >
                    Waterfall
                  </option>
                  <option
                    selected={currentBlog?.category === "mountain"}
                    value="mountain"
                  >
                    Mountain
                  </option>
                </select>
                {errors.category && (
                  <span className="text-red-600 text-sm">
                    Category need to be selected
                  </span>
                )}
              </div>
            </div>

            {/* image url  */}
            <div className="form-control w-full mb-4">
              <label className="label block text-gray-700 text-sm font-bold">
                <span className="label-text font-semibold">Image URL</span>
              </label>
              <input
                type="text"
                placeholder="Image URL"
                defaultValue={currentBlog?.image}
                {...register("image", { required: true, maxLength: 1000 })}
                className="input-style"
              />
              {errors.image && (
                <span className="text-red-600">ImageURL is required</span>
              )}
            </div>

            {/* country  */}
            <div className="form-control w-full mb-4">
              <label className="label block text-gray-700 text-sm font-bold">
                <span className="label-text font-semibold">Country</span>
              </label>
              <input
                type="text"
                placeholder="Country"
                defaultValue={currentBlog?.country}
                {...register("country", { required: true, maxLength: 30 })}
                className="input-style"
              />
              {errors.country && (
                <span className="text-red-600">Country is required</span>
              )}
            </div>

            {/* description  */}
            <div className="form-control w-full mb-4">
              <label className="label block text-gray-700 text-sm font-bold">
                <span className="label-text font-semibold">Description</span>
              </label>
              <textarea
                className="textarea textarea-bordered input-style"
                placeholder="Description"
                defaultValue={currentBlog?.description}
                {...register("description", { required: true })}
              ></textarea>
              {errors.description && (
                <span className="text-red-600">Description is required</span>
              )}
            </div>
          </div>
          <input
            className="orange-small-btn cursor-pointer font-bold absolute bottom-0 right-0"
            type="submit"
            value="Update Blog"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdatePage;
