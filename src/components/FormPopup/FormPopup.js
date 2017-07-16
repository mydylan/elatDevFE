import React, { PropTypes } from 'react';
import ContactForm from '../../containers/ContactForm';
import './FormPopup.css';

const renderHeader = (id) => {
  return id ? 'Update contact' : 'Create contact';
};

const parseHistory = (data) => {
  return {
    ...data,
    history: data.history.split(', ')
  };
};

class FormPopup extends React.Component {

  static propTypes = {
    isActive: PropTypes.bool,
    selectedId: PropTypes.string,
    hideForm: PropTypes.func,
    createContact: PropTypes.func,
    updateContact: PropTypes.func
  }

  onSubmit = (values) => {
    if (this.props.selectedId) {
      this.props.updateContact(parseHistory(values));
    } else {
      this.props.createContact(parseHistory(values));
    }
  }

  render() {
    return this.props.isActive && (
      <div className="form-popup">
        <button className="close" onClick={this.props.hideForm} />
        <div className="form-wrapper">
          <div className="panel panel-default">
            <div className="panel-heading">{ renderHeader(this.props.selectedId) }</div>
            <div className="panel-body">
              <ContactForm onSubmit={this.onSubmit} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormPopup;
