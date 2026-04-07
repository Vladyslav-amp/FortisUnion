
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Button from '../../UI/Button/Button';
import { organization } from '../../../data/siteData';
import './Header.scss';

const menuItems = [
  { label: 'Start', to: '/' },
  { label: 'Zawodnicy', to: '/fighters' },
  { label: 'Turnieje', to: '/events' },
  { label: 'Blog', to: '/blog' },
];

const quickLinks = [
  { label: 'Top 4', to: '/#fighters' },
  { label: 'Turnieje', to: '/#events' },
  { label: 'Kontakt', to: '/#join' },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="container header__inner">
        <NavLink to="/" className="header__brand">
          <span className="header__brand-mark">{organization.mark}</span>
          <span className="header__brand-copy">
            <strong>{organization.name}</strong>
            <span>{organization.city} • PMMA Promotion</span>
          </span>
        </NavLink>

        <nav className="header__nav" aria-label="Główne menu">
          {menuItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `header__link${isActive ? ' header__link--active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header__actions">
          <Button href="/#join" label="Zgłoś zawodnika" variant="secondary" />
        </div>

        <button
          type="button"
          className={`header__burger${isMenuOpen ? ' header__burger--active' : ''}`}
          aria-label={isMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`header__mobile${isMenuOpen ? ' header__mobile--open' : ''}`}>
        <div className="container header__mobile-inner">
          <nav className="header__mobile-nav" aria-label="Menu mobilne">
            {menuItems.map((item) => (
              <NavLink
                key={`mobile-${item.to}`}
                to={item.to}
                className={({ isActive }) =>
                  `header__mobile-link${isActive ? ' header__mobile-link--active' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="header__mobile-group">
            <span className="header__mobile-title">Szybkie przejścia</span>
            <div className="header__mobile-quick-links">
              {quickLinks.map((item) => (
                <Link key={item.to} to={item.to} className="header__chip">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="header__mobile-cta">
            <Button href="/#join" label="Zgłoś zawodnika" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
