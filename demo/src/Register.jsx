import React from 'react'

function Register() {

    const getname = (e)=>{
        console.log(e.target.value);
        

    }
    const getmail = (e)=>{
        console.log(e.target.value);
        

    }
    const getpassword = (e)=>{
        console.log(e.target.value);
        

    }
  return (
    <form action="" className='mt-5 w-50 border shadow p-5 ms-5'>
        <h1 className='text-center mb-4'>Register Form</h1>
        <div className='mb-3'>
            <input type="text" placeholder='Full Name' className='form-control' onChange={(e)=>getname(e)} />
       
       </div>
       <div className='mb-3'>
            <input type="text" placeholder='E-mail' className='form-control' onChange={(e)=>getmail(e)} />
       
       </div>
       <div className='mb-3'>
            <input type="text" placeholder='Password' className='form-control' onChange={(e)=>getpassword(e)} />
       
       </div>
       <div className='mb-3'>
        <button className='btn btn-primary w-100'>submit</button>
       </div>
    </form>
    
  )
}

export default Register