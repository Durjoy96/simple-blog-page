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
      <div className="w-full h-[200px] md:h-[350px] lg:h-[450px]">
        <img
          className="object-cover w-full h-full rounded-lg"
          src={thumbnail}
          alt={thumbnail}
        />
      </div>
      <div className="mt-6 grid grid-cols-[auto_1fr_auto] items-center gap-6">
        <div className="w-12 h-12 lg:w-14 lg:h-14">
          <img
            className="w-full h-full rounded-full object-cover"
            src={author_img}
            alt=""
          />
        </div>
        <div>
          <h3 className="text-lg text-base-content font-bold md:text-xl lg:text-2xl">
            {author_name}
          </h3>
          <p className="text-sm font-semibold text-base-content-secondary md:text-base">
            {publish_date}
          </p>
        </div>
        <div>
          <span className="text-base font-medium text-base-content-secondary md:text-lg lg:text-xl">
            {read_time} min read
          </span>
        </div>
      </div>
      <h2 className="max-w-xl text-2xl font-bold text-base-content py-4 cursor-pointer hover:underline hover:text-primary md:text-3xl lg:text-4xl">
        {title}
      </h2>
      <span className="inline-block text-base font-medium text-base-content-secondary md:text-lg lg:text-xl">
        {hashtags.join(" ")}
      </span>
      <button className="block mt-5 border-b border-primary text-primary text-base font-semibold hover:text-primary/80 hover:border-primary/80 md:text-lg lg:text-xl">
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
