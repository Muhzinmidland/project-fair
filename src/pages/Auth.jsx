import React from 'react'
import { Link } from 'react-router-dom';
import authImage from '../assets/IMG-20240111-WA0007.jpg'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Auth({ register }) {
  const registerForm = register ? true : false;
  return (
    <div className='d-flex justify-content-center align-items-center' style={{ width: "100%", height: "100vh" }}>
      <div className='container w-75'>
        <Link to={'/'} style={{ textDecoration: "none", color: "blue" }}><i class="fa-solid fa-arrow-left"></i>Back to Home</Link>
        <div className='bg-success p-5 rounded mt-3'>
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
                        <Form.Control type="text" placeholder="Enter Username" />
                      </Form.Group>
                    }
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    {
                      registerForm ?
                      <div>
                        <Button className='btn btn-light'>Register</Button>
                        <p className='mt-2'>Already a user? Click here to <Link to={'/login'} className='text-decoration-none text-danger fw-bold'>Login</Link></p>
                      </div>
                      :
                      <div>
                        <Link to={'/dashboard'}>
                          <Button className='btn btn-light' >Login</Button>
                        </Link>                        
                        <p>New user? Click here to <Link to={'/register'} className='text-decoration-none text-warning fw-bold' >Register</Link></p>
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








