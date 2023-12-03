import React from 'react'
import { FaMeetup } from "react-icons/fa6";
import DarkMode from './DarkMode/DarkMode';
import { FaHeart } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";

function NavBar() {
  return (
    <div>
           <nav className="dark:bg-gray-900 z-20 top-0 border-b border-gray-200 dark:border-gray-600 dark:text-white">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 dark:text-white">
          <Link to="/home"><a className="flex items-center space-x-3 rtl:space-x-reverse dark:text-white">
          <FaMeetup />
            <span className="self-center text-4xl font-bold whitespace-nowrap dark:text-white">Cool Collections</span>
          </a></Link>
          
          <div className="flex md:order-2 space-x-6 md:space-x-0 rtl:space-x-reverse">
          <Link to="/favourites"><button type="button" className="inline-flex items-center text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-3 mb-1">
          <FaHeart />
          
            <span className="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
              2
            </span>
            
          </button></Link>
            <Link to="/new-meetup"><button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-3 mb-1"><FaPlus /></button></Link>
            <DarkMode/>
          </div>
        
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to="/home"><a className="block py-2 px-3 rounded md:bg-transparent md:p-0 md:dark:text-blue-500" aria-current="page">Home</a></Link>
              </li>
              <li>
                <Link to="/about"><a className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a></Link>
              </li>
              <li>
                <Link to="/all-meetups"><a className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">All Collections</a></Link>
              </li>
              <li>
                <Link to="/favourites"><a className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Favourites</a></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

  )
}

export default NavBar
