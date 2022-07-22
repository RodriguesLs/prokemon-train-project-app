import axios from 'axios'

const axiosInstance = axios.create({
  baseUrl: process.env.RAILS_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
