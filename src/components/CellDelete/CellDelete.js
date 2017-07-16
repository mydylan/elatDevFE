import React, { PropTypes } from 'react';

const CellDelete = (props) => {
  return (
    <button onClick={props.onClick} className="btn btn-danger btn-sm">Delete</button>
  );
};

CellDelete.propTypes = {
  onClick: PropTypes.func
};

export default CellDelete;
