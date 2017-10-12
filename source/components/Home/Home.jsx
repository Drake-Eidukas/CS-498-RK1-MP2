import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import styles from './Home.scss'

import MovieFetcher from '../../assets/MovieFetcher'
import Details from '../Detail/Details.jsx'
import DetailNavigationBar from '../Detail/DetailNavigationBar.jsx'

class Home extends Component {

    render() {
//         let m = new MovieFetcher('70f874b8df6b617b38ea97652636d663', {
//             base_url: '/user/12345',
//             data: {
//                 firstName: 'Fred',
//                 lastName: 'Flintstone'
//   }
//         });
//         m.searchMovies({
//             url: "/movie",
//             method: "get"},
//             {
//                 "language": "en-us",
//                 "query": "hot fuzz"
//             }
//         );
        return(
            <div className="Home">
                <h1>Welcome to MP2!</h1>
                <DetailNavigationBar/>
                <Details MovieDescription="desc" MovieTitle="title" MovieImageSrc="https://i.pinimg.com/736x/c5/e8/77/c5e877889a1fea74b5fe02c4003f71a9--teaching-memes-funny-teachers-in-may-meme.jpg"/>
            </div>
        )
    }
}

export default Home
