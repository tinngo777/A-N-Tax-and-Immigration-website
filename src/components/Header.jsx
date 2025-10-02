import React from 'react';
import logo from '../assets/anlogo3.png';

// The Header is a reusable component for the top of the site.
const Header = ({ setPage, lang, setLang, T }) => {
  const navItems = [
    { id: 'home', label: T.navHome },
    { id: 'services', label: T.navServices },
    { id: 'hours', label: T.navHours },
    { id: 'contact', label: T.navContact },
    { id: 'about', label: T.navAbout },
  ];

  return (
    <header className="bg-[#E6F9E6] shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="flex items-center cursor-pointer"
          onClick={() => setPage('home')}
        >
          <img 
            src={logo}
            alt="A&N Services Logo" 
            className="h-16 w-auto object-contain"
          />
          {/*<h1 className="text-xl md:text-2xl font-bold ml-4 text-blue-900 hidden sm:block">
            A&N Services
          </h1>*/}
        </div>
        
        {/* Language and Navigation */}
        <div className="flex flex-col items-end">
          {/* Language Switcher */}
          <div className="flex items-center space-x-2 mb-2">
            <button 
              onClick={() => setLang('en')}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                lang === 'en'
                  ? 'bg-blue-700 text-white'
                  : 'bg-white text-blue-700 border border-blue-700 hover:bg-blue-50'
              }`}
            >
              English
            </button>
            <button 
              onClick={() => setLang('vi')}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                lang === 'vi'
                  ? 'bg-blue-700 text-white'
                  : 'bg-white text-blue-700 border border-blue-700 hover:bg-blue-50'
              }`}
            >
              Tiếng Việt
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map(item => (
              <a 
                key={item.id}
                href="#"
                onClick={(e) => { e.preventDefault(); setPage(item.id); }} 
                className="text-blue-900 hover:text-red-600 font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <nav className="md:hidden flex justify-around p-2 bg-[#90EE90] border-t">
        {navItems.map(item => (
          <a 
            key={item.id}
            href="#"
            onClick={(e) => { e.preventDefault(); setPage(item.id); }} 
            className="text-xs text-center text-blue-900 hover:text-red-600 font-medium transition-colors"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
