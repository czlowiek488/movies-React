import React, { Component } from 'react'
import Movie from './movie'
import Filter from './filter'

class Album extends Component {
  state = {
    movies: this.props.movies,
    minimalYear: 0,
    minimalRating: 0
  }

  componentWillReceiveProps = props => this.setState({ movies: props.movies })

  updateMinimalYear = minimalYear => this.setState({ minimalYear })

  updateMinimalRating = minimalRating => this.setState({ minimalRating })

  render() {
    const displayedMovies = this.state.movies.filter(
      movie =>
        movie.imdbRating >= this.state.minimalRating &&
        movie.Year >= this.state.minimalYear
    )
    return (
      <div className="container">
        <Filter
          moviesFound={displayedMovies.length}
          updateMinimalYear={this.updateMinimalYear}
          updateMinimalRating={this.updateMinimalRating}
        />
        <div className="row">
          {displayedMovies.map(movie => (
            <Movie
              pickMovie={() => this.props.pickMovieById(movie.imdbID)}
              key={movie.imdbID}
              Poster={movie.Poster}
              Title={movie.Title}
              Actors={movie.Actors}
              Writer={movie.Writer}
              released={movie.Released}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Album
