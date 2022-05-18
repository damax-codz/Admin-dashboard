import React, { useEffect, useState } from 'react'
import './Signup.css'
import user from '../../images/user.png'
import { ToastContainer, toast } from 'react-toastify';


const Signup = () => {

  const [form ,setForm] = useState({
      username:'',
      password:''
  })
  const [formFilled,setFormFilled] = useState(false)


 const  handleChange =(e)=>{
      setForm( {
          ...form,
          [e.target.name] : e.target.value
      })
  }

  const handleSubmit =()=>{
      if(formFilled){
          toast.success('Signed in successfully')
          setTimeout( ()=>window.location ='/dashboard/home',3000 )
          sessionStorage.setItem('loginData',JSON.stringify({...form}))
      }
      else{
          toast.error('error signing in')
      }
  }

  useEffect( ()=>{
      if(
          form.username!== '' &&
          form.password!==''
      ){
     setFormFilled(true)
      }
      else{
     setFormFilled(false)
          
      }

  },[form] )

  return (
    <div className='sign-up-page'>
        <ToastContainer />
        <div className='sign-up'>
           <span className='icon'><img src={user} alt='user' /></span>
           <p className='get'>GET STARTED</p >
           <div className='sign-up-container'>
               <h3>SIGN IN</h3>
               
             <form>
                <input type='text' name='username' placeholder='Username' onChange={handleChange} />
                <input type='password' name='password' placeholder='Password' onChange={handleChange} />
                <p>Don't have an account ? <span>Signup</span> </p>
             </form>
             <button  style={{backgroundColor:formFilled?'rgb(98, 120, 248)':'white',color:formFilled?'white':'black'}} onClick={handleSubmit}>SIGNUP NOW</button>
           </div>
           
        </div>
    </div>
  )
}

export default Signup