import { useState } from 'react';
import './Contact.scss';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import { FaInstagram, FaYoutube } from 'react-icons/fa';

const validators = {
  name: /^[A-Za-zĄĆĘŁŃÓŚŹŻąćęłńóśźż\s'-]{2,60}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
  phone: /^\+48\s\d{3}\s\d{3}\s\d{3}$/,
  message: /^.{10,1000}$/s,
};

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '+48 ',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const [isSending, setIsSending] = useState(false);

  const validateField = (name, value) => {
    const trimmedValue = value.trim();

    if (!trimmedValue || trimmedValue === '+48') {
      return 'To pole jest wymagane';
    }

    if (!validators[name].test(trimmedValue)) {
      if (name === 'name') return 'Podaj poprawne imię i nazwisko';
      if (name === 'email') return 'Podaj poprawny adres e-mail';
      if (name === 'phone') return 'Podaj numer w formacie +48 123 456 789';
      if (name === 'message') return 'Wiadomość musi mieć od 10 do 1000 znaków';
    }

    return '';
  };

  const validateForm = () => {
    const newErrors = {};

    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);

      if (error) {
        newErrors[field] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatPhoneNumber = (value) => {
    const digits = value
      .replace(/\D/g, '')
      .replace(/^48/, '')
      .slice(0, 9);

    let formatted = '+48';

    if (digits.length > 0) {
      formatted += ` ${digits.slice(0, 3)}`;
    } else {
      formatted += ' ';
    }

    if (digits.length > 3) {
      formatted += ` ${digits.slice(3, 6)}`;
    }

    if (digits.length > 6) {
      formatted += ` ${digits.slice(6, 9)}`;
    }

    return formatted;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'phone') {
      setFormData((prev) => ({
        ...prev,
        phone: formatPhoneNumber(value),
      }));

      setErrors((prev) => ({
        ...prev,
        phone: '',
      }));

      setStatus('');
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));

    setStatus('');
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    const error = validateField(name, value);

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      setStatus('Sprawdź poprawność formularza.');
      return;
    }

    setIsSending(true);
    setStatus('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          message: formData.message.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Nie udało się wysłać wiadomości');
      }

      setStatus('Wiadomość została wysłana. Odezwijemy się jak najszybciej.');

      setFormData({
        name: '',
        email: '',
        phone: '+48 ',
        message: '',
      });

      setErrors({});
    } catch (error) {
      setStatus(error.message || 'Wystąpił błąd podczas wysyłania wiadomości.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container contact__inner">
        <div className="contact__content">
          <h2 className="contact__title">
            Chcesz wypromować zawodnika albo zbudować mocniejszy wizerunek przed walką?
          </h2>

          <p className="contact__text">
            Napisz do nas, jeśli szukasz wsparcia w promocji zawodnika, gali,
            materiałów wideo, social mediach albo współpracach sponsorskich.
          </p>

          <div className="contact__details">
            <a href="mailto:fortisunionco@gmail.com" className="contact__link">
              <span className="contact__icon">
                <HiOutlineMail className="contact__icon-svg" />
              </span>
              <span className="contact__link-text">fortisunionco@gmail.com</span>
            </a>

            <a href="tel:+48577778962" className="contact__link">
              <span className="contact__icon">
                <HiOutlinePhone className="contact__icon-svg" />
              </span>
              <span className="contact__link-text">+48 577 778 962</span>
            </a>

            <a
              href="https://www.instagram.com/fortis.union?igsh=enk5Z3dpdmVhdGFt"
              className="contact__link"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact__icon">
                <FaInstagram className="contact__icon-svg" />
              </span>
              <span className="contact__link-text">fortisunion</span>
            </a>

            <a
              href="https://www.youtube.com/@FortisUnion-G"
              className="contact__link"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact__icon">
                <FaYoutube className="contact__icon-svg" />
              </span>
              <span className="contact__link-text">Fortis Union</span>
            </a>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <div className="contact__field">
            <input
              className={`contact__input${errors.name ? ' contact__input--error' : ''}`}
              type="text"
              name="name"
              placeholder="Imię i nazwisko"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && <span className="contact__error">{errors.name}</span>}
          </div>

          <div className="contact__field">
            <input
              className={`contact__input${errors.email ? ' contact__input--error' : ''}`}
              type="email"
              name="email"
              placeholder="Adres e-mail"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && <span className="contact__error">{errors.email}</span>}
          </div>

          <div className="contact__field">
            <input
              className={`contact__input${errors.phone ? ' contact__input--error' : ''}`}
              type="tel"
              name="phone"
              placeholder="+48 123 456 789"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              maxLength={15}
            />
            {errors.phone && <span className="contact__error">{errors.phone}</span>}
          </div>

          <div className="contact__field contact__field--message">
            <textarea
              className={`contact__textarea${errors.message ? ' contact__textarea--error' : ''}`}
              name="message"
              placeholder="Napisz, czego potrzebujesz"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.message && <span className="contact__error">{errors.message}</span>}
          </div>

          <button className="contact__button button--secondary" type="submit" disabled={isSending}>
            {isSending ? 'Wysyłanie...' : 'Wyślij wiadomość'}
          </button>

          {status && <p className="contact__status">{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
