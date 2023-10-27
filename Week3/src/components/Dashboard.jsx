import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
   <>
    <nav className='navbar'>
        <Link className='link' to="/">Coin Flipper</Link>
        <Link className='link' to="/hamburger">Hamburger</Link>
        <Link className='link' to="/todo">Todo App</Link>
    </nav>
    <div>
        <Outlet/>
    </div>
   </>

  )
}

export default Dashboard