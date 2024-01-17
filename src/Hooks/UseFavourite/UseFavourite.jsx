import { useEffect, useState } from "react";
import UseAxiosSecure from "../UseAxiosSecure/UseAxiosSecure";
import useAuth from "../UseAuth/UseAuth";

const UseFavourite = () => {
  const { user } = useAuth();
  const [axiosSecure] = UseAxiosSecure();
  const [favouriteData, setFavouriteData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFavouriteData = async () => {
      try {
        const response = await axiosSecure.get(
          `/favourites?email=${user?.email}`
        );
        setFavouriteData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching favourite data:", error);
      }
    };

    // Fetch the data when the component mounts
    fetchFavouriteData();
  }, [axiosSecure, user?.email]);

  console.log(favouriteData);
  return [favouriteData, isLoading];
};

export default UseFavourite;
