import PropTypes from 'prop-types'
import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import styles from '../../styles/Routing/RoutingPane.scss'
import colors from '../../styles/_colors.scss'
import { Button } from 'semantic-ui-react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class RoutingPane extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    console.log(colors)
    return (
      <Router className='routing-pane'>
        <Button.Group labeled fluid>
          <Link to='/search'>
            <Button active={this.props.CurrentView === 'search'} icon='search' content='Search' size='massive' />
          </Link>
          <Link to='/gallery'>
            <Button active={this.props.currentView === 'gallery'} icon='grid layout' content='Gallery' size='massive' />
          </Link>
        </Button.Group>
      </Router>
    )
  }
}

export default RoutingPane
