import { useEffect, useState } from "react";

const UseAllBlogs = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => {
        setAllBlogs(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return [allBlogs];
};

export default UseAllBlogs;
