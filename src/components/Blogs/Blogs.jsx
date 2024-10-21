import { useEffect, useState } from "react";
import Blog from "./Blog";
import PropTypes from "prop-types";

const Blogs = ({ getBookmarkedData, getTime }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      {blogs.map((item, idx) => (
        <Blog
          key={idx}
          data={item}
          getBookmarkedData={getBookmarkedData}
          getTime = {getTime}
        ></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
  getBookmarkedData: PropTypes.func.isRequired,
  getTime: PropTypes.func.isRequired,
};

export default Blogs;
