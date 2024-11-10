import axios from "axios";


const api = axios.create({
    url: "http://127.0.0.1:4444",
});

export {
    api
}