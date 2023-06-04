import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { INPUT_VARIANT } from '../../../common/Input';
import './input-style.css';
function Input({
  wrapperClasses,
  variant,
  type,
  placeholder,
  onChange,
  onKeyDown,
  value,
  name,
  ...inputProps
}) {
  const inputRef = useRef();
  return (
    <div className={wrapperClasses}>
      {variant === INPUT_VARIANT.TEXT ? (
        <input
          className="np-input"
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={value}
          name={name}
          {...inputProps}
        />
      ) : (
        <textarea
          className="np-input np-text-area"
          ref={inputRef}
          type={type}
          placeholder={placeholder}
          onChange={(e) => {
            inputRef.current.style.height = '16px';
            inputRef.current.style.height = `${e?.target?.scrollHeight}px`;
            onChange(e);
          }}
          onKeyDown={onKeyDown}
          value={value}
          name={name}
          {...inputProps}
        />
      )}
    </div>
  );
}

Input.propTypes = {
  wrapperClasses: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  inputProps: PropTypes.object,
  variant: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  onChange: () => {},
  onKeyDown: () => {},
  variant: INPUT_VARIANT.TEXT,
};
export default Input;
