import axios from 'axios';

const api = axios.create({
  baseURL: 'https://remote-demining.onrender.com/',
});

export default api;
