import React, { Component } from 'react'
class Slider extends Component {
  state = {
    value: 0
  }
  change = value => {
    this.setState({ value })
  }

  render() {
    return (
      <div className="list-group-item px-5">
        <label>
          {this.props.title}: {this.props.get(this.state.value / 100)}
        </label>
        <input
          type="range"
          onMouseUp={e => this.props.change(e.target.value / 100)}
          onChange={e => this.change(e.target.value)}
          className="form-control-range"
          value={this.state.value}
          style={{ maxWidth: '250px', margin: '0 auto' }}
        />
      </div>
    )
  }
}

export default Slider
