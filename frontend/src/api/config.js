import axios from 'axios';
const api =axios.create({
    baseUrl:  'http://localhost:5000', 
    timeout: 10000,
})
export default api;