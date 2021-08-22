import React from 'react';
import '../App.css'

function Header() {
    return (
        <>
            
               <div className="header-border">
                   <div className="section1">
                       <i className="far fa-envelope"></i><span className="subtext">admission@hicoder.in</span>
                       <i className="fas fa-phone-alt"></i><span className="subtext">(+91)9206980980</span>

                   </div>
                   <div className="section2">
                       <i className="fas fa-history"></i><span className="subtext">Mon-Fri 10:00am - 6:00pm</span>
                       </div>
                    <div className="header-icons">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-linkedin"></i>
                    </div>

                   
               </div>

            
        </>
    )
}

export default Header
