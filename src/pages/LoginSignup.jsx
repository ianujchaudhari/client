import React, { useContext, useState } from 'react';
import './CSS/Loginsignup.css';
import {useNavigate} from 'react-router-dom';



const LoginSignup = () => {

  const navigate = useNavigate();
  const [ state , setstate] = useState("Login");
  const [formData, setFormData] = useState({
    name:"",
    password:"",
    email:""
  });

  const changeHandler = (e) => {
    setFormData({...formData, [e.target.name] : e.target.value})
  } 

  const login = async () => {
    let responseData; 
     await fetch ('http://localhost:4000/login',{
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then((resp)=> resp.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace('/');
    }
    else{
      alert(responseData.error);
    }
    
  }

  const signup = async () => {
    let responseData; 
     await fetch ('http://localhost:4000/signup',{
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then((resp)=> resp.json()).then((data)=>responseData=data)


    if(responseData.success){
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace('/');
    }
    else{
      alert(responseData.error);
    }
  }


  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {
            state==="Sign Up" ? <input name='name' value={formData.name} onChange={changeHandler} type="text" placeholder="Your Name"  /> : <></>
          }
          <input type="email" name='email' value={formData.email} onChange={changeHandler} placeholder="Email Address"  />
          <input type="password" name='password' value={formData.password} onChange={changeHandler} placeholder="Password  "  />
        </div>
        <button onClick={()=>{state==="Login"? login() : signup()}}>Continue</button>
        { state === "Sign Up"? <p className='loginsignup-login'>Already have an account? <span onClick={() => {setstate("Login")}}>Login here </span></p>: <></>}
        { state === "Login"? <p className='loginsignup-login'>Create an account? <span onClick={() => {setstate("Sign Up")}}>Click here </span></p>: <></>}
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup