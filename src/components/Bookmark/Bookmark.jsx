import PropTypes from "prop-types";
import Card from "./Card";

const Bookmark = ({ data }) => {
  return (
    <div className="p-6 rounded-lg bg-base-200 mt-6">
      <h3 className="text-2xl font-bold text-base-content">
        Bookmarked Blogs: {data.length}
      </h3>
      <div className="space-y-4 mt-4">
        {data.map((item, idx) => (
          <Card key={idx} title={item.title}></Card>
        ))}
        <p className="text-base text-base-content-secondary font-normal">
          {data.length ? "" : "Bookmark now!"}
        </p>
      </div>
    </div>
  );
};

Bookmark.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    length: PropTypes.number.isRequired,
    map: PropTypes.array.isRequired,
  }).isRequired,
};

export default Bookmark;
