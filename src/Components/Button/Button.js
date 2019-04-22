import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const Button = ({ type, children, customClass, handleClick }) => {
  const btnClass = classNames({
    "btn w-100": true,
    [customClass]: customClass
  });

  return (
    <button
      type="button"
      data-name={type}
      className={btnClass}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  customClass: PropTypes.string,
  handleClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  customClass: null
};

export default Button;
