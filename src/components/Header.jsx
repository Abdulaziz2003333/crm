import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../style/main.css'
import logo from '../images/crm-crm-svgrepo-com (1).svg'

 





function Header() {


  return (
    <>
    <header>
    
      <nav>
     <div className="container">
      <div className="navigation">
        <img src={logo} alt="logo" className='header_logo'/>
        <div className='navigation_right'>
        <ul className="navigation_link">
         <li> <Link to='/adduser'>add user</Link></li>
          <li><Link to='/userlist'>user list</Link></li>
          <li><Link to='/userpay'>user pay</Link></li>
          <li><Link to='/userpaylist'>user paylist</Link></li>
          <li><Link to='/home'>home</Link>  </li>
        </ul>
        <div>
          <button>Register</button>
        </div>
        </div>
      </div>
      </div> 
      </nav> 
    </header>



    
    </>
  )
}

export default Header