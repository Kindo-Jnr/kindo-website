import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`hidden lg:flex fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">L</span>
          </div>
          <span className={`font-bold text-xl ${
            isScrolled ? 'text-gray-800' : 'text-white'
          }`}>
            Logo
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`font-medium transition-all duration-200 hover:text-blue-500 ${
                isActive(link.href)
                  ? 'text-blue-500 font-semibold'
                  : isScrolled
                  ? 'text-gray-700'
                  : 'text-white/90'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <button className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
          isScrolled
            ? 'bg-blue-500 text-white hover:bg-blue-600 shadow-md'
            : 'bg-white text-blue-500 hover:bg-gray-100'
        }`}>
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;