import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text/index';
import Icon from '../Icon';
import './button-style.css';
import { BUTTON_SIZE, TEXT_SIZE } from '../../../common/button';

function Button({
  id,
  type,
  classes,
  size,
  labelClasses,
  iconClasses,
  onClick,
  label,
  icon,
}) {
  return (
    <div>
      {
        <button
          id={id}
          type={type}
          className={`${BUTTON_SIZE[size]} npbtn ${classes}`}
          onClick={onClick}
        >
          <div className="flex jc ac">
            {icon ? (
              <Icon size={size} name={icon} classes={` ${iconClasses}`} />
            ) : null}
            {label ? (
              <Text
                classes={`${TEXT_SIZE[size]} ${labelClasses}`}
                label={label}
              />
            ) : null}
          </div>
        </button>
      }
    </div>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  classes: PropTypes.string,
  size: PropTypes.string,
  labelClasses: PropTypes.string,
  iconClasses: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string,
  icon: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  size: 'medium',
  onClick: () => {},
};

export default Button;
