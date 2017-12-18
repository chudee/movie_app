import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

import { Movie } from './'

@inject('movieList') @observer
export default class MovieList extends Component {

    componentWillMount() {
        this.props.movieList.callApi()
    }

    _renderMovies = () => {
        const movies = this.props.movieList.movielist.map(movie => {
            return <Movie 
                title={movie.title}
                poster={movie.medium_cover_image}
                key={movie.id}
                year={movie.year}
                runtime={movie.runtime}
                rating={movie.rating}
                genres={movie.genres}
                summary={movie.summary}
                // handleToggle={this._handleToggle}
                // toggle={this.state.toggle}
            />
        })
        return movies
    }

    render() {
        let { movielist } = this.props.movieList
        return (
            <div className={ movielist ? "main MovieList" : "Loading"}>
                <section className="title">
                    <h1>Movie Cover</h1>
                </section>
                {movielist ? this._renderMovies() : 'Loading'}
            </div>
        )
    }
}
