import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

const validators = {
  name: /^[A-Za-zĄĆĘŁŃÓŚŹŻąćęłńóśźż\s'-]{2,60}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
  phone: /^(\+48\s?)?(\d{3}\s?\d{3}\s?\d{3})$/,
  message: /^.{10,1000}$/s,
};

app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
}));

app.use(express.json({ limit: '10kb' }));

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const cleanedData = {
      name: String(name || '').trim(),
      email: String(email || '').trim(),
      phone: String(phone || '').trim(),
      message: String(message || '').trim(),
    };

    const errors = {};

    Object.entries(cleanedData).forEach(([key, value]) => {
      if (!value) {
        errors[key] = 'To pole jest wymagane';
        return;
      }

      if (!validators[key].test(value)) {
        errors[key] = 'Niepoprawna wartość';
      }
    });

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({
        message: 'Formularz zawiera błędy',
        errors,
      });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Fortis Union Formularz" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_RECEIVER,
      replyTo: cleanedData.email,
      subject: `Nowa wiadomość z formularza — ${cleanedData.name}`,
      html: `
        <h2>Nowa wiadomość z formularza kontaktowego</h2>

        <p><strong>Imię i nazwisko:</strong> ${cleanedData.name}</p>
        <p><strong>Email:</strong> ${cleanedData.email}</p>
        <p><strong>Telefon:</strong> ${cleanedData.phone}</p>

        <hr />

        <p><strong>Wiadomość:</strong></p>
        <p>${cleanedData.message.replace(/\n/g, '<br />')}</p>
      `,
    });

    return res.status(200).json({
      message: 'Wiadomość została wysłana',
    });
  } catch (error) {
    console.error('Błąd wysyłania maila:', error);

    return res.status(500).json({
      message: 'Nie udało się wysłać wiadomości',
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server działa na porcie ${PORT}`);
});