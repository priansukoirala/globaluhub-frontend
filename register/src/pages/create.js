import { Component } from "react";
import { axiosPost } from "../utils/AxiosApi";
import { URL } from "../utils/Constants";
// import { useNavigate } from "react-router-dom";
import { displayErrorAlert } from "../utils/Utils";
import swal from "sweetalert";

class Create extends Component {
    state = {
        fname: '',
        lname: '',
        mname: '',
        gender: '',
        address: '',
        nationality: '',
        dob: '',
        education: '',
        contact_number: '',
        email: '',
        preferred_contact: '',
        nationalityList : [
            "Hindu",
            "Muslim",
            "Christian",
            "Budhhist",
        ],
        pContactList : [
            "Email",
            "Phone Number"
        ]
    };

    handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({ [name]: value });
    };
    
    handleSubmit = async (e, values) => {
        e.preventDefault();
        let data = {
            first_name: this.state.fname,
            middle_name: this.state.mname,
            last_name: this.state.lname,
            gender: this.state.gender,
            address: this.state.address,
            nationality: this.state.nationality,
            dob: this.state.dob,
            education: this.state.education,
            contact_number: this.state.contact_number,
            email: this.state.email,
            preferred_contact: this.state.preferred_contact,
        };
        console.log(data);
        try {
            axiosPost(URL.getAllClients, data, (response) => {
                if (response.data.success) {
                    this.handleSuccessfullResponse(response);
                } else {    
                    swal("Error", response.data.message, "error");
                    return false;
                }
              });
        } catch (error) {
            console.error('Error:', error);
            displayErrorAlert(error);
        }
    };

    handleSuccessfullResponse = response => {
        if (response.data.success) {
            swal("Success",response.data.message, "success");
        } else {
            displayErrorAlert(response);
        }
        // useNavigate('/home');
    };
    
    render() {
        return (
        <>
    
            <div className="container mt-3">
                <h3>Create Client <small>(Fill up the given form)</small></h3>
                <div className="row mb-3 mt-4">
                    <div className="col-4">
                        <label className="form-label">First Name <span className="text-danger">*</span></label>
                        <input type="text" name="fname" onChange={this.handleChange} className="form-control" placeholder="Eg. Harit" />
                    </div>
                    <div className="col-4">
                        <label className="form-label">Middle Name</label>
                        <input type="text" name="mname" onChange={this.handleChange} className="form-control" placeholder="Eg. Prasad" />
                    </div>
                    <div className="col-4">
                        <label className="form-label">Last Name <span className="text-danger">*</span></label>
                        <input type="text" name="lname" onChange={this.handleChange} className="form-control" placeholder="Eg. Rijal" />
                    </div>
                </div>
                <label className="form-label">Gender: <span className="text-danger">*</span></label>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="gender" id="inlineRadio1" value="female" onClick={this.handleChange} />
                    <label className="form-check-label" for="inlineRadio1">Female</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="gender" id="inlineRadio2" value="male" onClick={this.handleChange} />
                    <label className="form-check-label" for="inlineRadio2">Male</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="gender" id="inlineRadio3" value="other" onClick={this.handleChange} />
                    <label className="form-check-label" for="inlineRadio3">Other</label>
                </div>
                <div className="row mb-3">
                    <div className="col-4">
                        <label className="form-label">Address <span className="text-danger">*</span></label>
                        <input type="text" name="address" onChange={this.handleChange} className="form-control" placeholder="Eg. Kalanki" />
                    </div>
                    <div className="col-4">
                        <label className="form-label">Nationality <span className="text-danger">*</span></label>
                        {/* <input type="text" name="nationality" onChange={this.handleChange} className="form-control" /> */}
                        <select
                            onChange={this.handleChange}
                            name="nationality"
                            value={this.state.nationality}
                            className="form-control"
                        >
                            <option value="" disabled>
                            Choose Nationality
                            </option>
                            {this.state.nationalityList !== undefined
                            ? this.state.nationalityList.map((nationalityItem, id) => (
                                <option key={id} value={nationalityItem}>
                                    {nationalityItem}
                                </option>
                                ))
                            : null}
                        </select>
                    </div>
                    <div className="col-4">
                        <label className="form-label">Educational Background<span className="text-danger">*</span></label>
                        <input type="text" name="education" onChange={this.handleChange} className="form-control" placeholder="Eg. BPH" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-6">
                        <label className="form-label">Date of Birth (DOB) <span className="text-danger">*</span></label>
                        <input type="date" name="dob" onChange={this.handleChange} className="form-control" />
                    </div>
                    <div className="col-6">
                        <label className="form-label">Contact Number <span className="text-danger">*</span></label>
                        <input type="text" placeholder="Eg. 98439848484" name="contact_number" onChange={this.handleChange} className="form-control" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-6">
                        <label className="form-label">Email address <span className="text-danger">*</span></label>
                        <input type="email" placeholder="Eg. test@gmail.com" name="email" onChange={this.handleChange} className="form-control" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="col-6">
                        <label className="form-label">Preferred Contact</label>
                        <select
                            onChange={this.handleChange}
                            name="preferred_contact"
                            value={this.state.preferred_contact}
                            className="form-control"
                        >
                            <option value="" disabled>
                            Choose Any
                            </option>
                            {this.state.pContactList !== undefined
                            ? this.state.pContactList.map((pContactItem, id) => (
                                <option key={id} value={pContactItem}>
                                    {pContactItem}
                                </option>
                                ))
                            : null}
                        </select>
                    </div>
                </div>
                <div className="row mb-3"></div>
                <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
            </div>
        
        </>
        );
    }

}

export default Create;
