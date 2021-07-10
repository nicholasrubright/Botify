const ApiRequest = require('../ApiRequest');
const Endpoint = require('../Endpoint');

class SearchEndpoint extends Endpoint {
    
    constructor(config) {
        super('Search', config);
        this.apiUrl += `/${this.apiVersion}`;

        // this.type = {
        //     ARTIST: "artist",
        //     ALBUM: "album",
        //     PLAYLIST: "playlist",
        //     TRACK: "track",
        //     SHOW: "show",
        //     EPISODE: "episode"
        // };
    }

    /**
     * 
     * @param {string} keyword 
     * @param {string} type
     * @returns {Axios}
     */
    gettingByKeyword(keyword, type) {
        return this.executingRequest('/search' ,{q: keyword, type: type});
    }
}

module.exports = SearchEndpoint;