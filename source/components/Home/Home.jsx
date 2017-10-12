import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import styles from './Home.scss'

import MovieFetcher from '../../assets/MovieFetcher'
import { Genres } from '../../assets/Genres'

class Home extends Component {
  render () {
    let m = new MovieFetcher('70f874b8df6b617b38ea97652636d663')
    m.getMovieById(211672).then((response) => {
      console.log(response)
    }).catch((err) => {
      console.log(err)
    })

    console.log(Genres)
    
    return (
      <div className='Home'>
        <h1>Welcome to MP2!</h1>
      </div>
    )
  }
}

export default Home
