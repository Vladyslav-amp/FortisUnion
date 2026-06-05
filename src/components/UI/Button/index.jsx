import './Button.scss';

function Button({ label, href = '#', variant = 'primary' }) {
  return (
    <a className={`button button--${variant}`} href={href}>
      <span className="button__label">{label}</span>
    </a>
  );
}

export default Button;
