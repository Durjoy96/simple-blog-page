import { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      {blogs.map((item) => (
        <Blog key={item.title} data={item}></Blog>
      ))}
    </div>
  );
};

export default Blogs;
