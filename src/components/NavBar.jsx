import React from 'react'

const NavBar = () => {
  return (
    <nav className='lg:w-[50%] mx-auto'>
      <ul className='nav'>
        <li className='nav-item'><a href="/">OUR STORY</a></li>
        <li className='nav-item'><a href="/">SERVICES</a></li>
        <li className='nav-item'><a href="/">BOOKING ONLINE</a></li>
        <li className='nav-item'><a href="/">FRANCHISE</a></li>
        <li className='nav-item'><a href="/">MEDIA CENTER</a></li>
        <li className='nav-item'><a href="/">FAQ</a></li>
        <li className='nav-item'><a href="/">CONTACT US</a></li>
        <li className='nav-item cursor-pointer'>ع</li>
      </ul>
    </nav>
  )
}

export default NavBar