// ApiRequest fills in the request header and params for the axios request
const axios = require('axios');


class ApiRequest {

    static executing(url, {token} = {}) {
        
        //return "geting url: " + url + "\nwith headers: " + `{Authorization: Bearer ${token}`;
        console.log("url: " + url);
        return axios.get(url, {
            headers: {'Authorization': `Bearer ${token}`}
        });
    };

}

module.exports = ApiRequest;