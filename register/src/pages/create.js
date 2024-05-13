import { Component } from "react";
import { axiosPost } from "../utils/AxiosApi";
import { URL } from "../utils/Constants";
import swal from 'sweetalert';
import {
    displayErrorAlert,
} from "../utils/Utils";

class Create extends Component {

    state = {
        fname: null,
        lname: null,
        mname: null,
    };

    handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({ [name]: value });
    };
    

    // handleSubmit = (e, values) => {
    //     console.log('here');
    //     e.preventDefault();
    //     let data = {
    //       fname: this.state.fname,
    //       lname: this.state.lname,
    //       mname: this.state.mname
    //     };
    
    //     axiosPost(URL.getAllAuthClient, data, response => {
    //       this.handleSuccessfullResponse(response);
    //     });
    // };
    handleSubmit = async (e, values) => {
        e.preventDefault();
        let data = {
            first_name: this.state.fname,
            middle_name: this.state.mname,
            last_name: this.state.lname,
            username: "priansu_koirala",
            gender: "female",
            address: "Kalanki",
            nationality: "hindu",
            dob: "1996-09-09",
            education: "BPH",
            contact_number:"9874345667",
            email: "koiralapriansu@gmail.com",
            password: "priansu123!@#"
        };
    
        try {
            axiosPost(URL.getAllClients, data, (response) => {
                if (response.data.success) {
                  this.setState({
                    first_name: "",
                    middle_name: "",
                    last_name: "",
                    username: "",
                    gender: "",
                    address: "",
                    nationality: "",
                    dob: "",
                    education: "",
                    contact_number:"",
                    email: "",
                    password: ""
                  });
                    this.handleSuccessfullResponse(response);

                } else {
                  this.setState({
                    submitSpinner: false,
                  });
                  swal("Error", response.message, "error");
                  return false;
                }
              });
        } catch (error) {
            // Handle error
            console.error('Error:', error);
            displayErrorAlert(error);
        }
    };

    handleSuccessfullResponse = response => {
        if (response.data.success) {
            swal("Success", response.data.message, "success");
        } else {
            displayErrorAlert(response);
        }
    };
    
    render() {
        return (
        <>
        
        <div className="container mt-3">
            <h3>Create User <small>(Fill up the given form)</small></h3>
            <div className="mb-3">
                <label className="form-label">First Name <span className="text-danger">*</span></label>
                <input type="text" onChange={this.handleChange} className="form-control" />
                <label className="form-label">Middle Name</label>
                <input type="text" onChange={this.handleChange} className="form-control" />
                <label className="form-label">Last Name <span className="text-danger">*</span></label>
                <input type="text" onChange={this.handleChange} className="form-control" />
            </div>
            <label className="form-label">Gender: <span className="text-danger">*</span></label>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="female" />
                <label className="form-check-label" for="inlineRadio1">Female</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="male" />
                <label className="form-check-label" for="inlineRadio2">Male</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="other" />
                <label className="form-check-label" for="inlineRadio3">Other</label>
            </div>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
        </div>
        
        </>
        );
    }

}

export default Create;
