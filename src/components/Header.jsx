import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <Link to={'/'} style={{textDecoration:"none"}}>
     <Navbar className="bg-success">
        <Container>
          <Navbar.Brand href="#home" className='text-light'>
           <i class="fa-brands fa-stack-overflow me-2"></i>
            Project Fair
          </Navbar.Brand>
        </Container>
      </Navbar>
      </Link>
    </>
  )
}

export default Header