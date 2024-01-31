import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <div className='footer d-flex align-items-center justify-content-evenly w-100 mb-5 bg-success py-4 text-light'style={{backgroundColor:"lightpink"}}>
                <div style={{ width: "400px" }}>
                    <h4>
                       <Link to={'/'} className='text-decoration-none'>
                        <p className='text-light '> <i class="fa-brands fa-stack-overflow me-2"></i>Project-Fair</p>
                        </Link> 
                    </h4>
                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nihil, porro exercitationem? Rerum sapiente, veritatis
                        vero maxime reprehenderit distinctio cum esse veniam,
                        vitae perspiciatis consectetur ut dicta molestias
                        laboriosam explicabo odio.</h6>
                </div>
                <div>
                    <h4>Links</h4>
                    <Link to={'/'} style={{textDecoration:'none',color:'white'}} ><h6>Home</h6></Link>
                    <Link to={'/login'}  style={{textDecoration:'none',color:"white"}}> <h6>Login</h6></Link>
                   <Link to={'/register'}  style={{textDecoration:'none',color:"white"}}><h6>Register</h6></Link>
                    
                </div>
                <div>
                    <h4>Guides</h4>
                    <h6>React</h6>
                    <h6>React Watch</h6>
                    <h6>React bootstrap</h6>
                </div>
                <div>
                    <h4>Contact Us</h4>
                    <div className='d-flex'>
                        <input type="text" name="" id=""
                         placeholder='Enter your email' className='form-control'/>
                        <button className='btn btn-light ms-2'>Subscribe</button>
                    </div>
                    <div className='d-flex align-items-center justify-content-evenly fs-4 mt-3'>
                    <i class="fa-brands fa-instagram" sty></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-facebook"></i>
                    </div>

                </div>
            </div>
            <div className='text-center'>
                <p>Copyright &#169; 2024. Project Fair built with React</p>
            </div>

        </>
    )
}

export default Footer