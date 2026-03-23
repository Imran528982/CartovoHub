'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    // Check saved theme
    const saved = localStorage.getItem('cartovohub-theme') || 'dark';
    setTheme(saved);
    document.documentElement.setAttribute('data-theme', saved);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('cartovohub-theme', next);
  };

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`} id="site-header">
      <div className="header-inner">
        {/* Logo */}
        <a href="/" className="logo" id="logo-link">
          <div className="logo-icon">C</div>
          <div className="logo-text">
            Cartovo<span>Hub</span>
          </div>
        </a>

        {/* Navigation */}
        <nav className="nav-links" id="main-nav">
          <a href="/" className="active">Home</a>
          <a href="#products">Featured Products</a>
          <a href="/hot-deals" target="_blank">Hot Deals</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Actions */}
        <div className="header-actions">
          {/* Theme Toggle */}
          {mounted && (
            <button
              className="theme-toggle"
              id="theme-toggle-btn"
              aria-label="Toggle theme"
              onClick={toggleTheme}
              suppressHydrationWarning
            >
              {theme === 'dark' ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          )}

          {/* Mobile Menu */}
          <button
            className="mobile-menu-btn"
            id="mobile-menu-btn"
            aria-label="Menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  );
}
