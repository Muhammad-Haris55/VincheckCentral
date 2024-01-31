import React from 'react'
import { NavLink } from 'react-router-dom';
function Sidebar() {
    const toggleSidebar = () => {
        document.body.classList.toggle("open");
    }

    return (
        <>
            <div className="col-md-2 dcol1">
                        <nav class="sidebar">
                            <div class="sidebar-inner">
                                <header class="sidebar-header">
                                    <button
                                        type="button"
                                        class="sidebar-burger"
                                        onClick={toggleSidebar}
                                        id="sbutton"
                                    ></button>
                                    {/* <img src="./assets/blocklord-logo.png" class="sidebar-logo" /> */}
                                </header>
                                <nav class="sidebar-menu">
                                    <span style={{ fontSize: '19px' }} id='cname'>HI,Client Name</span>
                                    <hr />
                                    {/* </button> */}
                                    <p style={{ fontSize: '15px', paddingTop: '', marginLeft: '10px' }}>Main</p>
                                    <button type="button" id="sbutton">
                                        <img src="home.png" alt="" />
                                        <NavLink className="nav-link" to="/Dashboard"><span id='spam'>Dashboard</span></NavLink>

                                    </button>
                                    <p style={{ fontSize: '15px', padding: '0', marginLeft: '10px' }}>Get Help</p>
                                    <button type="button" id="sbutton">
                                        <img src="efund.png" />
                                        <NavLink className="nav-link" to="/Request"><span id="spam">Request Refund</span></NavLink>

                                    </button>
                                    <button type="button" id="sbutton">
                                        <img src="chat.png" />
                                        <NavLink className='nav-link' to='/Chat'><span id='spam'>Live Chat</span></NavLink>
                                        {/* <span>Live Chat</span> */}
                                    </button>

                                    <p style={{ fontSize: '15px', padding: '0', marginLeft: '10px' }}>Authentication</p>
                                    <button type="button" id="sbutton">
                                        <img src="use.png" />
                                        <NavLink className="nav-link" to="/Profile"><span id='spam'>Profile</span>
                                        </NavLink>

                                    </button>
                                    <button type="button" id="sbutton">
                                        <img src="signout.png" />
                                        <NavLink className="nav-link" to="/Signout"><span id='spam' >Sign Out</span>
                                        </NavLink>

                                    </button>
                                </nav>
                            </div>
                        </nav>
                    </div>
        </>
    )
}

export default Sidebar