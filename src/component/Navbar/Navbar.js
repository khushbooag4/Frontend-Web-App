import React ,{useState} from 'react'
import './NavBar.css'
import {Link }from 'react-router-dom';
import Dropdown from './DropDown';

function Navbar() {
    const [click,setClick] = useState(false);
    const[dropdown,setDropdown] = useState(false);
    const handleClick = () => setClick(!click);
// Menu closed in Mobile stup
    const closedMobile = () =>{
        setClick(false)
    };
    const onMouse = () =>{
        if(window.innerWidth<1000){
            setDropdown(false);
        }else{
            setDropdown(true);
        }
    };
    const offMouse = () =>{
        if(window.innerWidth<1000){
            setDropdown(false);
        }else{
            setDropdown(false);
        }
    }
    return (
        <>
            <nav className="navbar">
                <div className="navmenu">
                <a href='/' className="logo">
                    <img width="180px" src="/Images/logo-dark.png" alt=""/>
                </a>

                <div className='menu-icon'onClick={handleClick}>
                    <i className={click ? 'fas-fa-times' : 'fas fa-bars'}></i>
                </div>

                 <ul className={click ? 'navmenu.active' : 'nav-menu'}>
                 <li className='nav-item' onMouseEnter={onMouse} onMouseLeave={offMouse}>
                     <Link  to='/' className='nav-links' onClick={closedMobile} >HICODER <span>+</span> </Link>
                   {dropdown && <Dropdown />}
                </li>
                <li className='nav-item'>
                     <Link  to='/' className='nav-links' onClick={closedMobile} >COURSE <span>+</span></Link>
                     {dropdown && <Dropdown />}
                </li>
                <li className='nav-item'>
                     <Link  to='/' className='nav-links' onClick={closedMobile} >HIRE <span>+</span></Link>
                     {dropdown && <Dropdown />}
                </li>

                 </ul>
                 <button className="btn">Apply Now</button>
                 <i id = 'dot' class="fas fa-ellipsis-v"></i>
                 </div>
            </nav>
        </>
    )
}

export default Navbar
