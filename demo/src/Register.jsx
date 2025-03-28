import React,{useState} from 'react'

// function Register() {

//     const getname = (e)=>{
//         console.log(e.target.value);
        

//     }
//     const getmail = (e)=>{
//         console.log(e.target.value);
        

//     }
//     const getpassword = (e)=>{
//         console.log(e.target.value);
        

//     }
  function Register(){
    const [userDetails , setUserdetails] = useState({
        username:"",
        email :"",
        password :""
        })
        console.log(userDetails);

        const [newArray, setNewArray] = useState([
          {username:'max', age:27},
          {username:'neel', age:37},
          {username:'manu', age:25},
          {username:'mani', age:36}
        ])
        
  
        
    
  return (
    <>
    <form action="" className='mt-5 w-50 border shadow p-5 ms-5'>
        <h1 className='text-center mb-4'>Register Form</h1>
        <div className='mb-3'>
            <input type="text" placeholder='Full Name' className='form-control' onChange={(e)=>setUserdetails({...userDetails,username:e.target.value})} />
       
       </div>
       <div className='mb-3'>
            <input type="text" placeholder='E-mail' className='form-control' onChange={(e)=>setUserdetails({...userDetails,email:e.target.value})} />
       
       </div>
       <div className='mb-3'>
            <input type="text" placeholder='Password' className='form-control' onChange={(e)=>setUserdetails({...userDetails,password:e.target.value})} />
       
       </div>
       <div className='mb-3'>
        <button className='btn btn-primary w-100'>submit</button>
       </div>
    </form>
    <table >
        <thead>
          <tr>
            <th>sl.no</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          
          {
            newArray.map((item,index)=>(
              <tr>
              <td>{index+1}</td>
              <td>{item.username}</td>
              <td>{item.age}</td>
              </tr>
            ))
          }
        </tbody>

    </table>
    </>
  )
}

export default Register