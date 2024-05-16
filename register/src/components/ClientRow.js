
import React, { Component } from "react";
import { axiosGet } from "../utils/AxiosApi";
import { URL } from "../utils/Constants";
import ModalWindow from "../UI/ModalWindow";
import ClientDetails from "./ClientDetails";
class ClientRow extends Component {
  state = {
    originalData : "",
    modelOpen: false,
  };

  toggleModal = () => {
    this.setState({ modelOpen: !this.state.modelOpen });
  };
  handleDetailsBtnClick = (param) => {
    this.setState({
      formData: param.requestData,
      modelOpen: !this.state.modelOpen,
    });
    this.getOriginalData(param.username);
  };

  getOriginalData = (username) => {
    axiosGet(URL.getSingleClients + `/${username}`, (res) => {
      if (res.data.success) {
        this.setState({
          originalData: res.data.data?.item,
        });
      }
    });
  };

  render() {
    let client = this.props.client;
    return (
      <>
      <tr key={client.id}>
        
        <td>{client.first_name} {client.middle_name == 'null' ? '' : client.middle_name} {client.last_name}</td>
        <td>{client.gender}</td>
        <td>{client.address}</td>
        <td>{client.email}</td>
        <td>
        <button className="btn btn-success" onClick={() => this.handleDetailsBtnClick(client)}> View</button>
        </td>
      </tr>

      <ModalWindow
      modal={this.state.modelOpen}
      toggleModal={this.toggleModal}
      className="xl-modal"
      size="xl"
      contentClassName="xl-modal-content"
      modalHeader="View Client Details"
      modalBody={
        <ClientDetails
          originalData={this.state.originalData}
          toggleModal={this.toggleModal}
        />
      }
      ></ModalWindow>
      </>
    );
  }
}

export default ClientRow;
