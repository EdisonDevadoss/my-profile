import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="bg-gray min-h-screen px-8 md:px-20">
      <nav className="py-6">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo/Name */}
          <div className="text-grayDark">
            <span className="text-xl">
              Edison <span className="text-green">Devadoss</span>
            </span>
          </div>
          {/* Menu items */}
          <div className="space-x-6 mr-50 md:flex">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-black underline underline-offset-4 decoration-4 decoration-green'
                  : 'text-grayDark hover:text-black active:bg-gray'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive
                  ? 'text-black underline underline-offset-4 decoration-4 decoration-green'
                  : 'text-grayDark hover:text-black active:bg-gray'
              }
            >
              Blogs
            </NavLink>
          </div>
          {/* Right Side */}
          <div></div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;
