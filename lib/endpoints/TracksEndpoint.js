const ApiRequest = require('../ApiRequest');
const Endpoint = require('../Endpoint');

class TracksEndpoint extends Endpoint {
    
    constructor(config) {
        super("Tracks", config);
        this.apiUrl += `/${this.apiVersion}`;

    }

    gettingTrackById(id) {
        return this.executingRequest(`/tracks/${id}`);
    }
}

module.exports = TracksEndpoint;