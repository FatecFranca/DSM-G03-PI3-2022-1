import axios from "axios";
const token = localStorage.getItem('x-access-token')


const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {'Content-Type': 'application/json', 'x-access-token': token}
});

export default api;