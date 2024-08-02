import React from 'react';
import '../../assests/style.css';


const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-gray-200/50 shadow-xl dark:bg-gray-200/25 backdrop-blur-lg text-gray-900">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </div>
            <ul
              tabIndex={1}
              className="menu menu-sm dropdown-content bg-white/50 rounded-box z-[2] mt-3 w-52 p-2 shadow">
              <li><a>Homepage</a></li>
              <li><a href='https://muhammad-sumair.netlify.app/' target='_blank'>Developer Portfolio</a></li>
              <li><a href='https://github.com/Muhammad-Sumair-Ali'>About us</a></li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
        
            <button className="name" data-text="Awesome">
              <span className="actual-text text-gray-600 dark:text-gray-200">&nbsp;Muhammad&nbsp;Sumair&nbsp;QuizApp</span>
              <span aria-hidden="true" className="hover-text">&nbsp;Muhammad&nbsp;Sumair&nbsp;QuizApp</span>
          </button>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          
        </div>
      </div>
    </div>
   )
    }
export default Navbar