import React, { PropTypes } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import CellHistory from '../CellHistory/CellHistory';
import CellEdit from '../CellEdit/CellEdit';
import CellDelete from '../CellDelete/CellDelete';

export default class DefaultPaginationTable extends React.Component {

  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    onCreate: PropTypes.func,
    getHistory: PropTypes.func,
    showForm: PropTypes.func,
    deleteContact: PropTypes.func
  }

  cellHistory = (cell, row) => {
    return <CellHistory onClick={this.props.getHistory} cell={cell} row={row} />;
  }

  cellEdit = (cell, row) => {
    return <CellEdit onClick={this.props.showForm} cell={cell} row={row} />;
  }

  cellDelete = (cell, row) => {
    return <CellDelete onClick={this.props.deleteContact} cell={cell} row={row} />;
  }

  render() {
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h2>Contacts</h2>
            <button className="btn btn-primary" onClick={this.props.onCreate}>Create</button>
          </div>
          <div className="panel-body">
            <BootstrapTable data={this.props.data} pagination>
              <TableHeaderColumn dataField="id" isKey hidden>ID</TableHeaderColumn>
              <TableHeaderColumn dataField="firstName">First Name</TableHeaderColumn>
              <TableHeaderColumn dataField="lastName">Last Name</TableHeaderColumn>
              <TableHeaderColumn dataField="phoneNumber">Phone Number</TableHeaderColumn>
              <TableHeaderColumn dataField="email">Email</TableHeaderColumn>
              <TableHeaderColumn dataField="history" dataFormat={this.cellHistory}>History of Calls</TableHeaderColumn>
              <TableHeaderColumn width={'100'} dataFormat={this.cellEdit}>Edit</TableHeaderColumn>
              <TableHeaderColumn width={'100'} dataFormat={this.cellDelete}>Delete</TableHeaderColumn>
            </BootstrapTable>
          </div>
        </div>
      </div>
    );
  }
}
