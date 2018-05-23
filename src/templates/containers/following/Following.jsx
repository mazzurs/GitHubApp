import React, { Component } from 'react'
import './Following.css'

export default class Following extends Component {
  render () {
    return (
      this.props.items.length !== 0

        ? <ul className="ul-following">
          {this.props.items.map(follower =>
            <li className="li" key={follower.id}><a href={follower.html_url} target="_blank">{follower.login}</a></li>
          )}
        </ul>

        : <span className="not-indicated">NO DATA</span>
    )
  }
}