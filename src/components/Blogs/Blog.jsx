import PropTypes from "prop-types";

const Blog = ({ data }) => {
  return (
    <div>
      <div className="w-full h-[450px]">
        <img
          className="object-cover w-full h-full"
          src={data.thumbnail}
          alt=""
        />
      </div>
    </div>
  );
};

Blog.propTypes = {
  data: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default Blog;
