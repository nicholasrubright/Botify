const util = require('./util');
const {EndpointUtil, ErrorUtil} = util;

class Endpoint {
    
    constructor(name, config) {
        //super(config);
        this.name = name;
        this.config = config;
        
        this.apiVersion = this.config.API_VERSION;
        this.apiUrl = `https://${this.config.API_HOST}/${this.config.API_VERSION}`;
        this.requestOptions = {token: this.config.API_KEY};
    }

    _buildURL(endpointUrl, options={}) {
        const query = EndpointUtil.buildQueryStringFromOptions(options);
        return ``
    }

    executingRequest(endpointUrl, options = {}) {

        const requestUrl = this._buildURL(endpointUrl, options);

        return ApiRequest.executing(requestUrl, this.requestOptions)
            .then(response => {
                return response;
            });
    }
}

// let configTest = new Config();

// let test = new Endpoint("yippe", configTest);


// console.log("url: " + test.apiUrl);

//console.log("testing: " + JSON.stringify(config));