import PropTypes from 'prop-types'
import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react'
import styles from '../../styles/Detail/DetailNavigationBar.scss'

class DetailNavigationBar extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='description-navbar-box'>
        <Button content='Previous' icon='arrow left' labelPosition='left' floated='left' onClick={this.props.OnPrevious} size='big' />
        <Button content='Next' icon='arrow right' labelPosition='right' floated='right' onClick={this.props.OnNext} size='big' />
      </div>
    )
  }
}

DetailNavigationBar.PropTypes = {
  OnPrevious: PropTypes.func.isRequired,
  OnNext: PropTypes.func.isRequired
}

export default DetailNavigationBar
