import PropTypes from "prop-types";

const Tittle_adder = ({ serial, title }) => {
  return (
    <p className="mb-2 text-gray-500 text-xs">
      {serial} {title}
    </p>
  );
};

Tittle_adder.propTypes = {
  serial: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
export default Tittle_adder;
