import React from 'react'

function Toolbar() {
    return (
        <div>
            <div className="toolbar-area hidden-md">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="toolbar-contact">
                            <ul>
                                <li><i className="flaticon-email"></i><a href="/cdn-cgi/l/email-protection#157471787c66667c7a7b557d7c767a7170673b7c7b"><span classNameNameName="__cf_email__" data-cfemail="b1d0d5dcd8c2c2d8dedff1d9d8d2ded5d4c39fd8df">[email&#160;protected]</span></a></li>
                                <li><i className="flaticon-call"></i><a href="tel:+919206980980">(+91) 9206 980 980</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="toolbar-sl-share">
                            <ul>
                                <li className="opening"> <i className="flaticon-clock"></i> Mon - Fri: 10:00am - 06.00pm</li>
                                <li><a href="#" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#" target="_blank"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="#" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Toolbar
