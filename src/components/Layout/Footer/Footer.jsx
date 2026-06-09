import { NavLink } from 'react-router-dom';
import './Footer.scss';

const menuItems = [
  { label: 'Start', to: '/' },
  { label: 'Zawodnicy', to: '/fighters' },
  { label: 'Historie', to: '/blog' },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__column">
          <div className="footer__brand">Iron Legacy Promotion</div>
          <p className="footer__text">
           
          </p>
        </div>

        <div className="footer__column">
          <div className="footer__title">Sekcje</div>
          <ul className="footer__list">
            {menuItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `footer__link${isActive ? ' footer__link--active' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__column">
          <div className="footer__title">Kontakt</div>
          <ul className="footer__list">
            <li>example@ironlegacy.pl</li>
            <li>+48 500 000 000</li>
            <li>Gdansk / Polska</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;