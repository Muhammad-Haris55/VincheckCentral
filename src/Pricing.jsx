import React from 'react'

function Pricing() {
    return (
        <>
            <body class="mx-auto" >
                {/* <!-- starts --> */}
                <section class="wrap-bg container-fluid pb-3 position-relative">
                    <img src="./images/bg-top.svg" id="bg-img-top" alt="" />
                    <h2 class="text-center py-3 pb-4" id='pricetag' >Our Pricing</h2>

                    <div
                        class="container py-5 position-relative d-flex justify-content-center"
                    >
                        <div class="row justify-content-center">
                            <div class="col-md-4 mb-5 text-center sm-px-3" id="master">
                                <p class="text-center" id='gheading' style={{color:'white'}}>BASIC</p>
                                <div
                                    class="d-flex align-items-center justify-content-center text-dark mb-3"
                                >
                                    <span class=""></span>
                                    <h1 class="price annually animate__bounceIn" id="bprice" style={{color:'white'}}>$32.00</h1>
                                    {/* <h1 class="price monthly animate__bounceIn d-none">19.99</h1> */}
                                </div>
                                <p style={{color:'white',cursor:'default'}}id='gheading2' >1 VEHICLE REPORT</p>
                                <div class="price-card">
                                    <p>Vehicle Specification</p>
                                    <p>DMV Title History</p>
                                    <p>Safety Recall Status</p>
                                    <p>Online Listing History</p>
                                    <p>Junk & Salvage Information</p>
                                    <p>Accident Information</p>
                                    
                                </div>
                                <a href="#" class="btn-block btn btn-cute-1 mt-4" id="goldbtn">Sign Up</a>

                                {/* <a href="#" class="btn-block btn btn-cute mt-4">Learn More</a> */}
                            </div>

                            {/* <!-- professional --> */}
                            <div class="col-md-4 mb-5 text-center" id="prof">
                                <p class="text-center text-white " id='gheading' >GOLD</p>
                                <div class="d-flex align-items-center justify-content-center mb-3">
                                    <span class="text-white"></span>
                                    <h1 class="price text-white annually animate__bounceIn">
                                        $65.95
                                    </h1>
                                </div>
                                <p style={{ color: 'white',cursor:'default' }} id='gheading2'>5 VEHICLE REPORT</p>
                                <div class="price-card">
                                    <p>Vehicle Specification</p>
                                    <p>DMV Title History</p>
                                    <p>Safety Recall Status</p>
                                    <p>Online Listing History</p>
                                    <p>Junk & Salvage Information</p>
                                    <p>Accident Information</p>
                                </div>

                                <a href="#" class="btn-block btn btn-cute-1 mt-4" id="goldbtn">Sign Up</a>
                            </div>

                            {/* <!-- master --> */}

                            <div class="col-md-4 mb-5 text-center" id="master">
                                <p class="text-center" id='gheading' style={{color:'white'}}>SILVER</p>
                                <div
                                    class="d-flex align-items-center justify-content-center  mb-3"
                                >
                                    <span class=""></span>
                                    <h1 class="price annually animate__bounceIn" style={{color:'white'}}>$39.95</h1>
                                </div>
                                <p style={{ color: 'white',cursor:'default' }} id='gheading2' >2 VEHICLE REPORT</p>
                                <div class="price-card">
                                    <p>Vehicle Specification</p>
                                    <p>DMV Title History</p>
                                    <p>Safety Recall Status</p>
                                    <p>Online Listing History</p>
                                    <p>Junk & Salvage Information</p>
                                    <p>Accident Information</p>
                                </div>
                                
                                <a href="#" class="btn-block btn btn-cute-1 mt-4" id="goldbtn">Sign Up</a>

                                {/* <a href="#" class="btn-block btn btn-cute mt-4">Learn More</a> */}
                            </div>
                        </div>
                    </div>
                    <img src="./images/bg-bottom.svg" id="bg-img-bottom" alt="" />
                </section>
            </body>

            <body class="mx-auto">
                {/* <!-- starts --> */}
                <section class="wrap-bg container-fluid pb-3 position-relative">
                    
                    <div
                        class="container py-5 position-relative d-flex justify-content-center"
                    >
                        <div class="row justify-content-center">
                            <div class="col-md-4 mb-5 text-center sm-px-3" id="master">
                                <p class="text-center" id='gheading' style={{color:'white'}}>PLATINIUM</p>
                                <div
                                    class="d-flex align-items-center justify-content-center text-dark mb-3"
                                >
                                    <span class=""></span>
                                    <h1 class="price annually animate__bounceIn" id="bprice" style={{color:'white'}}>$103.95</h1>
                                    {/* <h1 class="price monthly animate__bounceIn d-none">19.99</h1> */}
                                </div>
                                <p style={{color:'white',cursor:'default'}}id='gheading2' >10 VEHICLE REPORT</p>
                                <div class="price-card">
                                    <p>Vehicle Specification</p>
                                    <p>DMV Title History</p>
                                    <p>Safety Recall Status</p>
                                    <p>Online Listing History</p>
                                    <p>Junk & Salvage Information</p>
                                    <p>Accident Information</p>
                                    
                                </div>
                                <a href="#" class="btn-block btn btn-cute-1 mt-4" id="goldbtn">Sign Up</a>

                                {/* <a href="#" class="btn-block btn btn-cute mt-4">Learn More</a> */}
                            </div>

                            {/* <!-- professional --> */}
                            <div class="col-md-4 mb-5 text-center" id="prof">
                                <p class="text-center text-white " id='gheading' >EXECUTIVE</p>
                                <div class="d-flex align-items-center justify-content-center mb-3">
                                    <span class="text-white"></span>
                                    <h1 class="price text-white annually animate__bounceIn">
                                        $259.95
                                    </h1>
                                </div>
                                <p style={{ color: 'white',cursor:'default' }} id='gheading2'>50 VEHICLE REPORT</p>
                                <div class="price-card">
                                    <p>Vehicle Specification</p>
                                    <p>DMV Title History</p>
                                    <p>Safety Recall Status</p>
                                    <p>Online Listing History</p>
                                    <p>Junk & Salvage Information</p>
                                    <p>Accident Information</p>
                                </div>

                                <a href="#" class="btn-block btn btn-cute-1 mt-4" id="goldbtn">Sign Up</a>
                            </div>

                            {/* <!-- master --> */}

                            <div class="col-md-4 mb-5 text-center" id="master">
                                <p class="text-center" id='gheading' style={{color:'white'}}>DIAMOND</p>
                                <div
                                    class="d-flex align-items-center justify-content-center  mb-3"
                                >
                                    <span class=""></span>
                                    <h1 class="price annually animate__bounceIn" style={{color:'white'}}>$159.95</h1>
                                </div>
                                <p style={{ color: 'white',cursor:'default' }} id='gheading2' >25 VEHICLE REPORT</p>
                                <div class="price-card">
                                    <p>Vehicle Specification</p>
                                    <p>DMV Title History</p>
                                    <p>Safety Recall Status</p>
                                    <p>Online Listing History</p>
                                    <p>Junk & Salvage Information</p>
                                    <p>Accident Information</p>
                                </div>
                                
                                <a href="#" class="btn-block btn btn-cute-1 mt-4" id="goldbtn">Sign Up</a>

                                {/* <a href="#" class="btn-block btn btn-cute mt-4">Learn More</a> */}
                            </div>
                        </div>
                    </div>
                    <img src="./images/bg-bottom.svg" id="bg-img-bottom" alt="" />
                </section>
            </body>


        </>
    )
}

export default Pricing
