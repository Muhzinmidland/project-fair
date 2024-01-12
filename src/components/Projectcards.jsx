import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import mediaplayerImage from '../assets/IMG-20240111-WA0005.jpg'
import { Col, Row } from 'react-bootstrap';


function Projectcards() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
         <Card style={{ width: '18rem' }} className='shadow p-2' onClick={handleShow}>
      <Card.Img variant="top" src={mediaplayerImage} />
      <Card.Body>
        <Card.Title className='text-center'>Media Player</Card.Title>
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6} lg={6}>
              <img src={mediaplayerImage} width={"100%"} height={"250px"} alt="" />
            </Col>
            <Col md={6} lg={6}>
              <h4>Description</h4>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab sint similique quidem mollitia voluptatum obcaecati nulla deleniti quaerat, assumenda amet neque non aut libero nobis accusamus iure. Porro, nulla minus?</p>
              <p><span className='fw-bolder'>Technologies:</span>HTML,CSS,React,Node</p>
            </Col>
          </Row>
          <div>
            <a href="https://media-player-five-phi.vercel.app/" style={{color:"black",fontSize:"25px"}}><i class="fa-solid fa-link"></i></a>
            <a href="https://github.com/ameenulhakeem/media_player" style={{color:"black",fontSize:"25px"}}><i class="fa-brands fa-github ms-3"></i></a>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Projectcards