import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div>HomePage


<div className='navigateLink'> 
<button > <Link to='/adduser'> Add User</Link>   </button>
<button > <Link to='/userpay'> User Pay</Link>   </button>
<button > <Link to='/userlist'> User List </Link>   </button>
<button > <Link to='/userpaylist'> User Pay List </Link>   </button>
 <Link to='/edit'></Link> 
</div>
 
    </div>
  )
}

export default HomePage