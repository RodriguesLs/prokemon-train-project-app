import axios from 'axios'

const api = axios.create({
  baseUrl: "http://localhost:3030"
});

export default api;
