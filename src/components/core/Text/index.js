import React from 'react';
import PropTypes from 'prop-types';
import './text-style.css';

function Text({ label, classes }) {
  return (
    <span className={`text-base font-medium inline-block ${classes}`}>
      {label}
    </span>
  );
}

Text.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  classes: PropTypes.string,
};

export default Text;
