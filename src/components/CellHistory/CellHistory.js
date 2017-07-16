import React, { PropTypes } from 'react';

const CellHistory = (props) => {
  const handler = () => {
    props.onClick(props.row._id);
  };

  const renderHistory = (data) => {
    const history = data.map((item) => {
      return <div>{item}</div>;
    });
    return (
      <div>{history}</div>
    );
  };

  const showHistoryButton = <button onClick={handler} className="btn btn-primary btn-sm">Show History</button>;


  return props.row.history.length ? renderHistory(props.row.history) : showHistoryButton;
};

CellHistory.propTypes = {
  onClick: PropTypes.func,
  row: PropTypes.objectOf(PropTypes.any)
};

export default CellHistory;
