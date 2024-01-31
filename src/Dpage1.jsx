import React from 'react'
import { NavLink } from 'react-router-dom';
import Sidebar from './Sidebar'

function Dpage1() {


    return (<div className="dashboard">
        <div className="head">
            <div className="navhead">

                <div className="title">

                    <NavLink className="nav-link" to='/'><p>Vincheck Central</p></NavLink>

                </div>
            </div>
            <div className='nborder'></div>
        </div>
        <div className="dbody">
            {/* This is siebat */}
            <Sidebar />
            <div className="col-md-4 dcol2">
                <div className="dform1">
                    <p><b>Remaining Count:0</b></p>
                    {/* <p>VIN Number*</p> */}
                    <div data-mdb-input-init class="form-outline mb-4">
                        <label class="form-label" for="form5Example1">VIN Number*</label>
                        <input type="text" id="form5Example1" class="form-control" placeholder='Enter VIN Number' />
                    </div>
                    <p>You have 0 remaining credits to view report. Select any package below to proceed.</p>
                    <select class="form-control" name="package" required>
                        <option value="3" data-amount="32.00">1 Reports for 32.00</option>
                        <option value="4" data-amount="39.95">2 Reports for 39.95</option>
                        <option value="5" data-amount="65.95">5 Reports for 65.95</option>
                        <option value="6" data-amount="103.95">10 Reports for 103.95</option>
                        <option value="7" data-amount="159.95">25 Reports for 159.95</option>
                        <option value="8" data-amount="259.95">50 Reports for 259.95</option>
                    </select>

                    <button class="btn btn-success mt-2" style={{ fontSize: '13px' }}>Check Vehicle Details</button>
                    {/* <button class="btn btn-success mt-2">Check Vehicle Details</button> */}
                </div>
            </div>
            <div className="col-md-6 dcol3">
                <div class="card">
                    <div class="header">
                        <h2>All Reports</h2>
                    </div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">VIN </th>
                                <th scope="col">Payment Status</th>
                                <th scope="col">Date & Time</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan='1' id='colborder'>1</td>
                                <td colSpan='1' id='colborder'></td>
                                <td colSpan='1' id='colborder'>Pending</td>
                                <td colSpan='1' id='colborder'>2023-12-28 22:33:33</td>
                                <td colSpan='1' id='lastcol'>View Report

                                    <button class="btn btn-success mt-2" style={{ fontSize: '13px' }}>View Report</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </div>


    )
}

export default Dpage1
