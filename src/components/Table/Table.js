import React, { PropTypes } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import CellHistory from '../CellHistory/CellHistory';
import CellButton from '../CellButton/CellButton';

export default class DefaultPaginationTable extends React.Component {

  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    getHistory: PropTypes.func,
    deleteContact: PropTypes.func,
    showForm: PropTypes.func
  }

  cellHistory = (cell, row) => {
    return <CellHistory onClick={this.props.getHistory} cell={cell} row={row} />;
  }

  cellEdit = (cell, row) => {
    return <CellButton onClick={this.props.showForm} type="warning" cell={cell} row={row}>Edit</CellButton>;
  }

  cellDelete = (cell, row) => {
    return <CellButton onClick={this.props.deleteContact} type="danger" cell={cell} row={row}>Delete</CellButton>;
  }

  render() {
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h2>Contacts (<span>{this.props.data.length}</span>)</h2>
            <button className="btn btn-primary" onClick={() => this.props.showForm()}>Create</button>
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
