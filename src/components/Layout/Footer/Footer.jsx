import { NavLink } from 'react-router-dom';
import './Footer.scss';
import logo from '../../../../public/logo.png';

const menuItems = [
  { label: 'Start', to: '/' },
  { label: 'Zawodnicy', to: '/fighters' },
  { label: 'Blog', to: '/blog' },
  { label: 'Partnerzy', to: '/#partners' },
  { label: 'O Nas', to: '/#about' },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__column footer__column--brand">
          <NavLink to="/" className="footer__brand" aria-label="Fortis Union - strona główna">
            <span className="footer__brand-mark">
              <img src={logo} alt="Fortis Union" />
            </span>

            <span className="footer__brand-copy">
              <strong>Fortis Union</strong>
              <span>Promocja zawodników</span>
            </span>
          </NavLink>

          <ul className="footer__company">
            <li>Fortis Union Sp. z o.o.</li>
            <li>NIP: 0000000000</li>
            <li>REGON: 000000000</li>
            <li>Gdańsk, Polska</li>
          </ul>
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
            <li>
              <a href="mailto:kontakt@ironlegacy.pl" className="footer__link">
                kontakt@ironlegacy.pl
              </a>
            </li>

            <li>
              <a href="tel:+48500000000" className="footer__link">
                +48 500 000 000
              </a>
            </li>

            <li>Gdańsk / Polska</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;