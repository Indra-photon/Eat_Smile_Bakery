import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { title: 'HOME', path: '/' },
    { title: 'HOURS & LOCATION', path: '/location' },
    { title: 'ONLINE CAKE ORDERS', path: '/orders' }
  ];

  return (
    <header className="w-full">
      {/* Top navigation */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <img 
                src="/api/placeholder/120/50" 
                alt="Oliver's Bakery" 
                className="h-12 w-auto"
              />
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.path}
                  className="text-gray-700 hover:text-red-700 px-3 py-2 text-sm font-medium"
                >
                  {link.title}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-red-700 p-2"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.path}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-700 hover:bg-gray-50"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero banner */}
      <div className="bg-red-800 text-white text-center py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-cursive mb-2">Being Sweet to You Is Our Business!</h1>
          <p className="text-sm">
            3526 Roosevelt Rd, Kenosha, WI 53142 (262) 652-3984
          </p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;