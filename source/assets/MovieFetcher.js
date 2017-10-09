var axios = require('axios')

class MovieFetcher {
    /**
     * Instantiate the MovieFetcher with an API Key for the api, as well as a configuration object to instantiate axios with. 
     * @param {string} apiKey 
     * @param {Object} axiosConfiguration 
     */
    constructor (apiKey, axiosConfiguration) {
        this.apiKey = apiKey; 
        this.instance = axios.create(configuration);
    }

    /**
     * Takes in parameters for the API Request to search the api with. 
     * Params may take any of the values from within https://developers.themoviedb.org/3/search/search-movies
     * @param {*} params 
     */
    searchMovies(params) {

        params.api_key = this.apiKey;
        let p = {
            params: params
        }

        this.instance.request(p).then((res) => {
            console.log(res)
        });    
    }
}

module.exports = MovieFetcher;