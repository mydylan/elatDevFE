import React, { PropTypes } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import './Popup.css';

const renderHeader = (id) => {
  return id ? 'Update contact' : 'Create contact';
};

const parse = (data) => {
  return {
    ...data,
    history: data.history ? data.history.split('+').map(b => `+${b}`.trim()) : []
  };
};

class Popup extends React.Component {

  static propTypes = {
    isActive: PropTypes.bool,
    selectedId: PropTypes.string,
    hideForm: PropTypes.func,
    createContact: PropTypes.func,
    updateContact: PropTypes.func,
    contact: PropTypes.objectOf(PropTypes.any)
  }

  onSubmit = (values) => {
    if (this.props.selectedId) {
      this.props.updateContact(this.props.selectedId, parse(values));
    } else {
      this.props.createContact(parse(values));
    }
  }

  renderBody = () => {
    return (
      <ContactForm onSubmit={this.onSubmit} contact={this.props.contact} />
    );
  }

  render() {
    return this.props.isActive && (
      <div className="form-popup">
        <button className="close" onClick={this.props.hideForm} />
        <div className="form-wrapper">
          <div className="panel panel-default">
            <div className="panel-heading">{ renderHeader(this.props.selectedId) }</div>
            <div className="panel-body">
              { this.renderBody() }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
