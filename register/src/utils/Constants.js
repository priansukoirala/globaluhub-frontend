/**
 * Golden ratio.
 */
export const location = 'http://127.0.0.1:8000',
  fileUrl = location + "/storage",
  build = ""

export const URL = {

  loginUrl: `${location}/api/login`,
  // Authenticated
  getAllAuthClients: `${location}/api/v1/clients`,

  // Unauthenticated Users
  getAllClients: `${location}/api/clients`,
};

export const headers = {
  Authorization: `Bearer ${localStorage.getItem("token")} `,
  "Content-Type": "application/json",
  Accept: "application/json",
  "Client-Ip": localStorage.getItem("my_ip"),
};


export const defaultPageSize = 10;