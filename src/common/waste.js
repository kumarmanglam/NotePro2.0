import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

function Button({ variant, size, classes, label, icon }) {
  return (
    <button>
      <div className="flex ac">{icon ? <Icon name={icon}></Icon> : null}</div>
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.string,
};

export default Button;
