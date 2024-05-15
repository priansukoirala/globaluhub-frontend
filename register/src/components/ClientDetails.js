import React, { Component } from "react";

class ClientDetails extends Component {  
  render() {
    return (
        <div className="card-body">
          <table className="table table-striped">
            <thead>
                <tr>
                    <th> Full Name </th>
                    <th> Gender </th>
                    <th> Date of Birth </th>
                    <th> Education </th>
                </tr>
                <tr>
                    <td> {this.props.originalData.first_name} {this.props.originalData.middle_name} {this.props.originalData.last_name}</td>
                    <td> {this.props.originalData.gender == 'female' ? 'Female' : this.props.originalData.gender == 'male' ? 'Male' : 'Other'}</td>
                    <td> {this.props.originalData.dob}</td>
                    <td> {this.props.originalData.education}</td>
                </tr>
                <tr>
                    <th> Email Address </th>
                    <td> {this.props.originalData.email } </td>
                    <th> Address </th>
                    <td> {this.props.originalData.address } </td>
                </tr>
                <tr>
                    <th> Contact Number </th>
                    <td> {this.props.originalData.contact_number } </td>
                    <th> Preferred Contact </th>
                    <td> Through {this.props.originalData.preferred_contact == 'email' ? 'Email' : 'Phone Number' } </td>
                </tr>
            </thead>
          </table>
        </div>
      );
  }
}

export default ClientDetails;
