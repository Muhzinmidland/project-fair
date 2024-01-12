import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Projectcards from '../components/Projectcards'
import Project from './Project'
import { Link } from 'react-router-dom'
import homepageImage from '../assets/IMG-20240111-WA0004.jpg'

function Home() {
  return (
    <>
    <div className='my-5 bg-success' style={{width:"100%",height:"80vh"}}>
        <div className='container-fluid rounded'>
           <Row className='align-items-center p-5'>
            <Col sm={12} md={6} lg={6}>
           <h2 className='fw-bold text-light mb-3' style={{fontSize:"50px"}}>Project Fair</h2>
           <p>One stop destination for all software development projects</p>
           <Link to={'/login'}>
           <button className='btn btn-warning p-3'>Get Started<i class="fa-solid fa-arrow-right"></i></button>
           </Link>
            </Col>
            <Col sm={12} md={6}>
            <img style={{height:"350px"}} src={homepageImage}  alt="" />
            </Col>
           </Row>
        </div>
    </div>
    <div className='my-5 allProjects'>
        <div className='text-center'>
            <h2>Explore Our Projects</h2>
            <div className=' '>
                <marquee scrollAmount={25}>
                <div className='ms-5 d-flex justify-content-evenly align-items-center'>
                    <div className='ms-5'style={{width:"400px"}}>
                    <Projectcards/>
                    </div>
                    <div className='ms-5'style={{width:"400px"}}>
                    <Projectcards/>
                    </div>
                    <div className='ms-5'style={{width:"400px"}}>
                    <Projectcards/>
                    </div>
                </div>
                </marquee>
            </div>
            <div className='text-center mt-5 fw-5'style={{fontWeight:"600",color:"red",cursor:"pointer"}}><Link to={'/project'}> See More</Link></div>
        </div>
    </div>
    </>
  )
}

export default Home