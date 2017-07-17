import React, { PropTypes } from 'react';
import './Textarea.css';

const Textarea = (props) => {
  const { label, input, error } = props;
  return (
    <div>
      <label htmlFor={input.name}>
        {label}
      </label>
      <textarea {...input} />
      {error.touched && error.error && <div className="error">{error.error}</div>}
    </div>
  );
};

Textarea.propTypes = {
  label: PropTypes.string,
  input: PropTypes.objectOf(PropTypes.any),
  error: PropTypes.objectOf(PropTypes.any)
};

export default Textarea;
