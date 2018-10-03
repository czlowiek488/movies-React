import React, { Component } from 'react'
class Movie extends Component {
  state = {}
  render() {
    return (
      <div className="col-md-4">
        <div className="card mb-4 shadow-sm">
          {this.props.Poster !== 'N/A' ? (
            <img
              className="card-img-top"
              style={{ height: 'auto', width: '100%', display: 'block' }}
              src={this.props.Poster}
              data-holder-rendered="true"
            />
          ) : (
            <img
              className="card-img-top"
              style={{ height: 'auto', width: '100%', display: 'block' }}
              src={'https://www.etyellowpages.com/images/cinema/NoPoster.jpg'}
              data-holder-rendered="true"
            />
          )}
          <div className="card-body">
            <a className="card-text">
              <h5>{this.props.Title}</h5>
            </a>
            <br />
            <a className="card-text">
              <h5>Writer:</h5> {this.props.Writer}
            </a>
            <a className="card-text">
              <h5>Actors:</h5> {this.props.Actors}
            </a>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button
                  onClick={this.props.pickMovie}
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  View
                </button>
                <button
                  onClick={this.props.pickMovie}
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  Comment
                </button>
              </div>
              <small className="text-muted">{this.props.released}</small>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Movie
