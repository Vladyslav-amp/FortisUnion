import './Newsletter.scss';

function Newsletter() {
  return (
    <section className="newsletter">
      <div className="container newsletter__inner">
        <div className="newsletter__content">
          <span className="newsletter__eyebrow">Aktualności</span>
          <h2 className="newsletter__title">Zbieraj leady przed galą, turniejem albo dropem wideo</h2>
        </div>
        <form className="newsletter__form">
          <input className="newsletter__input" type="email" placeholder="Twój e-mail" />
          <button className="newsletter__button" type="submit">Zapisz mnie</button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
