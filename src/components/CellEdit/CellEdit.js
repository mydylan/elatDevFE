import React, { PropTypes } from 'react';

const CellEdit = (props) => {
  return (
    <button onClick={props.onClick} className="btn btn-warning btn-sm">Edit</button>
  );
};

CellEdit.propTypes = {
  onClick: PropTypes.func
};

export default CellEdit;
