import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex py-8 px-8 bg-cyan-900 justify-between'>
      <h2 className='text-3xl font-bold'>Abhishek</h2>
      <div className='flex gap-8'>
        {/* <a className='text-lg font-bold' href="/product">Product</a>
        <a className='text-lg font-bold' href="/">Home</a>
        <a className='text-lg font-bold' href="/about">About</a> */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/product">Product</NavLink>
        </div> 

    </div>
  )
}

export default Navbar