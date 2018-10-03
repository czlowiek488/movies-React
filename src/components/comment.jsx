import React, { Component } from 'react'

class Comment extends Component {
  state = {}
  render() {
    return (
      <div className="media-body card mt-3 ">
        <div className="card-header hoverable">
          <div className="flex-center">
            <a href="" className="media-object float-left">
              <img
                alt=""
                src="https://2.gravatar.com/avatar/b6561d0be578435f47a56259df19ffc0?s=50&amp;d=mm&amp;r=g"
                srcSet="http://2.gravatar.com/avatar/b6561d0be578435f47a56259df19ffc0?s=100&amp;d=mm&amp;r=g 2x"
                className="avatar avatar-50 photo comment_avatar rounded-circle"
                height="35"
                width="35"
              />
            </a>
          </div>
          <h6 className="media-heading float-left ml-2">aymene</h6>
          <time
            className="float-right btn btn-secondary chip waves-effect waves-light small"
            dateTime="2017-03-28T21:27:07+00:00"
          >
            28 March 2017, 21 h 27 min
          </time>
        </div>
        <div className="card-block">
          <div className=" p-4 comment-content card-text">
            <p>{this.props.text}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Comment
