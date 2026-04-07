import Button from '../UI/Button/Button';
import './JoinPromotion.scss';

function JoinPromotion() {
  return (
    <section className="join-promotion" id="join">
      <div className="container join-promotion__inner">
        <div className="join-promotion__content">
          <span className="join-promotion__eyebrow">Dla zawodników i sponsorów</span>
          <h2 className="join-promotion__title">Buduj roster, partnerstwa i zasięgi w jednym miejscu</h2>
          <p className="join-promotion__text">
            Ten blok możesz wykorzystać jako formularz zgłoszeniowy, sekcję sponsorską
            albo call to action dla klubów, które chcą wejść do twojej organizacji.
          </p>
        </div>
        <div className="join-promotion__actions">
          <Button href="mailto:kontakt@ironlegacy.pl" label="Napisz do nas" />
          <Button href="#" label="Pobierz ofertę sponsorską" variant="secondary" />
        </div>
      </div>
    </section>
  );
}

export default JoinPromotion;
