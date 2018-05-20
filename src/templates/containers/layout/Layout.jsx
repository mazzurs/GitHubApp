import React from 'react'
import Header from '../../components/header/Header'

export default class Layout extends React.Component {
  render () {
    return (
      <div className='main-container'>
        <div className='layout'>
          <Header/>
          <div className='content'>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

