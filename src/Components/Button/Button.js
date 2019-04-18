import React from "react";
import PropTypes from "prop-types";

const Button = ({ type, children, customClass }) => (
  <button data-name={type} className={`btn w-100 ${customClass}`}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  customClass: PropTypes.string
  // error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  // loading: PropTypes.bool.isRequired,
  // newsList: PropTypes.arrayOf(PropTypes.object).isRequired
};

Button.defaultProps = {
  customClass: null
};

export default Button;
