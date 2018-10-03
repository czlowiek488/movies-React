import React, { Component } from 'react'
import Slider from './slider'
class Filter extends Component {
  getMinimalYear = percent => {
    const minYear = 1980
    const maxYear = new Date().getFullYear()
    const years = (maxYear - minYear) * percent
    const minimalYear = (minYear + years).toFixed(0)
    return minimalYear
  }

  getMinimalRating = percent => {
    const maxRating = 10
    const rating = maxRating * percent
    return rating.toFixed(1)
  }

  updateMinimalYear = percent =>
    this.props.updateMinimalYear(this.getMinimalYear(percent))

  updateMinimalRating = percent =>
    this.props.updateMinimalRating(this.getMinimalRating(percent))

  render() {
    return (
      <div className="card my-1">
        <div className="card-header">
          Movies found: {this.props.moviesFound}
        </div>
        <ul className="list-group list-group-flush">
          <Slider
            change={this.updateMinimalRating}
            get={this.getMinimalRating}
            title="Minimal Rating"
          />
          <Slider
            change={this.updateMinimalYear}
            get={this.getMinimalYear}
            title="Minimal Releas Year"
          />
        </ul>
      </div>
    )
  }
}

export default Filter
