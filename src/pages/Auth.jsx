import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import authImage from '../assets/IMG-20240111-WA0007.jpg'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { loginAPI, registerAPI } from '../services/allAPI';

function Auth({ register }) {
  const registerForm = register ? true : false;
  const [userData,setUserData] = useState({
    username:"",
    email:"",
    password:""
  })

  const handleRegister = async(e)=>{
    e.preventDefault();
    console.log("user details");
    console.log(userData);
    const {username,email,password} = userData;
    if(!username || !email || !password){
      alert("please fill the form completely")
    }
    else{
      const result  = await registerAPI(userData);
      if(result.status === 200){
        alert("user registered successfully")
        setUserData({
          username:"",
          email:"",
          password:""
        })
      }
      else{
        alert(result.response.data)
      }
    }
  }

  const handleLogin = async(e)=>{
    e.preventDefault();
    const {email , password} = userData;
    if(!password || !email){
      alert("please fill the form completely")
    }
    else{
      const loginResult = await loginAPI(userData)
      alert("login successfully")
    }
  }

  return (
    <div className='d-flex justify-content-center align-items-center' style={{ width: "100%", height: "100vh" }}>
      <div className='container w-75'>
        <Link to={'/'} style={{ textDecoration: "none", color: "green" }}><i class="fa-solid fa-arrow-left"></i>Back to Home</Link>
        <div className=' p-5 rounded mt-2' style={{backgroundColor:'#2eb82e'}}>
          <div className='row align-items-center'>
            <div className='col-lg-6 col-md-6'>
              <img src={authImage} alt="" width={"100%"} />
            </div>
            <div className='col-lg-6 col-md-6'>
              <div className='d-flex align-items-center flex-column'>
                <h3><i class="fa-brands fa-stack-overflow me-3"></i>Project Fair</h3>
                <h5 className='mt-3 text-light'>
                  {
                    registerForm ? "Sign up your account" : "Sign in your account"
                  }
                  </h5>
                  <Form>
                    {
                      registerForm &&

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Username"
                        onChange={(e)=>setUserData({...userData,username:e.target.value})}
                        value={userData.username}/>
                      </Form.Group>
                    }
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" 
                        onChange={(e)=>setUserData({...userData,email:e.target.value})}
                        value={userData.email}/>
                      </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" 
                      onChange={(e)=>setUserData({...userData,password:e.target.value})}
                      value={userData.password}/>
                    </Form.Group>
                    {
                      registerForm ?
                      <div>
                        <Button className='btn btn-light mt-3' onClick={handleRegister}>Register</Button>
                        <p className='mt-2 text-bold'>Already a user? Click here to <Link to={'/login'} className='text-decoration-none text-light fw-bold'>Login</Link></p>
                      </div>
                      :
                      <div>
                        <Link to={'/dashboard'}>
                          <Button className='btn btn-light mt-3' onClick={handleLogin}>Login</Button>
                        </Link>                        
                        <p className='text-bold'>New user? Click here to <Link to={'/register'} className='text-decoration-none text-light fw-bold' >Register</Link></p>
                      </div>
                    }
                  </Form>
                
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Auth








