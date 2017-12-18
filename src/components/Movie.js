import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
// import MovieInfo from './MovieInfo';

export default class Movie extends Component {
    render() {
        const { poster, title, genres, runtime } = this.props
        return (
            <article className="Movie__Card">
                <img src={poster} alt={title} title={title} />
                <h2>{title}</h2>
                <section>
                    {genres.map( (genre, i) => {
                        return <MovieGenre genre={genre} key={i} />
                    })}
                </section>
                <p>{runtime}</p>
            </article>
        )
    }
}

function MovieGenre({genre}) {
    return (
        <span> {genre} </span>
    )
}