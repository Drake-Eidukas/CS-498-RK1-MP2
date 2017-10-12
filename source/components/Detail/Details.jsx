import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styles from '../../styles/Detail/Details.scss'

class Details extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='description-box'>
        <div className='center-horizontal-box'>
          <h2 className='description-title'>{this.props.MovieTitle}</h2>
        </div>
        <div className='center-horizontal-box'>
          <img src={this.props.MovieImageSrc} />
        </div>
        <div className='center-horizontal-box'>
          <p className='description-description'>{this.props.MovieDescription}</p>
        </div>
      </div>
    )
  }
}

Details.PropTypes = {
  MovieDescription: PropTypes.string.isRequired,
  MovieTitle: PropTypes.string.isRequired,
  MovieImageSrc: PropTypes.string.isRequired
}

export default Details
