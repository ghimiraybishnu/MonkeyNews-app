import React, { Component } from 'react'
import loading from './loadings.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="loadings"/>
      </div>
    )
  }
}

export default Spinner
