import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__column">
          <div className="footer__brand">Iron Legacy Promotion</div>
          <p className="footer__text">
            Szablon promocyjny dla organizacji PMMA. Podmień teksty, zdjęcia i dane
            walk na własne materiały.
          </p>
        </div>
        <div className="footer__column">
          <div className="footer__title">Sekcje</div>
          <ul className="footer__list">
            <li>Start</li>
            <li>Zawodnicy</li>
            <li>Turnieje</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="footer__column">
          <div className="footer__title">Kontakt</div>
          <ul className="footer__list">
            <li>kontakt@ironlegacy.pl</li>
            <li>+48 500 000 000</li>
            <li>Warszawa / Polska</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
