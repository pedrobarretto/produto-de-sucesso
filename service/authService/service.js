const { default: axios } = require('axios');
const { default: dotenv } = require('dotenv');

const app = axios.create({
  baseURL: `${process.env.AUTH_URL}/v1/auth`
});

export { app };