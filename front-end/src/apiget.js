import axios from "axios";


const apiget = axios.get({
  baseURL: "http://localhost:3000",
  headers: {'Content-Type': 'application/json'}
});

export default apiget;