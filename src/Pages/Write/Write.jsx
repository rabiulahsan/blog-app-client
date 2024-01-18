import { useForm } from "react-hook-form";
import PageTitle from "../../Components/PageTitle/PageTitle";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure/UseAxiosSecure";
import PageBanner from "../../Shared/PageBanner/PageBanner";
import Navbar from "../Home/Navbar/Navbar";
import useAuth from "../../Hooks/UseAuth/UseAuth";

const Write = () => {
  const [axiosSecure] = UseAxiosSecure();
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm();

  const { user } = useAuth();

  const onSubmit = (data) => {
    console.log(data);
  };

  //for pagebanner
  const details = {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Ratargul_Swamp_Forest%2C_Sylhet%2C_Bangladesh.jpg/2560px-Ratargul_Swamp_Forest%2C_Sylhet%2C_Bangladesh.jpg",
    title: "Write",
  };

  return (
    <div>
      <ScrollToTop></ScrollToTop>
      <PageTitle pageDescription="write"></PageTitle>
      <Navbar></Navbar>
      <PageBanner details={details}></PageBanner>
      <SectionTitle heading="Write a Blog"></SectionTitle>
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
                  <option disabled selected value="">
                    Select Category
                  </option>
                  <option value="hike">Hike</option>
                  <option value="national-park">National Park</option>
                  <option value="village">Village</option>
                  <option value="city">City</option>
                  <option value="lake">Lake</option>
                  <option value="forest">Forest</option>
                  <option value="beach">Beach</option>
                  <option value="gracier">Gracier</option>
                  <option value="canyon">Canyon</option>
                  <option value="monument">Monument</option>
                  <option value="waterfall">Waterfall</option>
                  <option value="mountain">Mountain</option>
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
                {...register("country", { required: true, maxLength: 30 })}
                className="input-style"
              />
              {errors.country && (
                <span className="text-red-600">Country is required</span>
              )}
            </div>
            <div className="form-control w-full mb-4">
              <label className="label block text-gray-700 text-sm font-bold">
                <span className="label-text font-semibold">Description</span>
              </label>
              <textarea
                className="textarea textarea-bordered input-style"
                placeholder="Description"
                {...register("description", { required: true })}
              ></textarea>
              {errors.description && (
                <span className="text-red-600">Description is required</span>
              )}
            </div>
          </div>
          <input
            className="bg-blue-700  py-2 px-6 text-white font-semibold cursor-pointer rounded hover:bg-blue-800 absolute bottom-[-15%] right-0"
            type="submit"
            value="Add Blog"
          />
        </form>
      </div>
    </div>
  );
};

export default Write;
