import React, { useState } from 'react';
import { newsletterHandler } from '../utils/newsletterHandler';

const NewsletterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '', // honeypot anti-spam, invizibil pentru utilizatori
  });
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    consent: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      consent: '',
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Te rugăm să ne spui cum te numești';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Avem nevoie de email pentru a te abona';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Acest email nu pare corect... verifică-l te rog';
    }

    if (!consent) {
      newErrors.consent = 'Avem nevoie de acordul tău pentru a te abona';
    }

    setErrors(newErrors);
    return !newErrors.name && !newErrors.email && !newErrors.consent;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      await newsletterHandler({
        name: formData.name,
        email: formData.email,
        company: formData.company,
      });

      setFormData({ name: '', email: '', company: '' });
      setConsent(false);
      setErrors({ name: '', email: '', consent: '' });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <input
            type="text"
            id="newsletter-name"
            name="name"
            placeholder="Nume"
            value={formData.name}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border focus:outline-none h-10 text-black ${
              errors.name ? 'border-yellow-300' : 'border-transparent'
            }`}
          />
        </div>
        <div className="flex-1">
          <input
            type="email"
            id="newsletter-email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border focus:outline-none h-10 text-black ${
              errors.email ? 'border-yellow-300' : 'border-transparent'
            }`}
          />
        </div>
        {/* honeypot - ascuns */}
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleInputChange}
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />
        <button
          type="submit"
          disabled={loading}
          className="h-10 px-6 border-2 border-white font-semibold hover:bg-white hover:text-red transition-colors duration-200 disabled:opacity-50"
        >
          {loading ? 'Se trimite...' : 'Abonează-te'}
        </button>
      </div>

      <div className="mt-3 flex items-start gap-2">
        <input
          type="checkbox"
          id="newsletter-consent"
          checked={consent}
          onChange={(e) => {
            setConsent(e.target.checked);
            if (e.target.checked) setErrors({ ...errors, consent: '' });
          }}
          className="mt-1"
        />
        <label htmlFor="newsletter-consent" className="text-xs leading-tight">
          Sunt de acord să primesc newsletter-ul Buluc și cu prelucrarea datelor
          mele în acest scop. Mă pot dezabona oricând.{' '}
          <a href="/politica-de-confidentialitate" className="underline">
            Politica de confidențialitate
          </a>
        </label>
      </div>

      {(errors.name || errors.email || errors.consent) && (
        <p className="mt-2 text-yellow-300 text-sm">
          {errors.name || errors.email || errors.consent}
        </p>
      )}
    </form>
  );
};

export default NewsletterForm;
