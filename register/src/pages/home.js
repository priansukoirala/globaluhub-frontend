import { Component } from 'react';
import ClientList from '../components/ClientList';
import { axiosGet } from '../utils/AxiosApi';
import { displayErrorAlert } from '../utils/Utils';
import { URL } from '../utils/Constants';
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
        // alert(err.message);
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
    render() {
        return (
          <>
            <ClientList
              clientList={this.state.clientList}
              handlePageChange={this.handlePageChange}
              handlePreviousPage={this.handlePreviousPage}
              handleNextPage={this.handleNextPage}
              currentPage={this.state.currentPage}
              pageSize={this.state.pageSize}
            />
          </>
        );
      }
}
export default Home;