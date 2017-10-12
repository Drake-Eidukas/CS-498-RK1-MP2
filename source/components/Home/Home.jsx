import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

import {
  HashRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

import styles from '../../styles/Home/Home.scss'

import Genres from '../../assets/Genres'
import DetailPane from '../Detail/DetailPane.jsx'

class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      movieIdList: [10555, 10556, 10557]
    }

    this.onNext = this.onNext.bind(this)
    this.onPrevious = this.onPrevious.bind(this)
  }

  onNext (id) {
    let currIndex = this.state.movieIdList.indexOf(parseInt(id))

    if (currIndex === -1) {
      window.location.href = '/search'
    } else {
      window.location.href = `/#/detail/${this.state.movieIdList[(currIndex + 1) % this.state.movieIdList.length]}`
    }
  }

  onPrevious (id) {
    let currIndex = this.state.movieIdList.indexOf(parseInt(id))
    
    if (currIndex === -1) {
      window.location.href = '/search'
      return 
    } else if (currIndex === 0) {
      currIndex = this.state.movieIdList.length - 1
    } else {
      currIndex -= 1
    }
      window.location.href = `/#/detail/${this.state.movieIdList[currIndex]}`
  }

  render () {
    return (
      <Router className='routing-pane'>
        <div className='Home'>

          <Button.Group labeled fluid>
            <Button icon='search' content='Search' size='massive' as={Link} to='/search' />
            <Button icon='grid layout' content='Gallery' size='massive' as={Link} to={'/gallery'} />
          </Button.Group>

          <Route exact path='/' render={()=>{
            return <Redirect to='/search'/>
          }} />
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
