import axios from "axios";
import swal from "sweetalert2";
import { headers, URL } from "./Constants";

export const axiosGet = (url, successCallback, failureCallback) => {
  axios
    .get(url, { headers })
    .then(
      successCallback ||
        function (response) {
          swal("Success", response.message, "success");
        }
    )
    .catch(
      failureCallback ||
        function (error) {
          if (error.response?.status === 401) {
            localStorage.clear();
            // history.push(`${process.env.PUBLIC_URL}/`);
          }
          swal("Erro", error.message, "error");
        }
    );
};

export const axiosPost = (url, params, successCallback, failureCallback) => {
  let doPost = "";
  if (url !== URL.loginUrl) {
    doPost = axios.post(url, params, { headers });
  } else {
    doPost = axios.post(url, params);
  }
  doPost
    .then(
      successCallback ||
        function (response) {
          swal("Success", response.data.message, "success");
        }
    )
    .catch(
      failureCallback ||
        function (error) {
          if (error.response?.status === 401) {
            localStorage.clear();
            // history.push(`${process.env.PUBLIC_URL}/`);
          }
          let errorResponse = error.response ? error.response.data : error;
          let errMessage = "";
          if (errorResponse.errors && errorResponse.errors.length > 0) {
            errMessage = errorResponse.errors[0].defaultMessage;
          }
          swal(
            errorResponse.error ||
              errorByStatusMessages[error.response?.status],
            errMessage !== "" ? errMessage : errorResponse.message,
            "error"
          );
        }
    );
};

export const axiosDelete = (url, successCallback, failureCallback) => {
  axios
    .delete(url, { headers })
    .then(
      successCallback ||
        function (response) {
          swal("Success", response.message, "success");
        }
    )
    .catch(
      failureCallback ||
        function (error) {
          let errorResponse = error.response ? error.response.data : error;
          swal(
            errorResponse.error || "Forbidden Deletion",
            errorResponse.message,
            "error"
          );
        }
    );
};

export const axiosPut = (url, params, successCallback, failureCallback) => {
  axios
    .put(url, params, { headers })
    .then(
      successCallback ||
        function (response) {
          swal("Success", response.message, "success");
        }
    )
    .catch(
      failureCallback ||
        function (error) {
          let errorResponse = error.response ? error.response.data : error;
          swal(
            errorResponse.error || "Update Forbidden",
            errorResponse.message,
            "error"
          );
        }
    );
};

const errorByStatusMessages = {
  400: "Bad Request",
  401: "Unauthorized",
  402: "Payment_Required",
  403: "Forbidden",
  404: "Not_Found",
  405: "Method_Not_Allowed",
  406: "Not_Acceptable",
  407: "Authentication_Required",
  408: "Request_Timeout",
  500: "Internal_Server_Error",
  501: "Not_Implemented",
  502: "Bad_Gateway",
  503: "Service_Unavailable",
  504: "Gateway_Timeout",
};
