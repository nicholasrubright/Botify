// ApiRequest fills in the request header and params for the axios request
const axios = require('axios');


class ApiRequest {

    static executing(url, config) {
        return axios.get(url, config);
    }

}

module.exports = ApiRequest;