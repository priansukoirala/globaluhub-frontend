
import React, { Component } from "react";
class ClientRow extends Component {
  state = {};

  render() {
    let client = this.props.client;
    return (
      <tr key={client.id}>
        
        <td>{client.first_name} {client.middle_name} {client.first_name}</td>
      </tr>
    );
  }
}

export default ClientRow;
