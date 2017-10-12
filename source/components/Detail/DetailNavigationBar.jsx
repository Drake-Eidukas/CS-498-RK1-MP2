import PropTypes from 'prop-types';
import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css';

class DetailNavigationBar extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div className="description-navbar-box">
                <button className="ui labeled icon left floated button">
                    <i className="left arrow icon"></i>
                    Previous
                </button>

                <button className="ui right labeled icon right floated button">
                    <i className="right arrow icon"></i>
                    Next
                </button>


            </div>
        )
    }
}

export default DetailNavigationBar