const { default: axios } = require('axios');


const app = axios.create({
  baseURL: `${process.env.PLANNER_URL}/v1/goal`,
  headers: { 'authtoken': localStorage.getItem('authToken') }
});

export { app };