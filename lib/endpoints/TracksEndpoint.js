const ApiRequest = require('../ApiRequest');
const Endpoint = require('../Endpoint');

class TracksEndpoint extends Endpoint {
    
    constructor(config) {
        super("Tracks", config);
        this.apiUrl += `/${this.apiVersion}`;

    }

    /**
     * 
     * @param {string} id 
     * @returns {Axios<TrackAPI>}
     */
    
    gettingTrackById(id) {
        return this.executingRequest(`/tracks/${id}`);
    }

    gettingTrackAudioFeatures(id) {
        return this.executingRequest(`/audio-features/${id}`);
    }

    gettingTrackAudioAnalysis(id) {
        return this.executingRequest(`/audio-analysis/${id}`);
    }

}

module.exports = TracksEndpoint;