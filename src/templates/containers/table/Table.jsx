import React, { Component } from 'react'
import './Table.css'
import Followers from '../followers/Followers'
import Following from '../following/Following'

class Table extends Component {

  render () {
    const {user, followers, following} = this.props
    return (
      <table className="table">
        <tbody>
        <tr>
          <td>Name</td>
          <td>{user.name || <span className="not-indicated">NO DATA</span>}</td>
        </tr>
        <tr>
          <td>Company</td>
          <td>{user.company || <span className="not-indicated">NO DATA</span>}</td>
        </tr>
        <tr>
          <td>E-mail</td>
          <td>{user.email || <span className="not-indicated">NO DATA</span>}</td>
        </tr>
        <tr>
          <td>Location</td>
          <td>{user.location || <span className="not-indicated">NO DATA</span>}</td>
        </tr>
        <tr>
          <td>Bio</td>
          <td>{user.bio || <span className="not-indicated">NO DATA</span>}</td>
        </tr>
        <tr>
          <td>Сreated at</td>
          <td>{user.created_at || <span className="not-indicated">NO DATA</span>}</td>
        </tr>
        <tr>
          <td>Followers</td>
          <td><Followers items={followers}/></td>
        </tr>
        <tr>
          <td>Following</td>
          <td><Following items={following || <span className="not-indicated">NO DATA</span>}/></td>
        </tr>
        </tbody>
      </table>
    )
  }
}

export default Table