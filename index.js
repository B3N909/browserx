const Puppeteer = require("puppeteer");
class BrowserX extends Puppeteer {

    constructor (...params) {
        super(...params);
    }

    authenticate(apiKey) {
        // authenticate apiKey with server, response is the new websocket url
    }


    // returns Puppeteer Browser object
    async activate (apiKey, options) {
        this.apiKey = apiKey;

        // authenticate apiKey with server, response is the new websocket url
        
        this.wsEndpoint = await this.authenticate(apiKey);

        return await this.connect({
            browserWSEndpoint: this.wsEndpoint,
            ...options
        });
    }

}
module.exports = BrowserX;