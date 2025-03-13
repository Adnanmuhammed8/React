import React, { Component } from 'react'

export default class Random extends Component {
  render() {
    // console.log(this.props);
    const {age} = this.props

    this.state = {carname : 'swift'}
    
    return (
      <div>
        <h2>Random</h2>
        <h2>{age}</h2>
        <h3>car name is :{this.state.carname}</h3>
        <button className='btn btn-primary' >click</button>

      </div>
    )
  }
}
