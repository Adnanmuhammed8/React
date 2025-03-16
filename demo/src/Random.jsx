import React, { Component } from 'react'

export default class Random extends Component {
  constructor(){    // to initialize value to the parent component properties
    super()        // access properties from parent class
    this.state = {carname : 'swift'}
    
  }
  changeValue(data){
    console.log('inside the function');
    this.setState({carname:data})
    
  }
  render() {
    // console.log(this.props);
    const {age} = this.props

    
    return (
      <div>
        <h2>Random</h2>
        <h2>{age}</h2>
        <h3>car name is :{this.state.carname}</h3>
        <button className='btn btn-primary'onClick={()=>this.changeValue('Polo GT')} >click</button>

      </div>
    )
  }
}

