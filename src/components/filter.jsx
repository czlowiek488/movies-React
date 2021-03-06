import React, { Component } from 'react'
import Slider from './slider'
import Sorter from './sorter'
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

  updateSorting = (target, value) => this.props.updateSorting(target, value)

  render() {
    return (
      <div className="card my-1">
        <div className="card-header">
          Movies found: {this.props.moviesFound}
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h4>Filter By</h4>
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
          </li>
          <li className="list-group-item">
            <h4>Sort By</h4>
            <div className="d-flex flex-row justify-content-center">
              <Sorter
                options={['Nothing', 'Year', 'imdbRating']}
                value={this.props.sortBy}
                change={sortBy => this.updateSorting('sortBy', sortBy)}
              />
              {this.props.sortBy !== 'Nothing' && (
                <Sorter
                  options={['Ascending', 'Descending']}
                  value={this.props.sortDirection}
                  change={sortDirection =>
                    this.updateSorting('sortDirection', sortDirection)
                  }
                />
              )}
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default Filter
