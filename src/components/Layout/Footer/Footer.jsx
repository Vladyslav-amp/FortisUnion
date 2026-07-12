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
          <NavLink
            to="/"
            className="footer__brand"
            aria-label="Fortis Union - strona główna"
          >
            <span className="footer__brand-mark">
              <img
                className="footer__brand-image"
                src={logo}
                alt="Fortis Union"
              />
            </span>

            <span className="footer__brand-copy">
              <strong className="footer__brand-name">Fortis Union</strong>
              <span className="footer__brand-description">
                Promocja zawodników
              </span>
            </span>
          </NavLink>

          <ul className="footer__company">
            <li className="footer__company-item">
              FORTIS UNION SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ
            </li>
            <li className="footer__company-item">NIP: 5833560205</li>
            <li className="footer__company-item">REGON: 543933843</li>
            <li className="footer__company-item">KRS: 0001222499</li>
            <li className="footer__company-item">
              UL.ZAWODZIE 20, 80-726 GDAŃSK
            </li>
          </ul>
        </div>

        <div className="footer__column">
          <div className="footer__title">Sekcje</div>

          <ul className="footer__list">
            {menuItems.map((item) => (
              <li className="footer__item" key={item.to}>
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
            <li className="footer__item">
              <a href="mailto:fortisunionco@gmail.com" className="footer__link">
                fortisunionco@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__column">
          <p className="footer__copyright">
            © 2026 Fortis Union. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
