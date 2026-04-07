import { statsStrip } from '../../data/siteData';
import './StatsStrip.scss';

function StatsStrip() {
  return (
    <section className="stats-strip">
      <div className="container stats-strip__inner">
        {statsStrip.map((item) => (
          <div className="stats-strip__item" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsStrip;
