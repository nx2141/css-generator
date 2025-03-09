import React, { useState } from 'react';
import { Layout, ChevronDown, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <Layout className="h-8 w-8 text-indigo-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">CSS Tools</span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className={`${
                  location.pathname === '/'
                    ? 'border-indigo-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                HOME
              </Link>
              <div className="relative">
                <Link
                  to="/tools"
                  className={`${
                    location.pathname.startsWith('/tools')
                      ? 'border-indigo-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                  onMouseEnter={() => setIsToolsOpen(true)}
                  onMouseLeave={() => setIsToolsOpen(false)}
                >
                  TOOLS
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Link>
                {isToolsOpen && (
                  <div
                    className="absolute z-10 -ml-4 mt-1 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
                    onMouseEnter={() => setIsToolsOpen(true)}
                    onMouseLeave={() => setIsToolsOpen(false)}
                  >
                    <div className="py-1" role="menu">
                      <Link
                        to="/tools/flexbox"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Flexbox ジェネレーター
                      </Link>
                      <Link
                        to="/tools/grid"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Grid ジェネレーター
                      </Link>
                      <Link
                        to="/tools/table"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Table ジェネレーター
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link
              to="/login"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center hover:bg-indigo-700 transition-colors"
            >
              <User className="h-4 w-4 mr-2" />
              LOGIN
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}