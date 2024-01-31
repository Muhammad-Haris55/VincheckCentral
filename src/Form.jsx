import React from 'react'

function Form() {
    return (
        <>
            <div className="col-md-6 col-sm-6 mx-auto col2">
                <div className="col-md-11 col-sm-11 mx-auto wform">
                    <h3 className='text-center'>Full Vehicle History Report</h3>
                    <h5 className='text-center'>Find any vehicle by VIN</h5>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter VIN to Search"></input>
                    <p className='text-center pt-2 wformp'>Example: 1VXBR12EXCP901213</p>
                    <h5 className='text-center captcha'>Solve Captcha</h5>
                    <div className="col-md-11 mx-auto inputgroup">
                        <div className="captcha">
                            <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="Answer"></input>
                        </div>
                        <div className="box">
                            <div>
                                <p className='boxp'>4+1=</p>

                            </div>
                        </div>
                    </div>
                    <div className="searchbtn">
                        <div className="parabutton">
                            <button id="pbtn">
                                <span>SEARCH</span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Form
