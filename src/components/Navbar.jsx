import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const location = useLocation();

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer and dropdowns when route changes
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
    setMobileDropdownOpen(false);
  }, [location]);

  const servicesItems = [
    { label: "CCTV Installation", path: "/services/cctv-installation" },
    { label: "Gate Automation", path: "/services/gate-automation" },
    { label: "Vehicle Tracking", path: "/services/vehicle-tracking" },
    { label: "Home Automation", path: "/services/home-automation" }
  ];

  return (
    <>
      {/* Dynamic inline styles for the dropdown */}
      <style>{`
        .dropdown-container {
          position: relative;
        }
        .nav-dropdown-menu {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          background-color: var(--color-light);
          min-width: 230px;
          border: 1px solid var(--color-light-border);
          border-radius: var(--border-radius-md);
          box-shadow: var(--shadow-lg);
          padding: 0.75rem 0;
          list-style: none;
          display: none;
          z-index: 1020;
          opacity: 0;
          transition: opacity var(--transition-fast), transform var(--transition-fast);
        }
        .dropdown-container:hover .nav-dropdown-menu,
        .nav-dropdown-menu.open {
          display: block;
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }
        .dropdown-item-link {
          display: block;
          padding: 0.6rem 1.25rem;
          font-family: var(--font-heading);
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--color-text-dark);
          transition: var(--transition-fast);
        }
        .dropdown-item-link:hover,
        .dropdown-item-link.active {
          background-color: var(--color-light-bg);
          color: var(--color-primary);
          padding-left: 1.5rem;
        }
        
        /* Mobile Dropdown styles */
        .mobile-dropdown-toggle {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--color-text-dark);
          padding: 0.5rem 0;
          border: none;
          background: none;
          text-align: left;
          cursor: pointer;
        }
        .mobile-dropdown-list {
          list-style: none;
          padding-left: 1rem;
          margin-top: 0.5rem;
          display: none;
          flex-direction: column;
          gap: 0.75rem;
          border-left: 2px solid var(--color-light-border);
        }
        .mobile-dropdown-list.open {
          display: flex;
        }
        .mobile-dropdown-link {
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 500;
          color: var(--color-text-muted-dark);
          display: block;
          padding: 0.35rem 0;
        }
        
        /* Responsive logo size variables */
        :root {
          --logo-height: 48px;
          --logo-width: 140px;
        }
        @media (min-width: 768px) {
          :root {
            --logo-height: 64px;
            --logo-width: 180px;
          }
        }
      `}</style>

      <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Rectangular Logo Only (No circle!) */}
          <NavLink to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img 
              src={siteConfig.logo} 
              alt="Hitec Innovations" 
              style={{
                height: 'var(--logo-height, 38px)',
                width: 'var(--logo-width, 112px)',
                objectFit: 'contain',
                display: 'block',
                transition: 'var(--transition-fast)'
              }} 
            />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="nav-menu-desktop">
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>About Us</NavLink>
            
            {/* Services Dropdown */}
            <div 
              className="dropdown-container"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <NavLink 
                to="/services" 
                className={({ isActive }) => `nav-link ${isActive || location.pathname.startsWith('/services/') ? 'active' : ''}`}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
              >
                Services <ChevronDown size={14} />
              </NavLink>
              <ul className={`nav-dropdown-menu ${dropdownOpen ? 'open' : ''}`}>
                {servicesItems.map((item) => (
                  <li key={item.path}>
                    <NavLink 
                      to={item.path} 
                      className={({ isActive }) => `dropdown-item-link ${isActive ? 'active' : ''}`}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <NavLink to="/projects" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Projects</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Contact Us</NavLink>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            className={`hamburger-btn ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={isOpen}
          >
            <span className="hamburger-line" style={{ backgroundColor: (isScrolled || isOpen || location.pathname !== '/') ? 'var(--color-dark)' : 'var(--color-light)' }}></span>
            <span className="hamburger-line" style={{ backgroundColor: (isScrolled || isOpen || location.pathname !== '/') ? 'var(--color-dark)' : 'var(--color-light)' }}></span>
            <span className="hamburger-line" style={{ backgroundColor: (isScrolled || isOpen || location.pathname !== '/') ? 'var(--color-dark)' : 'var(--color-light)' }}></span>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`mobile-menu-backdrop ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-menu-drawer ${isOpen ? 'open' : ''}`}>
        <nav>
          <ul className="mobile-nav-list">
            <li>
              <NavLink to="/" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>About Us</NavLink>
            </li>
            
            {/* Services Mobile Collapsible dropdown */}
            <li>
              <button 
                className="mobile-dropdown-toggle"
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              >
                <span>Services</span>
                {mobileDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              <ul className={`mobile-dropdown-list ${mobileDropdownOpen ? 'open' : ''}`}>
                {servicesItems.map((item) => (
                  <li key={item.path}>
                    <NavLink 
                      to={item.path} 
                      className={({ isActive }) => `mobile-dropdown-link ${isActive ? 'active' : ''}`}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <NavLink to="/projects" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>Projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>Contact Us</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
