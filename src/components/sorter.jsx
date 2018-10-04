import React, { Component } from 'react'
class Sorter extends Component {
  change = (target, value) => {
    this.setState({ [target]: value })
  }

  getItemClass = option =>
    option === this.props.value ? 'dropdown-item active' : 'dropdown-item'

  render() {
    return (
      <div className="dropdown mx-3">
        <a
          className="btn btn-secondary dropdown-toggle"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {this.props.value}
        </a>

        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          {this.props.options.map((option, index) => (
            <a
              key={index}
              className={this.getItemClass(option)}
              onClick={() => this.props.change(option)}
            >
              {option}
            </a>
          ))}
        </div>
      </div>
    )
  }
}

export default Sorter
