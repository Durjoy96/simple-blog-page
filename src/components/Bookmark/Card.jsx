import PropTypes from "prop-types";

const Card = ({ title }) => {
  return (
    <div className="p-5 rounded-lg bg-base-100">
      <h3 className="text-lg font-semibold text-base-content">{title}</h3>
    </div>
  );
};

Card.propTypes = {
    title : PropTypes.string.isRequired,
}

export default Card;
