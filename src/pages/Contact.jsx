import React,{useState} from 'react'
import './Contact.css'
const Contact = () => {
    const [formdetails,setformdetails] =useState({
    name:'',
    email:''
    
  })
  const changes = (e) => {
    // console.log(e.target.value)
    const {value,name} = e.target
    // console.log(name,value)
    setformdetails({...formdetails,[name]:value})
  }
  const submit = (f) => {
    f.preventDefault() // To stop the form submission directly to stop the refresh of the form page
    console.log(formdetails)
  }
  return (
    <div className='Contact'>
      <h1>Contact form</h1>
      <form onSubmit={submit}>
        <input type="text" placeholder="Name" name="name" onChange={changes} />
        <br></br>
        <br></br>
        <input type="email" placeholder="Email" name="email" onChange={changes}/>
        <br></br>
        <br></br>
        
        <button type="submit"> Submit </button>
        <br></br>
        <br></br>
        
      </form>
    </div>
  )
}
export default Contact
