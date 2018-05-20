import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './User.css'
import Layout from '../layout/Layout'
import Loading from '../loading/Loading'
import Table from '../table/Table'
import CloseButton from '../../img/close-button.png'

class User extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {},
      followers: {},
      following: {},
      isLoading: false
    }
  }

  componentDidMount () {
    const {match: {params}} = this.props
    this.getInfo(params.login)
  }

  getInfo (login) {
    fetch(`https://api.github.com/users/${login}`)
      .then(response => response.json())
      .then(data => {
        this.setState({user: data})
        this.getFollowers(login)
      })
  }

  getFollowers (login) {
    fetch(`https://api.github.com/users/${login}/followers`)
      .then(response => response.json())
      .then(data => {
        this.setState({followers: data})
        this.getFollowing(login)
      })
  }

  getFollowing (login) {
    fetch(`https://api.github.com/users/${login}/following`)
      .then(response => response.json())
      .then(data => this.setState({following: data, isLoading: true}))
  }

  render () {
    const {user, followers, following, isLoading} = this.state
    return (
      isLoading
        ? <Layout>
          <div className="user-info-container">
            <img className="bigger-avatar" src={user.avatar_url} alt=""/>
            <Table user={user} followers={followers} following={following}/>
            <Link to={`/`}>
              <img className="close-button" src={CloseButton} alt=""/>
            </Link>
          </div>
        </Layout>

        : <Loading/>
    )
  }
}

export default User