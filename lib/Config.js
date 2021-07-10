

let botifyDefaultConfig = {
    'API_HOST': 'api.spotify.com',
    'API_VERSION': 'v1'
}

class Config {
    constructor(options) {
        this.defaults = botifyDefaultConfig;
        this.current = {...options, ...this.defaults}
        return this.current;
    }
}

module.exports = Config;