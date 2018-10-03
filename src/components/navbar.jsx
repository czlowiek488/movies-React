import React, { Component } from 'react'
class Navbar extends Component {
  state = {
    search: true,
    title: ''
  }

  fetchMovie = async () => {
    const movieResponse = await fetch('http://localhost:8080/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title: this.state.title })
    })
    if (movieResponse.status !== 200) {
      this.setState({ search: false })
      return
    }
    this.setState({ search: true, title: '' })
    this.props.filterMovies(this.state.title)
    const movie = await movieResponse.json()
    this.props.pushMovie(movie)
    this.props.pickMovieById(movie.imdbID)
  }

  getSearchButtonStyle = () =>
    `btn btn-${this.state.search ? 'secondary' : 'danger'} ml-2`

  change = (target, string) => this.setState({ [target]: string })

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a className="navbar-brand" href="#" onClick={this.props.goHome}>
          MOVIES
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample03"
          aria-controls="navbarsExample03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample03">
          <ul className="navbar-nav mr-auto" />
          <form className="form-inline my-2 my-md-0">
            <input
              className="form-control"
              onChange={e => {
                this.change('title', e.target.value)
                this.props.filterMovies(e.target.value)
              }}
              type="text"
              value={this.state.title}
              placeholder="Movie Title"
            />
            <button
              type="button"
              onClick={this.fetchMovie}
              className={this.getSearchButtonStyle()}
            >
              find
            </button>
          </form>
        </div>
      </nav>
    )
  }
}

export default Navbar
