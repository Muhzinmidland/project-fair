import React from 'react'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

function Profile() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className='card shadow p-5 mb-5'>
        <div className='d-flex justify-content-between'>
          <h3>Profile</h3>
          <button className='btn btn-outline-success' onClick={() => setOpen(!open)}><i class="fa-solid fa-angle-down fa-beat"></i></button>
        </div>
        <Collapse in={open}>
          <div className='row justify-content-center mt-3'>
            <label htmlFor="profile">
              <input type="file" id='profile' style={{ display: 'none' }} />
              <img src="https://i.pngimg.me/thumb/f/720/a8bd1f9386.jpg" alt="" width={"150px"} height={'150px'} />
            </label>
            <div className='my-3'>
              <input type="text" placeholder='Github Link' className='form-control border-success' />
            </div>
            <div>
              <input type="text" placeholder='LinkedIn Link ' className='form-control border-success' />
            </div>
            <div className='my-3'>
              <button className='btn btn-success w-100'>Update</button>
            </div>
          </div>
        </Collapse>

      </div>
    </>
  )
}

export default Profile