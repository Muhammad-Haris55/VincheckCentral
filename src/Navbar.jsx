import React, { useEffect } from 'react'
import Loginform from './Loginform'
import { useNavigate } from 'react-router-dom'
import Aos from 'aos'

import { NavLink } from 'react-router-dom'

function Navbar() {
    useEffect(() => {
        Aos.init();
    }, [])
    const navigate =useNavigate()
    const prices=()=>{
        navigate('/Login')

    }
    return (
        <>
            {/* <nav className="navbar navbar-expand-lg " id='navs'>
                <div className="col-md-10 mx-auto container">
                    <NavLink className="navbar-brand" id="brandname" to="/"  data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="500"
                        data-aos-delay="500">Vincheck Central</NavLink>
                    <label className="burger" htmlFor="burger"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <input type="checkbox" id="burger"></input>
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0"  data-aos-anchor="#example-anchor"
                            data-aos-offset="500"
                            data-aos-duration="500"
                            data-aos-delay="500">
                            <li className="nav-item">
                                <NavLink className="nav-link" id="home" to="/" >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" id="home1" to="" >Sample report</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='#pricing' id="home2" to="pricing" >Prices</a>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" id="home3" to="Login" >Customer Login</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
            {/* <a class="btn btn-primary"  data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                Link with href
            </a>
            */}
            {/* Lap navbar */}
            <div className="navhead container">
                <span className="items col-md-11 mx-auto container" >

                    <NavLink className="navbar-brand" id="brandname" to="/" data-aos='flip-left' data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="500"
                        data-aos-delay="500">Vincheck Central</NavLink>
                        
                    <li  className="nav-item navbar-nav mt-2">
                        <NavLink className="nav-link" id="home" to="/" >Home</NavLink>
                    </li>
                    <li className="nav-item navbar-nav mt-1">
                        <NavLink className="nav-link" id="home1" to="/Sample" >Sample report</NavLink>
                    </li>
                    <li className="nav-item navbar-nav mt-1">
                        <a className="nav-link" href='#pricing' id="home2" to="pricing" >Prices</a>
                    </li>
                    <li className="nav-item navbar-nav mt-1">
                        <NavLink className="nav-link" id="home3" to="Login" >Customer Login</NavLink>
                    </li>
                </span>


                <span>
                    <label className="burger" htmlFor="burger "
                        data-aos='zoom-up'
                        data-aos-offset="500"
                        data-aos-duration="500"
                        data-aos-delay="500"
                        type="checkbox"
                        data-bs-toggle="offcanvas" href="#offcanvasExample" aria-controls="offcanvasExample"
                        id="burger"
                    >
                        <input type='checkbox'>
                        </input>
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </span>

            </div>
            {/* Phone bars */}
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">VINCHECK CENTRAL</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" id='canvasclose'></button>
                </div>
                <div class="offcanvas-body">
                    <div className='content'>
                        <ul id='ul'>
                            <a className='nav-link' to='/'>
                                <li id='li'>
                                    <img src="house.png" alt="" /> Home
                                </li>
                            </a>
                            <NavLink className='nav-link' to='/Sample'>
                                <li id='li'>
                                    <img src="rep.png" alt="" /> Sample report
                                </li>
                            </NavLink>
                            <a className='nav-link' href="#pricing" >
                                <li id='li'>
                                    <img src="p.png" alt="" /> Prices
                                </li>
                            </a>
                            <a className='nav-link' to="Login" href='Login' >
                                <li id='li'>
                                    <img src="login.png" alt="" />Customer login
                                </li>
                            </a>
                        </ul>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Navbar
