import React, { useState } from 'react'
import Register from './Register'

function Example({age,sub}) {
  //  console.log(props);

  const [empName ,setEmpName] = useState('Neel')

  const [color,setColor] = useState({
     color1 :'Red',
     color2 :'Yellow',
     color3 : 'green'
  })
  const colorChange = (data)=>{
    setColor({...color,color2:data})
  }
    

  
  return (                                       /// if we need to call 
    <div>
      
      <h1>Example Component</h1>
      {/* <h1>{props.sub}</h1>
      
      <h2>{props.sub1}</h2>  */}

      {sub=='REACT'?<h1>{sub}</h1>:<h2>shared data is not react</h2>}
      <h1>{age}</h1>
      <h3>Empname is :{empName}</h3>
      <button className='btn btn-primary' onClick={()=>setEmpName('Maxwell')}>click</button>
      <ul>
        <li>{color.color1}</li>
        <li>{color.color2}</li>
        <li>{color.color3}</li>
      </ul>
      <button className='btn btn-primary' onClick={()=>colorChange('blue')}>click</button>
      <Register/>
    </div>
  )
}

export default Example