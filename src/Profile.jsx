
import React from 'react';
import { NavLink } from 'react-router-dom';
import Sidebar from './Sidebar';

function Loginform() {
    
    return (

        <>
            <div className="dashboard">
                <div className="head">
                    <div className="navhead">

                        <div className="title">

                            <NavLink className="nav-link" to='/'><p>Vincheck Central</p></NavLink>

                        </div>
                    </div>
                    <div className='nborder'></div>
                </div>
                <div className="dbody">
                    <Sidebar/>
                    <div className="reqform">
                        <h1>
                            Account Information
                        </h1>
                        <div className="col-md-8 mx-auto mainre2 mt-4">

                            <div className="reqbox ">
                                <div class="row mb-4 mt-4">
                                    <div class="col">
                                        <div data-mdb-input-init class="form-outline">
                                            <label class="form-label" for="form3Example1" id='reqlabel'>Name</label>
                                            <input type="text" id="form3Example1" class="form-control" placeholder='Enter your name' />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div data-mdb-input-init class="form-outline">
                                            <label class="form-label" for="form3Example2" id='reqlabel'>Email Adress</label>
                                            <input type="text" id="form3Example1" class="form-control" placeholder='Enter your email' />
                                        </div>
                                    </div>
                                    <div className="row pt-3">
                                        <div class="col">
                                            <div data-mdb-input-init class="form-outline">
                                                <label class="form-label" for="form3Example1" id='reqlabel'> Current Password</label>
                                                <input type="text" id="form3Example1" class="form-control" placeholder='Enter current password' />
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div data-mdb-input-init class="form-outline">
                                                <label class="form-label" for="form3Example2" id='reqlabel'>New Password</label>
                                                <input type="text" id="form3Example1" class="form-control" placeholder='Enter new passowrd' />
                                            </div>
                                        </div>
                                        <div className="reqbtn">

                                            <button class="btn btn-success mt-4" style={{ fontSize: '13px', width: '5rem' }}>Save</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>




                    </div>


                </div>
            </div >

        </>
    )
}

export default Loginform
