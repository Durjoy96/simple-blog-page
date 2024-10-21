import PropTypes from "prop-types";

const SpentTime = ({ times }) => {
  return (
    <div className="py-4 text-center bg-primary/10 border border-primary rounded-lg">
      <span className="text-lg font-bold text-primary md:text-xl lg:text-2xl">
        Spent time on read : {times.reduce((acc, curr) => acc + curr, 0)} min
      </span>
    </div>
  );
};

SpentTime.propTypes = {
  times: PropTypes.number.isRequired,
};

export default SpentTime;
