import React, { PropTypes } from 'react';

const CellButton = (props) => {
  const handler = () => {
    props.onClick(props.row._id);
  };

  return (
    <button onClick={handler} className={`btn btn-${props.type} btn-sm`}>{props.children}</button>
  );
};

CellButton.propTypes = {
  children: PropTypes.string,
  type: PropTypes.oneOf(['danger', 'warning']),
  onClick: PropTypes.func,
  row: PropTypes.objectOf(PropTypes.any)
};

export default CellButton;
