import React, { useState } from 'react';
import { emailHandlerCPannel } from '../utils/emailHandlerCPannel'

interface BookingFormProps {
  className?: string;
}

const BookingForm: React.FC<BookingFormProps> = ({ className }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
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
      message: '',
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Te rugăm să ne spui cum te numești';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Avem nevoie de email pentru a răspunde';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Acest email nu pare corect... verifică-l te rog';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Avem nevoie de mesajul tau pentru a putea sa te ajutam';
    }

    setErrors(newErrors);
    return !newErrors.name && !newErrors.email && !newErrors.message;
  };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      
      // Validate form before submission
      if (!validateForm()) {
        return;
      }

      try {
        const emailHTML = `<p> Buna Buluc, Tocmai ai primit un mesaj de la ${formData.name}, cu email-ul ${formData.email}, a solicitat oferta pentru The CHY @Experience #3 cu mesajul:.</p> <p>${formData.message}</p>`

        await emailHandlerCPannel({
          to: 'rezervari.buluc@gmail.com',
          subject: "The CHY @Experience #3",
          message: emailHTML,
        });
  
        setFormData({
          name: '',
          email: '',
          message: '',
        });
        setErrors({
          name: '',
          email: '',
          message: '',
        });
      } catch (error) {
        console.error(error);
      }
    }

  return (
    <div>
      <div className="max-w-4xl mx-auto">
        {/* Title and Subtitle */}
        <div className="text-center mb-12">
          <p className="mb-4 text-4xl mb:text-[2rem]">
            Solicita oferta detaliată <i className="font-normal">sau</i> contactează-ne
          </p>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name Section */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block font-medium mb-2">
                  Nume <span>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nume"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-4 border focus:outline-none shadow-sm border-radious-0 h-10 ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>

              <label htmlFor="email" className="block font-medium mb-2">
                Email <span>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-4 border focus:outline-none shadow-sm border-radious-0 h-10 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red">
                  {errors.email}
                </p>
              )}
            </div>
            </div>
          </div>

          {/* Message Section */}
          <div>
            <label htmlFor="message" className="block font-medium mb-2">
              Mesaj <span>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className={`w-full px-4 py-4 border focus:outline-none resize-none shadow-sm border-radious-0 ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Scrie-ne"
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red">
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="my-4 text-[1.5rem] border-b-2 flex items-center gap-2 text-orange font-semibold hover:bg-gray-700 transition-colors duration-200"
            >
              Trimite
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
