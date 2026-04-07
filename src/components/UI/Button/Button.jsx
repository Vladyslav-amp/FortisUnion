import { Link } from 'react-router-dom';
import './Button.scss';

function Button({ label, href = '#', variant = 'primary' }) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
  const isInternalRoute = href.startsWith('/');

  if (isInternalRoute) {
    return (
      <Link className={`button button--${variant}`} to={href}>
        <span className="button__label">{label}</span>
      </Link>
    );
  }

  return (
    <a
      className={`button button--${variant}`}
      href={href}
      {...(isExternal ? { target: '_self', rel: 'noreferrer' } : {})}
    >
      <span className="button__label">{label}</span>
    </a>
  );
}

export default Button;
