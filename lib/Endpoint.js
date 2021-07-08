

class Endpoint {
    constructor(name, config) {
        super(config);
        this.name = name;

        this.apiVersion = this.config.API_VERSION;
        this.apiUrl `https://${this.config.API_HOST}/${this.config.API_VERSION}`;
        this.requestOptions = {token: this.config.API_KEY};
    }
}