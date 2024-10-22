import PropTypes from "prop-types";
import { useState } from "react";
import { CiBookmark, CiBookmarkCheck } from "react-icons/ci";

const Blog = ({ data, getBookmarkedData, getTime }) => {
  const {
    thumbnail,
    author_img,
    author_name,
    publish_date,
    read_time,
    title,
    hashtags,
  } = data;

  const [buttonText, setButtonText] = useState("Mark as read");
  const [disable, setDisable] = useState(false);
  const [bookmarkBtn, setBookmarkBtn] = useState(false);

  const handleClick = () => {
    getTime(data);
    alreadyRead();
  };

  const bookmarkBtnHandler = () => {
    getBookmarkedData(data);
    bookmarkBtn ? setBookmarkBtn(false) : setBookmarkBtn(true);
  };

  function alreadyRead() {
    setButtonText("Already read");
    setDisable(true);
  }

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
        <div className="flex items-center gap-3">
          <span className="text-base font-medium text-base-content-secondary md:text-lg lg:text-xl">
            {read_time} min read
          </span>
          <span>
            {bookmarkBtn ? (
              <CiBookmarkCheck
                onClick={bookmarkBtnHandler}
                className="w-6 h-6 cursor-pointer fill-primary"
              />
            ) : (
              <CiBookmark
                onClick={bookmarkBtnHandler}
                className="w-6 h-6 cursor-pointer fill-base-content-secondary"
              />
            )}
          </span>
        </div>
      </div>
      <h2 className="max-w-xl text-2xl font-bold text-base-content py-4 cursor-pointer hover:underline hover:text-primary md:text-3xl lg:text-4xl">
        {title}
      </h2>
      <span className="inline-block text-base font-medium text-base-content-secondary md:text-lg lg:text-xl">
        {hashtags.join(" ")}
      </span>
      <button
        disabled={disable}
        onClick={handleClick}
        className="block mt-5 border-b border-primary text-primary text-base font-semibold hover:text-primary/80 hover:border-primary/80 disabled:text-primary/60 disabled:border-primary/60 disabled:cursor-text  md:text-lg lg:text-xl"
      >
        {buttonText}
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
  getBookmarkedData: PropTypes.func.isRequired,
  getTime: PropTypes.func.isRequired,
};

export default Blog;
