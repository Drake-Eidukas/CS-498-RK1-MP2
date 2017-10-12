class DiscoverParamsBuilder {
  constructor () {
    this.params = {}
  }

  region (region) {
    this.params['region'] = region

    return this
  }

  year (year) {
    this.params['year'] = year

    return this
  }

  page (page) {
    this.params['page'] = page

    return this
  }

  includeAdult (includeAdult) {
    this.params['include_adult'] = includeAdult
  }
}

module.exports = DiscoverParamsBuilder
