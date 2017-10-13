import React, { Component } from 'react'
import { Button, Divider, Segment } from 'semantic-ui-react'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

import styles from '../../styles/Home/Home.scss'

import Genres from '../../assets/Genres'
import DetailPane from '../Detail/DetailPane.jsx'
import GalleryPane from '../Gallery/GalleryPane.jsx'
import SearchPane from '../Search/SearchPane.jsx'

class Home extends Component {
  constructor (props) {
    super(props)

    this.onNext = this.onNext.bind(this)
    this.onPrevious = this.onPrevious.bind(this)
    this.onNewIds = this.onNewIds.bind(this)
  }

  onNext (id) {
    
  }

  onPrevious (id) {
    
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

            <Route exact path='' render={() => {
              return <Redirect to='/search' />
            }} />

            <Route exact path='/' render={() => {
              return <Redirect to='/search' />
            }} />

            <Route path='/search' render={() => { return <SearchPane /> }} />

            <Route path='/gallery' render={() => { return <GalleryPane OnNewIds={this.onNewIds} /> }} />

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
