import axios from 'axios';

export default {
    // Get all staff from random user generator api
    getUsers: function () {
        return axios.get("https://randomuser.me/api/?results=50&nat=us");
    },
};