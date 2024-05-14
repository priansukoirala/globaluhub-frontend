import swal from "sweetalert";
// import Moment from "react-moment";
import userImage from "../assets/images/user-image.png";

export const wildcardFilterArray = (str, array) =>
  array.filter((item) =>
    new RegExp("^" + str.toLowerCase().replace(/\*/g, ".*") + "$").test(
      item.toLowerCase()
    )
  );

export const wildcardFilterObjectArray = (str, array) =>
  array.filter((item) =>
    new RegExp("^" + str.toLowerCase().replace(/\*/g, ".*") + "$").test(
      item.name.toLowerCase()
    )
  );

/**
 *
 * @param {HttpResponse} response
 * @description Displays an error alert box. Built specifically for displaying http error message.
 */
export const displayErrorAlert = (response) => {
  swal(
    "Error",
    response
      ? response.data
        ? response.data.message
        : "Some error occured"
      : "Some error occured",
    "error"
  );
};


export const displaySuccessAlert = (response, callback, param) => {
  swal("Success", response.data.message, "success").then(() => {
    if (callback) callback(param);
  });
};

export const displayConfirmDeleteAlert = (params, handleDelete) => {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this record!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((deleteConfirm) => {
    if (deleteConfirm) {
      handleDelete(params);
    } else {
      swal("Your record is safe!");
    }
  });
};


export const handleError = (e) => {
  e.target.src = userImage;
};

export const convertCamelCaseToSentenceCase = (camelCase) => {
  // adding space between strings
  const result = camelCase.replace(/([A-Z])/g, " $1");

  // converting first character to uppercase and join it to the final string
  const sentenceCase = result.charAt(0).toUpperCase() + result.slice(1);
  return sentenceCase;
};

export const bytesToMegaBytes = (bytes) => bytes / (1024 * 1024);

export const getPersonProfileFullName = (pp) => {
  const pP = pp.personProfile;
  if (pP.middleName !== "" || pP.middleName !== null) {
    return `${pP.firstName} ${pP.middleName} ${pP.lastName}`;
  } else {
    return `${pP.firstName} ${pP.lastName}`;
  }
};

export const getFullName = (f, m, l) => {
  if (f && l && f !== "" && f !== null && l !== "" && l !== null) {
    if (m !== "" || m !== null) {
      return `${f} ${m} ${l}`;
    } else {
      return `${f} ${l}`;
    }
  } else {
    return null;
  }
};
