import React, { Component } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Album from './components/album'
import MovieDetails from './components/movieDetails'

class App extends Component {
  state = {
    movies: [],
    moviesFiltered: null,
    selectedMovie: null
  }

  componentDidMount = async () => {
    const response = await fetch('http://localhost:8080/movies')
    const movies = await response.json()
    this.setState({ movies })
  }

  handleMoviePick = id => {
    const selectedMovie = this.state.movies.find(movie => movie.imdbID === id)
    this.setState({ selectedMovie })
  }
  pushMovie = movie => {
    const movies = [...this.state.movies, movie]
    this.setState({ movies })
  }

  handleMovieUnPick = () => {
    const selectedMovie = null
    this.setState({ selectedMovie })
    console.log(this.state)
  }

  filterMovies = async title => {
    if (title.length === 0) {
      this.setState({ moviesFiltered: null })
      return
    }
    const moviesFiltered = this.state.movies.filter(movie =>
      movie.Title.toLowerCase().includes(title.toLowerCase())
    )
    this.setState({ moviesFiltered, title })
  }

  render() {
    return (
      <div className="App">
        <Navbar
          pushMovie={this.pushMovie}
          goHome={this.handleMovieUnPick}
          pickMovieById={this.handleMoviePick}
          filterMovies={this.filterMovies}
          changeSearchString={this.changeSearchString}
        />

        {this.state.selectedMovie === null ? (
          <Album
            movies={
              this.state.moviesFiltered === null
                ? this.state.movies.filter(movie => movie.Poster !== 'N/A')
                : this.state.moviesFiltered
            }
            pickMovieById={this.handleMoviePick}
          />
        ) : (
          <MovieDetails
            movie={this.state.selectedMovie}
            close={this.handleMovieUnPick}
          />
        )}
      </div>
    )
  }
}

export default App
