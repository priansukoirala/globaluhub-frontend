export function validateData(name, value) {
  let data = {};

  if (
    name === "phoneNumber"
  ) {
    var numbers = /^[0-9]+$/;
    var regex = /^[0-9\)\(\+\- ]*$/;

    if (value.length > 20) {
      data = {
        status: false,
        message: "Too long",
      };
    } else {
      if (value.match(regex) || value.length === 0) {
        data = {
          status: true,
        };
      } else {
        data = {
          status: false,
          message: "Only numeric + ( ) - characters allowed",
        };
      }
    }
  } else {
    let len = 0;
    if (name === "emailId") {
      len = 200;
    } else {
      len = 100;
    }
    if (value.length > len) {
      data = {
        status: false,
        message: "Words are too long",
      };
    } else {
      data = {
        status: true,
      };
    }

  }
  return data;
}

export function emailValidate(value) {
  let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
  if (emailReg.test(value)) {
    return true;
  }
  return false;
}

export function phoneValidate(value) {
  let numbers = /^[0-9]+$/;
  if (numbers.test(value)) {
    return true;
  }
  return false;
}

export function CheckIsValidDomain(domain) {
  var exp =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;

  var re = new RegExp(exp);
  return domain.match(re);
}
