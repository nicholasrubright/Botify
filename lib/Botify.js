'use strict';

const Config = require('./Config');

// Endpoints
const TracksEndpoint = require('./endpoints/TracksEndpoint');
const SearchEndpoint = require('./endpoints/SearchEndpoint');

class Botify {
    
    constructor(apiKey, options={}) {

        options.API_KEY = apiKey;

        this.config = new Config(options);

        if (typeof this.config.API_KEY === 'undefined' || this.config.API_KEY === '') {
            throw new Error('The Authentication token is needed. Please pass it as a parameter');
        }

        this.Tracks = new TracksEndpoint(this.config);
        this.Search = new SearchEndpoint(this.config);

        this._endpoints = [
            this.Tracks,
            this.Search,
        ];
    }

    getConfig() {
        return this.config;
    }
}

module.exports = Botify;