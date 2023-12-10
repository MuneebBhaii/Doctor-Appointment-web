import React from 'react'
import { Link } from 'react-router-dom'

export default function stickyWall() {
  return (
    <main className="container-fluid bg-dark">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card p-2 p-md-3 p-lg-4">
              <h3 className='text-center'>Schedule Details</h3>
              <div className="row">
                <div className="col">Saturday</div>
                <div className="col">3:00pm to 9:00pm</div>
              </div>
              <div className="row">
                <div className="col">Sunday</div>
                <div className="col">Close</div>
              </div>
              <div className="row">
                <div className="col">Monday</div>
                <div className="col">2:00pm to 10:00pm</div>
              </div>
              <div className="row">
                <div className="col">Tuesday</div>
                <div className="col">3:00pm to 9:00pm</div>
              </div>
              <div className="row">
                <div className="col">Wednesday</div>
                <div className="col">2:00pm to 10:00pm</div>
              </div>
              <div className="row">
                <div className="col">Thursday</div>
                <div className="col">3:00pm to 9:00pm</div>
              </div>
              <div className="row">
                <div className="col">Friday</div>
                <div className="col">4:00pm to 10:00pm</div>
              </div>
              <div className="row mt-3">
                <div className="col text-center">
                  <Link className='btn btn-outline-primary' to='/Schedule'>Change Schedule</Link>
                  </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card p-2 p-md-3 p-lg-4">
              <h3 className='text-center'>Appointment Details</h3>
              <div className="row">
                <div className="col">Appointment</div>
                <div className="col">Patients</div>
              </div>
              <div className="row">
                <div className="col">Today</div>
                <div className="col">30</div>
              </div>
              <div className="row">
                <div className="col">Tomarrow</div>
                <div className="col">40</div>
              </div>
              <div className="row">
                <div className="col">Total</div>
                <div className="col">480</div>
              </div>
              <div className="row mt-3">
                <div className="col text-center">
                  <Link className='btn btn-outline-primary' to='/Appointment'>Manage Appointment</Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
