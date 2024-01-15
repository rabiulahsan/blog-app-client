import { useEffect, useState } from "react";

const UseAllBlogs = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // fetch("blogs.json")
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => {
        setAllBlogs(data);
        setIsLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  // console.log(allBlogs);

  return [allBlogs, isLoading];
};

export default UseAllBlogs;
