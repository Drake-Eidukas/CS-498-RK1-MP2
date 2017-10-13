class SearchParamsBuilder {
  constructor () {
    this.params = {
      'include_adult': false
    }
  }

  query (query) {
    this.params['query'] = query

    return this
  }
}

export default SearchParamsBuilder
