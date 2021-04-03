const { default: axios } = require('axios');

const gamesAxios = axios.create({
  baseURL: 'https://api.rawg.io/api',
});

export default gamesAxios;
