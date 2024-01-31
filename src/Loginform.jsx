
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn
} from 'mdb-react-ui-kit';

function Loginform() {
    return (
        <>
            <div className=" login">
                <div className="navhead">

                    <div className="title">

                        <NavLink className="nav-link" to='/'><p>Vincheck Central</p></NavLink>

                    </div>
                    <div className="log">
                        <p>Login</p>

                        {/* <NavLink className="nav-link" to='/'><p></p></NavLink> */}
                    </div>
                </div>
                <div className='nborder'></div>

                <div className="logform">
                    <div className="formbox">
                        <form>
                            <h1 className='pb-3'>Login Form</h1>
                            <p>Email Adress</p>
                            <MDBInput className='mb-3' type='email' id='form1Example1' />
                            <p>Password</p>
                            <MDBInput className='mb-3' type='password' id='form1Example2' />

                            <MDBRow className='mb-4'>
                                <MDBCol className='d-flex justify-content-center'>
                                    <MDBCheckbox id='cursor' label='Remember me' defaultChecked />
                                </MDBCol>
                                <MDBCol>
                                    <a href='#!'>Forgot password?</a>
                                </MDBCol>
                            </MDBRow>
                            <div className="lbtn">

                                <MDBBtn type='submit' id='loginbtn' block>
                                    Sign in
                                </MDBBtn>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Loginform
