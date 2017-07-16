import React, { PropTypes } from 'react';
import './FormPopup.css';

const renderHeader = (id) => {
  return id ? 'Update contact' : 'Create contact';
};

class FormPopup extends React.Component {

  static propTypes = {
    isActive: PropTypes.bool,
    selectedId: PropTypes.string,
    hideForm: PropTypes.func
  }

  render() {
    return this.props.isActive && (
      <div className="form-popup">
        <button className="close" onClick={this.props.hideForm} />
        <div className="form-wrapper">
          <div className="panel panel-default">
            <div className="panel-heading">{ renderHeader(this.props.selectedId) }</div>
            <div className="panel-body">Body</div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormPopup;
