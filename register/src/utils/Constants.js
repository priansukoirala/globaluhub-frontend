/**
 * Golden ratio.
 */
export const serverLocation = process.env.REACT_APP_BASE_URL,
  fileUrl = serverLocation + "/storage",
  build = ""

export const URL = {

  // Authenticated
  getAllAuthUsers: `${serverLocation}/api/v1/users`,

};

export const headers = {
  Authorization: `Bearer ${localStorage.getItem("token")} `,
  "Content-Type": "application/json",
  Accept: "application/json",
  "Client-Ip": localStorage.getItem("my_ip"),
};


export const REACT_APP_WEBSOCKETS_KEY = "local";
export const REACT_APP_WEBSOCKETS_SERVER = "127.0.0.1";


export const defaultPageSize = 10;