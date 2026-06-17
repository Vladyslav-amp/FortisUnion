import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
import Button from '../../UI/Button/Button';
import './Header.scss';
import logo from '../../../../public/logo.png';

const menuItems = [
  { label: 'Start', to: '/' },
  { label: 'Zawodnicy', to: '/fighters' },
  { label: 'Blog', to: '/blog' },
  { label: 'Eventy', to: '/events' },
  { label: 'Partnerzy', to: '/#partners' },
  { label: 'O Nas', to: '/#about' },
];

function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    closeMenu();

    if (location.pathname === '/') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  const handleBurgerClick = () => {
    setIsMenuOpen((current) => !current);
  };

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
        <NavLink
          to="/"
          className="header__brand"
          aria-label="Fortis Union - strona główna"
          onClick={handleLogoClick}
        >
          <span className="header__brand-mark">
            <img
              className="header__brand-image"
              src={logo}
              alt="Fortis Union"
            />
          </span>

          <span className="header__brand-copy">
            <strong className="header__brand-title">Fortis Union</strong>
            <span className="header__brand-subtitle">
              Promocja zawodników
            </span>
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
          <Button href="#contact" label="Kontakt" variant="secondary" />
        </div>

        <button
          type="button"
          className="header__burger"
          onClick={handleBurgerClick}
          aria-label={isMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <HiOutlineX className="header__burger-icon" />
          ) : (
            <HiOutlineMenuAlt3 className="header__burger-icon" />
          )}
        </button>
      </div>

      <div
        className={`header__mobile${isMenuOpen ? ' header__mobile--open' : ''}`}
      >
        <nav className="header__mobile-nav" aria-label="Menu mobilne">
          {menuItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `header__mobile-link${isActive ? ' header__mobile-link--active' : ''
                }`
              }
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}

          <div className="header__mobile-action">
            <Button href="#contact" label="Kontakt" variant="secondary" />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
