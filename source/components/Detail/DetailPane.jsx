import PropTypes from 'prop-types'
import React, {Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import styles from './DetailPane.scss'
import Details from './Details.jsx'
import DetailNavigationBar from './DetailNavigationBar.jsx'


class DetailPane extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div className="detail-pane">
                <DetailNavigationBar OnNext={()=>{}} OnPrevious={()=>{}} />
                <Details MovieDescription={this.props.MovieDescription} MovieTitle={this.props.MovieTitle} MovieImageSrc={this.props.MovieImageSrc} />
            </div>
        )
    }
}

export default DetailPane
