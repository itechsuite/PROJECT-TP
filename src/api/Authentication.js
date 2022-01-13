import axios from 'axios';

export default axios.create({
  baseURL: 'http://192.168.43.109:5000/',
  headers: {
    'Content-Type': 'application/json',
  },
});
