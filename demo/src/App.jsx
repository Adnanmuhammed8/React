
import './App.css'
import style from '../src/myStyle.module.css'
import Example from './Example'
import Random from './Random'

function App() {
  //js code
  let subject = 'REACTJS'
  let subject1 = 'ADNAN'

  const clickfun = ()=>{
    alert('button clicked')
  }
  
  const clickfun2 =(empName)=>{
    console.log(empName);
    
    
  }

  

  return (
    /// output - html
    <>
    <h1>REACT</h1>
    <h2>{subject}</h2>
    <h3>{subject1}</h3>
    <p style={{color:'red' ,backgroundColor:'yellow'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut corporis hic sit voluptatem reiciendis facere ab libero fuga suscipit saepe praesentium, id provident harum quia quaerat eligendi repudiandae nulla nesciunt.</p>
    <h2 className={style.reactStyle}>Css Module</h2>
    <h3 className={style.cssStyle}>css</h3>
    <button className={style.button} onClick={clickfun}>click</button>
    <button className={style.button} onClick={()=>{clickfun2('peter')}}>click</button>
    <Example sub = {subject} sub1 = {subject1} age={26}/>
    

    <Random age = {26} sub={subject}/>
    

    </>
  )
}

export default App
