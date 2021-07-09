const ApiRequest = require('../ApiRequest');
const { module } = require('../Botify');
const Endpoint = require('../Endpoint');

class SearchEndpoint extends Endpoint {
    
    constructor(config) {
        super('Search', config);
        this.apiUrl += `/search`
    }

    /**
     * 
     * @param {string} keyword 
     * @returns {Axios}
     */
    gettingByKeyword(keyword) {
        return this.executingRequest(`?query=${encodeURIComponent(keyword)}`);
    }
}

module.exports = SearchEndpoint;