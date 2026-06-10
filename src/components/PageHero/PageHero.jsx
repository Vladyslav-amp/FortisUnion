import './PageHero.scss';

function PageHero({ eyebrow, title, description }) {
  return (
    <section className="page-hero">
      <div className="container page-hero__inner">
        <div className="page-hero__eyebrow">{eyebrow}</div>
        <h1 className="page-hero__title">{title}</h1>
        <p className="page-hero__description">{description}</p>
      </div>
    </section>
  );
}

export default PageHero;
