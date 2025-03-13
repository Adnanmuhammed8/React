import React from 'react'
import Register from './Register'

function Example({age,sub}) {
  //  console.log(props);
  
  return (                                       /// if we need to call 
    <div>
      
      <h1>Example Component</h1>
      {/* <h1>{props.sub}</h1>
      
      <h2>{props.sub1}</h2>  */}

      {sub=='REACT'?<h1>{sub}</h1>:<h2>shared data is not react</h2>}
      <h1>{age}</h1>
      <Register/>
    </div>
  )
}

export default Example