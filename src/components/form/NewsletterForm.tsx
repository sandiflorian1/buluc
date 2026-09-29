import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { newsletterHandler } from '../utils/newsletterHandler';

const NewsletterForm: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState(''); // honeypot anti-spam, invizibil pentru utilizatori
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const validateForm = () => {
    if (!email.trim()) {
      setError('Avem nevoie de email pentru a te abona');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Acest email nu pare corect... verifică-l te rog');
      return false;
    }
    if (!consent) {
      setError('Avem nevoie de acordul tău pentru a te abona');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      await newsletterHandler({ email, company }, { successToast: false });
      setEmail('');
      setConsent(false);
      setError('');
      history.push('/newsletter-succes');
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mb:mx-auto">
      <div className="flex w-full gap-6 mb:flex-col mb:items-stretch mb:gap-4">
      <h6 className="text-poppins tracking-wider shrink-0 whitespace-nowrap pt-2">ABONEAZĂ-TE LA NEWSLETTER</h6>
      <div
        className={`flex flex-1 items-center gap-3 border-b transition-colors ${
          error ? 'border-yellow-300' : 'border-white/60 focus-within:border-white'
        }`}
      >
        
        <input
          type="email"
          id="newsletter-email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError('');
          }}
          className="flex-1 min-w-0 bg-transparent py-3 text-white placeholder-white focus:outline-none border-0"
        />
        <button
          type="submit"
          disabled={loading}
          aria-label="Abonează-te la newsletter"
          className="px-2 py-3 text-lg text-white/80 hover:text-white hover:translate-x-1 transition-all disabled:opacity-50"
        >
          <FaArrowRight />
        </button>
      </div>
      </div>

      <div className="mt-4 flex items-start gap-2 mb:justify-start">
        <input
          type="checkbox"
          id="newsletter-consent"
          checked={consent}
          onChange={(e) => {
            setConsent(e.target.checked);
            if (e.target.checked) setError('');
          }}
          className="mt-1"
        />
        <div className='flex flex-col items-start'>
          <label htmlFor="newsletter-consent" className="text-sm mb:text-[0.85rem] text-white text-justify">
            Sunt de acord să primesc newsletter-ul Buluc. Mă pot dezabona oricând.{' '}
          </label>
          <a href="/politica-de-confidentialitate" className="underline text-sm mb:text-[0.85rem] text-white text-justify">
            Politica de confidențialitate
          </a>
        </div>
      </div>

      {error && <p className="mt-2 text-yellow-300 text-sm">{error}</p>}
    </form>
  );
};

export default NewsletterForm;
