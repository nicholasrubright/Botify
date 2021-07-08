

let botifyDefaultConfig = {
    'API_HOST': 'api.spotify.com',
    'API_VERSION': 'v1'
}

class Config {
    constructor() {
        this.defaults = botifyDefaultConfig;
        
    }
}

module.exports = Config;