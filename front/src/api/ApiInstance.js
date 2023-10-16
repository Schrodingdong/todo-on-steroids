import axios from "axios";

const url = 'http://127.0.0.1:54096/todo';

const ApiInstance = axios.create({
    baseURL: url,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default ApiInstance;