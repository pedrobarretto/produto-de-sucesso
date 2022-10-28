const { default: axios } = require('axios');


const app = axios.create({
  baseURL: `${process.env.AUTH_URL}/v1/auth`
});

export { app };