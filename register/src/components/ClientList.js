import React, { Component } from "react";
import { Table } from "reactstrap";
import ClientRow from "../components/ClientRow";
import { paginate } from "../utils/paginate";
import Pagination from "../UI/Pagination";

class ClientList extends Component {
  state = {};

  tableRow() {
    const list = paginate(
      this.props.clientList,
      this.props.currentPage,
      this.props.pageSize
    );
    return list.map((client, i) => {
      return (
        <ClientRow
          client={client}
          key={i}
        />
      );
    });
  }
  render() {
    return (
      <div className="countryTable mt-2">
        <Table striped bordered>
          <thead>
            <tr className="table-head">
              <th>Name</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {
            this.props.clientList.length <= 0 ? (
                <tr>
                    <td>No records</td>
                </tr>
            ) : (
              this.tableRow()
            )}
          </tbody>
        </Table>

        <Pagination
          itemsCount={this.props.clientList.length}
          // itemsCount='3'
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChange={this.props.handlePageChange}
          previousPage={this.props.handlePreviousPage}
          nextPage={this.props.handleNextPage}
        />
      </div>
    );
  }
}

export default ClientList;
