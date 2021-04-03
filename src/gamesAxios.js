const { default: axios } = require('axios');

const gamesAxios = axios.create({
  baseURL: 'http://localhost:8000',
});

export default gamesAxios;
