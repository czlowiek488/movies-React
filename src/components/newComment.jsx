import React, { Component } from 'react'
//add creation Time, username (anonymous) to API
class newComment extends Component {
  state = {
    text: '',
    username: ''
  }

  change = (element, value) => {
    this.setState({ [element]: value })
  }

  render() {
    return (
      <form
        action="#"
        method="post"
        className="form-horizontal p-3 card m-2"
        id="commentForm"
        role="form"
      >
        <div className="form-group">
          <div className="col-sm-12">
            <input
              onChange={e => this.change('username', e.target.value)}
              type="text"
              className="form-control"
              placeholder="username"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12">
            <textarea
              onChange={e => this.change('text', e.target.value)}
              className="form-control"
              placeholder="Comment"
              name="addComment"
              id="addComment"
              rows="5"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button
              onClick={() => this.props.create(this.state)}
              className="btn btn-success btn-circle text-uppercase float-left"
              type="button"
              id="submitComment"
            >
              <span className="glyphicon glyphicon-send" /> Submit comment
            </button>
          </div>
        </div>
      </form>
    )
  }
}

export default newComment
