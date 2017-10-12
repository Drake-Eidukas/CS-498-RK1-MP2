import PropTypes from 'prop-types';
import React, { Component } from 'react'


class Details extends Component {
    /**
     * Takes in props, which should take in a number representing the id of a movie. 
     * @param {*} props 
     */
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div className="description-box">
                <div className="center-horizontal-box">
                    <h2 className="description-title">{this.props.MovieTitle}</h2>
                </div>
                <div className="center-horizontal-box">
                    <img src={this.props.MovieImageSrc}/>
                </div>
                <div className="center-horizontal-box">
                    <p className="description-description">{this.props.MovieDescription}</p>
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
