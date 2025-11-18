import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="glass-effect sticky top-0 z-50 flex justify-between items-center px-4 md:px-20 py-4">
      <Link to="/" className="flex items-center text-xl font-bold text-white">
        <i className="fas fa-calendar-alt mr-2"></i>
        EventBuddy
      </Link>
      
      <nav className="hidden md:block">
        <ul className="flex space-x-6">
          <li>
            <Link 
              to="/" 
              className={`text-white hover:text-purple-400 transition-colors ${
                isActive('/') ? 'text-purple-400' : ''
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/create" 
              className={`text-white hover:text-purple-400 transition-colors ${
                isActive('/create') ? 'text-purple-400' : ''
              }`}
            >
              Create Event
            </Link>
          </li>
          <li>
            <Link 
              to="/profile" 
              className={`text-white hover:text-purple-400 transition-colors ${
                isActive('/profile') ? 'text-purple-400' : ''
              }`}
            >
              My Events
            </Link>
          </li>
        </ul>
      </nav>
      
      <Link to="/login" className="btn-primary flex items-center">
        <i className="fas fa-user mr-2"></i>
        Sign Up
      </Link>
    </header>
  );
};

export default Header;