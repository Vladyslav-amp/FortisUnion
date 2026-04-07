
import { Link } from 'react-router-dom';
import { organization } from '../../../data/siteData';
import './Footer.scss';

const sectionLinks = [
  { label: 'Start', to: '/' },
  { label: 'Zawodnicy', to: '/fighters' },
  { label: 'Turnieje', to: '/events' },
  { label: 'Blog', to: '/blog' },
];

const shortcutLinks = [
  { label: 'Sekcja zawodników', to: '/#fighters' },
  { label: 'Sekcja turniejów', to: '/#events' },
  { label: 'Współpraca i kontakt', to: '/#join' },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__column">
          <div className="footer__brand">{organization.name}</div>
          <p className="footer__text">{organization.claim}</p>
        </div>

        <div className="footer__column">
          <div className="footer__title">Nawigacja</div>
          <ul className="footer__list">
            {sectionLinks.map((link) => (
              <li key={link.to}>
                <Link className="footer__link" to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__column">
          <div className="footer__title">Skróty strony głównej</div>
          <ul className="footer__list">
            {shortcutLinks.map((link) => (
              <li key={link.to}>
                <Link className="footer__link" to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__column">
          <div className="footer__title">Kontakt</div>
          <ul className="footer__list">
            <li><a className="footer__link" href={`mailto:${organization.email}`}>{organization.email}</a></li>
            <li><a className="footer__link" href={`tel:${organization.phone.replace(/\s+/g, '')}`}>{organization.phone}</a></li>
            <li>{organization.city} / {organization.country}</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
