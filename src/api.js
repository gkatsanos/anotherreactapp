import axios from "axios";

axios.defaults.baseURL =
  process.env.NODE_ENV === "production"
    ? "https://missed-connections-server.herokuapp.com/"
    : "http://localhost:3001/";

export const fetchItems = (page, token) =>
  axios(`message/list/${page}`, {
    withCredentials: true,
  })
    .then((response) => response.data)
    .catch((err) => {
      throw err.response;
    });

export const registerUser = (data) =>
  axios
    .post("auth/register", data)
    .then((response) => response.data)
    .catch((err) => {
      throw err.response;
    });

export const login = (data) =>
  axios
    .post("auth/login", data, { withCredentials: true })
    .then((response) => response.data)
    .catch((err) => {
      throw err.response;
    });

export const authenticate = (activationId) =>
  axios(`auth/${activationId}`).then((response) => response.data);
