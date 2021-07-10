const ApiRequest = require('../ApiRequest');
const Endpoint = require('../Endpoint');

class SearchEndpoint extends Endpoint {
    
    constructor(config) {
        super('Search', config);
        this.apiUrl += `/${this.apiVersion}`;
    }

    /**
     * 
     * @param {string} keyword
     * @param {number} offset
     * @param {limit} limit
     * @return {AxiosResponse}
     */
    gettingArtistByKeyword(keyword, offset=0, limit=20) {
        return this.executingRequest('/search' ,{q: keyword, type: "artist", offset:offset, limit:limit});
    }

    /**
     * 
     * @param {string} keyword
     * @param {number} offset
     * @param {limit} limit
     * @return {AxiosResponse}
     */
    gettingAlbumByKeyword(keyword, offset=0, limit=20) {
        return this.executingRequest('/search' ,{q: keyword, type: "album", offset:offset, limit:limit});
    }

    /**
     * 
     * @param {string} keyword
     * @param {number} offset
     * @param {limit} limit
     * @return {AxiosResponse}
     */
    gettingPlaylistByKeyword(keyword, offset=0, limit=20) {
        return this.executingRequest('/search' ,{q: keyword, type: "playlist", offset:offset, limit:limit});
    }
}

module.exports = SearchEndpoint;