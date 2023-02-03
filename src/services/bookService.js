import axios from "axios";
const baseUrl = "http://localhost:3005/books/";

function getAll() {
    const config = {
        headers: {
            Authorization: `bearer ${window.localStorage.getItem("token")}`,
        },
    };
    return axios.get(baseUrl, config);
}

export default { getAll };
