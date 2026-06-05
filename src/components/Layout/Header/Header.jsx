import { NavLink } from 'react-router-dom';
import Button from '../../UI/Button';
import './Header.scss';

const menuItems = [
  { label: 'Start', to: '/' },
  { label: 'Zawodnicy', to: '/fighters' },
  { label: 'Historie', to: '/blog' },
];

function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <NavLink to="/" className="header__brand" aria-label="Iron Legacy - strona główna">
          <span className="header__brand-mark">IL</span>
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
