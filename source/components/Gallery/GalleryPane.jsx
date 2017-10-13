import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GallerySearchPane from './GallerySearchPane.jsx'
import DiscoverParamsBuilder from '../../assets/DiscoverParamsBuilder.js'
import MovieRequest from '../../assets/MovieRequest.js'
import GalleryResultsPane from './GalleryResultsPane.jsx'

class GalleryPane extends Component {
  constructor (props) {
    super(props)

    this.state = {movies: []}
    this.changedSearch = this.changedSearch.bind(this)
  }

  changedSearch (searchData) {
    let paramBuilder = new DiscoverParamsBuilder()
    let params = paramBuilder.page(searchData.page)
                             .withGenres(searchData.genres)
                             ._sortBy(searchData.sortBy, searchData.sortDirection)
                             .includeAdult(false)
                             .params

    let movieRequest = new MovieRequest()
    movieRequest.discoverMovies(params).then((response) => {
      let results = response.data.results

      this.setState({
        movies: results.map((elem) => {
          return {
            id: elem.id,
            img: `https://image.tmdb.org/t/p/original${elem.poster_path}`,
            title: elem.original_title,
            date: elem.release_date,
            overview: elem.overview
          }
        })
      })
    })
  }

  render () {
    return (
      <div className='gallery-pane'>
        <GallerySearchPane OnDataChange={this.changedSearch} />
        <GalleryResultsPane Movies={this.state.movies} />
      </div>
    )
  }
}

GalleryPane.PropTypes = {
  OnNewIds: PropTypes.func.isRequired,
  MovieIds: PropTypes.array.isRequired
}

export default GalleryPane
