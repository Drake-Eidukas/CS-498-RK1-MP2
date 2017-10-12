/**
 * Class to create parameters for api calls to the tmdb api.
 * We allow users to sort based on popularity, release date, revenue, alphabetically / title, vote average, vote count, as well as include adult content or not and with a given genre.
 * @class DiscoverParamsBuilder
 */
class DiscoverParamsBuilder {
  constructor () {
    this.params = {}
  }

  _sortBy (type, ascending) {
    this.params['sort_by'] = type + this._sortDirection(ascending)

    return this
  }

  sortByPopularity (ascending) {
    return this._sortby('popularity', ascending)
  }

  sortByReleaseDate (ascending) {
    return this._sortby('release_date', ascending)
  }

  sortByRevenue (ascending) {
    return this._sortby('revenue', ascending)
  }

  sortByOriginalTitle (ascending) {
    return this._sortby('original_title', ascending)
  }

  sortByVoteAverage (ascending) {
    return this._sortby('vote_average', ascending)
  }

  sortByVoteCount (ascending) {
    return this._sortby('vote_count', ascending)
  }

  page (page) {
    this.params['page'] = page

    return this
  }

  includeAdult (includeAdult) {
    this.params['include_adult'] = includeAdult

    return this
  }

  _sortDirection (ascending) {
    return (ascending) ? '.asc' : '.desc'
  }
}

export default DiscoverParamsBuilder
