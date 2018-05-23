import React, { Component } from 'react'
import './Followers.css'

export default class Followers extends Component {
  render () {
    return (
      this.props.items.length !== 0

        ? <ul className="ul-followers">
          {this.props.items.map(follower =>
            <li className="li" key={follower.id}><a href={follower.html_url} target="_blank">{follower.login}</a></li>
          )}
        </ul>

        : <span className="not-indicated">NO DATA</span>
    )
  }
}