import React, { Component } from 'react'
import './Loading.css'
import Layout from '../layout/Layout'
import LoadImg from '../../img/load.svg'

export default class Loading extends Component {

  render () {
    return (
      <Layout>
        <div className="loading">
          <img className="load-img" src={LoadImg} alt=""/>
        </div>
      </Layout>
    )
  }
}