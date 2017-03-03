import { create } from 'apisauce';

// define the api
const api = create({
  baseURL: 'http://localhost:3030',
  headers: { 
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

export default api;