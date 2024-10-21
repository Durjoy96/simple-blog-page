import PropTypes from "prop-types";
const Blog = ({ data }) => {
  const {
    thumbnail,
    author_img,
    author_name,
    publish_date,
    read_time,
    title,
    hashtags,
  } = data;
  return (
    <div className="mt-6">
      <div className="w-full h-[450px]">
        <img
          className="object-cover w-full h-full rounded-lg"
          src={thumbnail}
          alt={thumbnail}
        />
      </div>
      <div className="mt-6 grid grid-cols-[auto_1fr_auto] items-center gap-6">
        <div className="w-14 h-14">
          <img
            className="w-full h-full rounded-full object-cover"
            src={author_img}
            alt=""
          />
        </div>
        <div>
          <h3 className="text-2xl text-base-content font-bold">
            {author_name}
          </h3>
          <p className="text-base font-semibold text-base-content-secondary">
            {publish_date}
          </p>
        </div>
        <div>
          <span className="text-xl font-medium text-base-content-secondary">
            {read_time} min read
          </span>
        </div>
      </div>
      <h2 className="max-w-xl text-4xl font-bold text-base-content py-4 cursor-pointer hover:underline hover:text-primary">
        {title}
      </h2>
      <span className="inline-block text-xl font-medium text-base-content-secondary">
        {hashtags.join(" ")}
      </span>
      <button className="block mt-5 border-b border-primary text-primary text-xl font-semibold hover:text-primary/80 hover:border-primary/80">
        Mark as read
      </button>
      <hr className="mt-6" />
    </div>
  );
};

Blog.propTypes = {
  data: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    author_img: PropTypes.string.isRequired,
    author_name: PropTypes.string.isRequired,
    publish_date: PropTypes.string.isRequired,
    read_time: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    hashtags: PropTypes.array.isRequired,
  }).isRequired,
};

export default Blog;
