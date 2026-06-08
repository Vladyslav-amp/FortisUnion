import { useState } from 'react';
import './Contact.scss';

const validators = {
  name: /^[A-Za-zĄĆĘŁŃÓŚŹŻąćęłńóśźż\s'-]{2,60}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
  phone: /^(\+48\s?)?(\d{3}\s?\d{3}\s?\d{3})$/,
  message: /^.{10,1000}$/s,
};

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const [isSending, setIsSending] = useState(false);

  const validateField = (name, value) => {
    const trimmedValue = value.trim();

    if (!trimmedValue) {
      return 'To pole jest wymagane';
    }

    if (!validators[name].test(trimmedValue)) {
      if (name === 'name') return 'Podaj poprawne imię i nazwisko';
      if (name === 'email') return 'Podaj poprawny adres e-mail';
      if (name === 'phone') return 'Podaj poprawny numer telefonu, np. +48 123 456 789';
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

  const handleChange = (event) => {
    const { name, value } = event.target;

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
      const response = await fetch('http://localhost:5000/api/contact', {
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
        phone: '',
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
          <span className="contact__eyebrow">Kontakt</span>

          <h2 className="contact__title">
            Chcesz wypromować zawodnika albo zbudować mocniejszy wizerunek przed walką?
          </h2>

          <p className="contact__text">
            Napisz do nas, jeśli szukasz wsparcia w promocji zawodnika, gali,
            materiałów wideo, social mediach albo współpracach sponsorskich.
          </p>

          <div className="contact__details">
            <a href="mailto:kontakt@fortisunion.pl" className="contact__link">
              kontakt@fortisunion.pl
            </a>

            <a href="tel:+48123456789" className="contact__link">
              +48 123 456 789
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
              placeholder="Telefon, np. +48 123 456 789"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.phone && <span className="contact__error">{errors.phone}</span>}
          </div>

          <div className="contact__field">
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

          <button className="contact__button" type="submit" disabled={isSending}>
            {isSending ? 'Wysyłanie...' : 'Wyślij wiadomość'}
          </button>

          {status && <p className="contact__status">{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;