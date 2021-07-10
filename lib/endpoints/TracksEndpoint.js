const ApiRequest = require('../ApiRequest');
const Endpoint = require('../Endpoint');

class TracksEndpoint extends Endpoint {
    
    constructor(config) {
        super("Tracks", config);
        this.apiUrl += `/tracks`;

        this.requestOptions = {token: this.config.API_KEY};
    }

    executingRequest(endpointUrl) {
        return ApiRequest.executing(this.requestOptions, this.requestOptions);
    }
}

module.exports = TracksEndpoint;