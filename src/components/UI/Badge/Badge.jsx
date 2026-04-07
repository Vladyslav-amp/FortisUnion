import './Badge.scss';

function Badge({ value, label }) {
  return (
    <div className="badge">
      <div className="badge__value">{value}</div>
      <div className="badge__label">{label}</div>
    </div>
  );
}

export default Badge;
