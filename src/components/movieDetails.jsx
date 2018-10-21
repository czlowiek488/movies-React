import React, { Component } from 'react'
import Comment from './comment'
import NewComment from './newComment'
import apiUrl from '../static/apiUrl'
class movieDetails extends Component {
  state = {
    comments: []
  }

  componentDidMount = async () => {
    const id = this.props.movie.imdbID
    const response = await fetch(`${apiUrl}/comment?imdbID=${id}`)
    const comments = await response.json()
    this.setState({ comments })
  }

  handleNewComment = async comment => {
    if (comment.text === '') return
    const comments = [...this.state.comments, comment]
    this.setState({ comments })
    const body = {
      imdbID: this.props.movie.imdbID,
      text: comment.text,
      username: comment.username
    }
    const response = await fetch(`${apiUrl}/comment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    const received = await response.json()
  }

  render() {
    return (
      <div className="container card mt-1">
        <div className="card-body">
          <button
            type="button"
            onClick={this.props.close}
            className="close"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <h1 className="my-4">{this.props.movie.Title}</h1>

          <div className="row">
            <div className="col-md-8">
              <img className="img-fluid" src={this.props.movie.Poster} alt="" />
            </div>

            <div className="col-md-4">
              <ul>
                <li>
                  <h6>Actors:</h6> {this.props.movie.Actors}
                </li>
                <li>
                  <h6>Country:</h6> {this.props.movie.Country}
                </li>
                <li>
                  <h6>Director:</h6> {this.props.movie.Director}
                </li>
                <li>
                  <h6>Writer:</h6> {this.props.movie.Writer}
                </li>
                <li>
                  <h6>Genres:</h6> {this.props.movie.Genre}
                </li>
                <li>
                  <h6>Production:</h6> {this.props.movie.Production}
                </li>
                <li>
                  <h6>Releas date:</h6> {this.props.movie.Released}
                </li>
                <li>
                  <h6>Language:</h6> {this.props.movie.Language}
                </li>
                <li>
                  <h6>Rating:</h6> {this.props.movie.imdbRating}
                </li>
              </ul>
            </div>
          </div>
          <NewComment create={this.handleNewComment} />
          {this.state.comments.map((comment, index) => (
            <Comment
              username={comment.username}
              date={new Date(parseInt(comment.createdAt))}
              text={comment.text}
              key={index}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default movieDetails
