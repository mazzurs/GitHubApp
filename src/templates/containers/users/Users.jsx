import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as usersActions from '../../../store/actions/usersActions'
import './Users.css'
import Layout from '../layout/Layout'
import Loading from '../loading/Loading'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'

class User extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoaded: false
    }
  }

  componentDidMount () {
    this.getData()
  }

  getData (startItem = 0, users = []) {
    let maxUsers = 120 // can be 30, 60, 90, etc.
    fetch(`https://api.github.com/users?since=${startItem}`)
      .then(response => response.json())
      .then((data) => {
        users = users.concat(data)
        if (startItem < maxUsers) {
          this.getData(users[users.length - 1].id, users)
        }
        else {
          this.props.actions.getUsers({users: users})
          this.setState({isLoading: true})
        }
      })

  }

  render () {
    return (
      this.state.isLoading
        ? <Layout>
          <MuiThemeProvider>
            <div className="users">
              {this.props.users.users.map(user =>
                <div className='user' key={user.id}>
                  <img className='avatar' src={user.avatar_url} alt=""/>
                  <div>
                    <h1 className='user-login-container'>Login: <span>{user.login}</span></h1>
                    <Link className='more-info' to={`/user/${user.login}`}>
                      <RaisedButton label="INFO"></RaisedButton>
                    </Link>
                    <a href={user.html_url} target="_blank">
                      <RaisedButton className='github-link' label="GITHUB LINK"></RaisedButton>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </MuiThemeProvider>
        </Layout>
        : <Loading/>
    )
  }
}

function mapStateToProps (state) {
  return {
    users: state.usersReducer
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(usersActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)

