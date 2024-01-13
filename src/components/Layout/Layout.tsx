import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="bg-gray min-h-screen px-20">
      <nav className="py-6">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo/Name */}
          <div className="text-grayDark">
            <span className="text-xl">
              Edison <span className="text-green">Devadoss</span>
            </span>
          </div>
          {/* Menu items */}
          <div className="hidden space-x-6 mr-50 md:flex">
            <Link
              to="/"
              className="text-grayDark hover:text-black active:text-green active:bg-gray active:underline"
            >
              Home
            </Link>
            <Link
              to="/blogs"
              className="text-grayDark hover:text-black active:bg-gray active:underline"
            >
              Blogs
            </Link>
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
