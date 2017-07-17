import React, { PropTypes } from 'react';
import './CellHistory.css';

const CellHistory = (props) => {
  const handler = () => {
    props.onClick(props.row._id);
  };

  const renderHistory = (data) => {
    const history = data.map((item, index) => {
      return <div key={index}>{item}</div>;
    });
    return (
      <div className="cell-history-wrapper">{history}</div>
    );
  };

  const renderHistoryButton = <button onClick={handler} className="btn btn-primary btn-sm">Show History</button>;

  return props.row.history.length ? renderHistory(props.row.history) : renderHistoryButton;
};

CellHistory.propTypes = {
  onClick: PropTypes.func,
  row: PropTypes.objectOf(PropTypes.any)
};

export default CellHistory;
