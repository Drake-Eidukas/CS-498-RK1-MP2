import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import styles from '../../styles/Home/Home.scss'

import Genres from '../../assets/Genres'
import DetailPane from '../Detail/DetailPane.jsx'

class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      movieIdList: [10555, 10556]
    }

    this.onNext = this.onNext.bind(this)
    this.onPrevious = this.onPrevious.bind(this)
  }

  onNext (id) {
    if (this.state.movieIdList.indexOf(id) === -1) {
      // window.URL.
    }
    this.setState({
      currentMovieIndex: (this.state.currentMovieIndex + 1) % this.state.movieIdList.length
    })
  }

  onPrevious (id) {
    let nextIndex = (this.state.currentMovieIndex - 1) % this.state.movieIdList.length
    if (nextIndex < 0) { nextIndex += this.state.movieIdList.length }
    this.setState({
      currentMovieIndex: nextIndex
    })
  }

  render () {
    return (
      <Router className='routing-pane'>
        <div className='Home'>

          <Button.Group labeled fluid>
            <Button icon='search' content='Search' size='massive' as={Link} to='/search' />
            <Button icon='grid layout' content='Gallery' size='massive' as={Link} to={'/gallery'} />
          </Button.Group>

          <Route path='/search' component={() => { return <p>searchy boye</p> }} />

          <Route path='/gallery' component={() => { return <p>gallery boye</p> }} />

          <Route path='/detail/:id' component={({ match }) => {
            return <DetailPane MovieId={match.params.id} OnPrevious={this.onPrevious} OnNext={this.onNext} />
          }} />

        </div>
      </Router>
    )
  }
}

export default Home
