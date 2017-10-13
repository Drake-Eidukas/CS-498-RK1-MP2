import React, { Component } from 'react'
import { Button, Divider, Segment } from 'semantic-ui-react'

import {
  HashRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

import styles from '../../styles/Home/Home.scss'

import Genres from '../../assets/Genres'
import DetailPane from '../Detail/DetailPane.jsx'
import GalleryPane from '../Gallery/GalleryPane.jsx'

class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      movieIdList: [10555, 10556, 10557]
    }

    this.onNext = this.onNext.bind(this)
    this.onPrevious = this.onPrevious.bind(this)
    this.onNewIds = this.onNewIds.bind(this)
  }

  onNext (id) {
    window.location.href = `/#/detail/${parseInt(id) + 1}`    
  }

  onPrevious (id) {
    window.location.href = `/#/detail/${parseInt(id) - 1}`    
  }

  onNewIds (ids) {
    this.setState({
      movieIdList: ids
    })
  }

  render () {
    return (
      <Router className='routing-pane'>
        <div className='Home'>

          <Segment>
            <Button.Group labeled fluid>
              <Button icon='search' content='Search' size='massive' as={Link} to='/search' />
              <Button icon='grid layout' content='Gallery' size='massive' as={Link} to={'/gallery'} />
            </Button.Group>

            <Divider section />

            <Route exact path='/' render={() => {
              return <Redirect to='/search' />
            }} />

            <Route path='/search' render={() => { return <p>searchy boye</p> }} />

            <Route path='/gallery' render={() => { return <GalleryPane OnNewIds={this.onNewIds} MovieIds={this.state.movieIdList} /> }} />

            <Route path='/detail/:id' render={({ match }) => {
              return <DetailPane MovieId={match.params.id} OnPrevious={this.onPrevious} OnNext={this.onNext} />
            }} />
          </Segment>

        </div>
      </Router>
    )
  }
}

export default Home
