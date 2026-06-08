import { NavLink, useLocation } from 'react-router-dom';
import Button from '../../UI/Button/Button';
import './Header.scss';
import logo from '../../../../public/logo.png';

const menuItems = [
  { label: 'Start', to: '/' },
  { label: 'Zawodnicy', to: '/fighters' },
  { label: 'Historie', to: '/blog' },
];

function Header() {
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

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
            <img src={logo} alt="Fortis Union" />
          </span>

          <span className="header__brand-copy">
            <strong>Fortis Union</strong>
            <span>Promocja zawodników</span>
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
      </div>
    </header>
  );
}

export default Header;