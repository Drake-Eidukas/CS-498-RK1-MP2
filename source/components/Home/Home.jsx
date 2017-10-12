import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import styles from './Home.scss'

import MovieRequest from '../../assets/MovieRequest'
import Genres from '../../assets/Genres'
import DetailPane from '../Detail/DetailPane.jsx'


class Home extends Component {
    render () {
        console.log(MovieRequest)
        let m = new MovieRequest('70f874b8df6b617b38ea97652636d663')

        m.getMovieById(211672).then((response) => {
        console.log(response)
        }).catch((err) => {
        console.log(err)
        })

        return (
            <div className="Home">
                <DetailPane MovieDescription="desc" MovieTitle="title" MovieImageSrc="https://i.pinimg.com/736x/c5/e8/77/c5e877889a1fea74b5fe02c4003f71a9--teaching-memes-funny-teachers-in-may-meme.jpg"/>
            </div>
        )
    }
}

export default Home
