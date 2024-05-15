import { Component } from 'react';
import ClientList from '../components/ClientList';
import { axiosGet } from '../utils/AxiosApi';
import { displayErrorAlert } from '../utils/Utils';
import { URL } from '../utils/Constants';
import axios from 'axios';
import { Link } from 'react-router-dom';
class Home extends Component {

    state = {
      clientList: [],
      modal: false,
      newRecord: true,
      client: null,
      currentPage: 1,
      pageSize: 7,
    };

    componentDidMount() {
      this.getAllClients();
    }

    getAllClients = () => {
      axiosGet(URL.getAllClients, response => {
        let list = response.data.data.data;
        this.setState({ clientList: list });
      },err => {
        displayErrorAlert(err.response);
      }
      );
    };

    handlePageChange = page => {
      this.setState({ currentPage: page });
    };
  
    handlePreviousPage = () => {
      if (this.state.currentPage !== 1) {
        this.setState(prevState => ({
          currentPage: prevState.currentPage - 1
        }));
      }
    };
  
    handleNextPage = () => {
      let nextPage = this.state.currentPage + 1;
      if (nextPage > Math.ceil(this.state.clientList.length / this.state.pageSize))
        return;
      else {
        this.setState({ currentPage: nextPage });
      }
    };  

    downloadFile = () => {
        try {
          const response = axios.get(URL.downloadClients, {
            responseType: 'blob',
          });
          const blobUrl = window.URL.createObjectURL(new Blob([response.data]));
    
          const link = document.createElement('a');
          link.href = blobUrl;
          link.setAttribute('download', 'Clients.csv');
    
          document.body.appendChild(link);
          link.click();
    
          document.body.removeChild(link);
        } catch (error) {
          console.error('Error downloading file:', error);
        }
      };
    
    render() {
        return (
          <>
            <div className='container'>
              <div className='row mt-5 mb-5'>
                <div className='col-6'>
                  <h3>List of Clients</h3>
                </div>

                <div className='col-3'>
                </div>
                
                <div className='col-3'>
                  <Link className="btn btn-success" to="/create">Create Client</Link>
                  &nbsp;
                  <button onClick={this.downloadFile} className='btn btn-primary'>Download File</button>
                </div>
              </div>
            <ClientList
              clientList={this.state.clientList}
              handlePageChange={this.handlePageChange}
              handlePreviousPage={this.handlePreviousPage}
              handleNextPage={this.handleNextPage}
              currentPage={this.state.currentPage}
              pageSize={this.state.pageSize}
            />
            </div>
          </>
        );
      }
}
export default Home;