import React, { PropTypes } from 'react';
import './Input.css';

const Input = (props) => {
  const { label, input, error } = props;
  return (
    <div>
      <label htmlFor={input.name}>
        {label}
      </label>
      <input {...input} />
      {error.touched && error.error && <div className="error">{error.error}</div>}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  input: PropTypes.objectOf(PropTypes.any),
  error: PropTypes.objectOf(PropTypes.any)
};

export default Input;
