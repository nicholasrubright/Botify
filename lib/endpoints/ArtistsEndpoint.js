const ApiRequest = require('../ApiRequest');
const Endpoint = require('../Endpoint');

class ArtistsEndpoint extends Endpoint {

    constructor(config) {
        super("Artists", config);
        this.apiUrl += `/${this.apiVersion}`;
    }

    gettingArtistById(id) {
        return this.executingRequest(`/artists/${id}`);
    }

    gettingArtistTopTracksById(id) {
        return this.executingRequest(`/artists/${id}/top-tracks`);
    }

    gettingArtistRelatedArtistsById(id) {
        return this.executingRequest(`/artists/${id}/related-artists`);
    }

    gettingArtistAlbumsById(id) {
        return this.executingRequest(`/artists/${id}/albums`);
    }

}