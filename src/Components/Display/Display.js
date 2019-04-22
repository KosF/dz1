import React from "react";
import PropTypes from "prop-types";

const Display = ({ value }) => (
  <input
    className="w-100 rounded pt-2 pb-2 pl-2 pr-2 text-right"
    placeholder="0"
    readOnly
    value={value}
    type="text"
  />
);

Display.propTypes = {
  value: PropTypes.string.isRequired
};

export default Display;
