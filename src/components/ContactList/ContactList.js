import React, { PropTypes } from 'react';
import Table from '../Table/Table';

class ContactList extends React.Component {

  static propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    getContacts: PropTypes.func,
    getHistory: PropTypes.func,
    deleteContact: PropTypes.func,
    showForm: PropTypes.func
  }

  componentWillMount() {
    this.props.getContacts();
  }

  render() {
    return (
      <div>
        <Table
          data={this.props.contacts}
          getHistory={this.props.getHistory}
          deleteContact={this.props.deleteContact}
          showForm={this.props.showForm}
        />
      </div>
    );
  }
}

export default ContactList;
