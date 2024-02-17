// import React from 'react'

// function Checkout() {
//     return (
//         <>
//         </>
//     )
// }

// export default Checkout

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

                        <NavLink className="nav-link" to='/'><p style={{color:'white'}}>Vincheck Central</p></NavLink>

                    </div>
                    <div className="log">
                        <p style={{color:'white'}}>Login</p>

                        {/* <NavLink className="nav-link" to='/'><p></p></NavLink> */}
                    </div>
                </div>
                <div className='nborder'></div>

                <div className=" logform2 mt-1">
                    <div className="formbox2">
                        <form className='fform' >
                            <h3 className='pt-2'>Checkout Form</h3>
                            <hr />
                            <div className="formbody2">
                                <div className="ftitle">
                                    <p className='frs'>Username</p>
                                    {/* Is m nchy */}
                                    <p className='fls'>Uname</p>
                                </div>
                                <div className="ftitle">
                                    <p className='frs'>Category</p>
                                    <p  className='fls'>eg diamond</p>
                                </div>
                                <div className="ftitle">
                                    <p className='frs'>Total Reports</p>
                                    <p className='fls'>eg 25</p>
                                </div>
                                <div className="ftitle">
                                    <p className='frs'>Currency</p>
                                    <p className='fls'>US$</p>
                                </div>
                                <hr />
                                <div className="ftitle mt-4">
                                    <p className='frs'> Total </p>
                                    <p className='fls'>150$</p>
                                </div>
                                <hr />

                            </div>


                            <div className="lbtn2">

                            <button type="button" class="btn btn-primary " data-mdb-ripple-init id='loginbtn'>Sign in</button>
                            
                            <button type="button" class="btn btn-primary " data-mdb-ripple-init id='loginbtn'>Sign in</button>
                            
                            <button type="button" class="btn btn-primary " data-mdb-ripple-init id='loginbtn'>Sign in</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Loginform
