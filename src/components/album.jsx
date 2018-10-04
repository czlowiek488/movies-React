import React, { Component } from 'react'
import Movie from './movie'
import Filter from './filter'

class Album extends Component {
  state = {
    movies: this.props.movies,
    minimalYear: 0,
    minimalRating: 0,
    sortBy: 'Nothing',
    sortDirection: 'Ascending'
  }

  componentWillReceiveProps = props => this.setState({ movies: props.movies })

  updateMinimalYear = minimalYear => this.setState({ minimalYear })

  updateMinimalRating = minimalRating => this.setState({ minimalRating })

  change = (target, value) => this.setState({ [target]: value })

  render() {
    const displayedMovies = this.state.movies
      .filter(
        movie =>
          movie.imdbRating >= this.state.minimalRating &&
          movie.Year >= this.state.minimalYear &&
          movie[this.state.sortBy] !== 'N/A' &&
          movie[this.state.sortBy] !== 0
      )
      .sort(
        (movie, secondMovie) =>
          this.state.sortDirection === 'Ascending'
            ? secondMovie[this.state.sortBy] - movie[this.state.sortBy]
            : movie[this.state.sortBy] - secondMovie[this.state.sortBy]
      )
    return (
      <div className="container">
        <Filter
          sortBy={this.state.sortBy}
          sortDirection={this.state.sortDirection}
          updateSorting={this.change}
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
