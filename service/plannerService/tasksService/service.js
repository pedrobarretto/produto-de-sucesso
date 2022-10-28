const { default: axios } = require('axios');


const app = axios.create({
  baseURL: `${process.env.PLANNER_URL}/v1/tasks`,
  headers: { 'authtoken': localStorage.getItem('authToken') }
});

export { app };