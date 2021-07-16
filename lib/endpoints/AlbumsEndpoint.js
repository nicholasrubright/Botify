const ApiRequest = require('../ApiRequest');
const Endpoint = require('../Endpoint');

class AlbumsEndpoint extends Endpoint {

    constructor(config) {
        super("Albums", config);
        this.apiUrl += `/${this.apiVersion}`;
    }

    gettingAlbumById(id) {
        return this.executingRequest(`/albums/${id}`);
    }

    gettingAlbumTracksById(id) {
        return this.executingRequest(`/albums/${id}/tracks`);
    }

}

module.exports = AlbumsEndpoint;