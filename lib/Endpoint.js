
const ApiRequest = require('./ApiRequest');

const util = require('./util');
const {EndpointUtil, ErrorUtil} = util;

class Endpoint {
    
    constructor(name, config) {
        //super(config);
        this.name = name;
        this.config = config;
        
        this.apiVersion = this.config.API_VERSION;
        this.apiUrl = `https://${this.config.API_HOST}`;
        this.requestOptions = {token: this.config.API_KEY};
    }

    // Query string
    _buildURL(endpointUrl, options={}) {

        if(JSON.stringify(options) !== JSON.stringify({})) {
            const query = EndpointUtil.buildQueryStringFromOptions(options);
            return `${this.apiUrl}${endpointUrl}?${query}`;
        }

        return `${this.apiUrl}${endpointUrl}`;
    }

    executingRequest(endpointUrl, options = {}) {
        const requestUrl = this._buildURL(endpointUrl, options);

        //return requestUrl;
        // return ApiRequest.executing(requestUrl, this.requestOptions).then(response => {
        //     return response.data;
        // });
        return ApiRequest.executing(requestUrl, this.requestOptions);
    }
}

module.exports = Endpoint;