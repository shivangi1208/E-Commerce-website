import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-9c008/us-central1/api',//baseURL is the url that we want to use for all requests to the api 
});

export default instance;