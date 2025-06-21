import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='shadow-xl w-full z-50 sticky rounded-4xl bg-gray-50 top-0 left-0 '>
      <div className='max-w-7xl mx-auto px-4 py-4 flex items-center justify-between'>
        <h1 className='text-2xl font-bold text-emerald-500 '><span className='text-white bg-emerald-500 rounded-4xl py-1 px-4 font-thin'>Taste</span>Buds</h1>
        <nav className='hidden md:flex justify-center items-center gap-x-10 text-m font-medium'>
          <NavLink className={(e) => e.isActive ? 'text-emerald-400' : ""} to='/'>Home</NavLink>
          <NavLink className={(e) => e.isActive ? 'text-emerald-400' : ""} to='/recipies'>Recipies</NavLink>
          <NavLink className={(e) => e.isActive ? 'text-emerald-400' : ""} to='/about'>About</NavLink>
          <NavLink className={(e) => e.isActive ? 'text-emerald-400' : ""} to='/favorite'>Favorite</NavLink>
          <NavLink className={`px-4 py-2 bg-emerald-600 rounded-4xl active:scale-75 text-white ${(e) => e.isActive ? "text-red-200" : ""}`} to='/create-recipie'>Create Recipie</NavLink>
        </nav>
        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className=" bg-gray-50 shadow-lg md:hidden rounded-4xl absolute top-16 left-0 w-full z-50">
          <nav className="flex flex-col items-center p-4 space-y-4">
            <NavLink className={(e) => e.isActive ? 'text-emerald-400' : ""} to='/' onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink className={(e) => e.isActive ? 'text-emerald-400' : ""} to='/recipies' onClick={() => setIsOpen(false)}>Recipies</NavLink>
            <NavLink className={(e) => e.isActive ? 'text-emerald-400' : ""} to='/about' onClick={() => setIsOpen(false)}>About</NavLink>
            <NavLink className={(e) => e.isActive ? 'text-emerald-400' : ""} to='/favorite' onClick={() => setIsOpen(false)}>Favorite</NavLink>
            <NavLink className={`px-4 py-2 bg-emerald-600 rounded-4xl active:scale-75 text-white ${(e) => e.isActive ? "text-red-200" : ""}`} to='/create-recipie' onClick={() => setIsOpen(false)}>Create Recipie</NavLink>
          </nav>
        </div>
      )}
    </div>
  )
}

export default Navbar