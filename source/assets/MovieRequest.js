import Axios from 'axios'

class MovieRequest {
  /**
   * Instantiate the MovieFetcher with an API Key for the api, as well as a configuration object to instantiate axios with.
   * @param {string} apiKey API key to use with TMDB
   */
  constructor (apiKey = '70f874b8df6b617b38ea97652636d663') {
    this.params = {
      api_key: apiKey,
      language: 'en_us'
    }

    this.configuration = {
      baseURL: 'https://api.themoviedb.org/3'
    }
  }

  method (method) {
    this.configuration.method = method

    return this
  }

  headers (headers) {
    this.configuration.headers = headers

    return this
  }

  data (data) {
    this.configuration.data = data

    return this
  }

  timeout (timeout) {
    this.configuration.timeout = timeout

    return this
  }

  responseType (responseType) {
    this.configuration.responseType = responseType

    return this
  }

  maxContentLength (maxContentLength) {
    this.configuration.maxContentLength = maxContentLength

    return this
  }

  maxRedirects (maxRedirects) {
    this.configuration.maxRedirects = maxRedirects

    return this
  }

  searchMovies (params) {
    return this._makeRequest(params, '/search/movie')
  }

  discoverMovies (params) {
    return this._makeRequest(params, '/discover/movie')
  }

  getMovieById (id) {
    return this._makeRequest({}, `/movie/${id}`)
  }

  _makeRequest (params, url) {
    let config = this.configuration
    config.params = this._mergeParams(params)
    config.url = url

    return Axios(config)
  }

  /**
   * Given some params to use in a request, creates a params object to use in the request.
   * @param {any} toMerge Params object to merge in.
   * @memberOf MovieRequest
   */
  _mergeParams (toMerge) {
    let newParams = this.params

    for (let key in toMerge) {
      if (toMerge.hasOwnProperty(key)) {
        newParams[key] = toMerge[key]
      }
    }

    return newParams
  }
}

export default MovieRequest
