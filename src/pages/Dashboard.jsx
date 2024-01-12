import React from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import Myproject from '../components/Myproject'
import Profile from '../components/Profile'

function Dashboard() {
  return (
    <>
      <Header/>
      <h2 className='my-5 mx-3'>Welcome <span className='text-success'>User</span></h2>
      <Row className='my-5 mx-3'>
        <Col md={8}>
          <Myproject/>
        </Col>
        <Col md={4}>
          <Profile/>
        </Col>
      </Row>
    </>
  )
}

export default Dashboard