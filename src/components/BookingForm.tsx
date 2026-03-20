import React, { useState } from 'react';
import { emailHandlerNetlify } from '../components/utils/emailHandlerNetlify'

interface BookingFormProps {
  className?: string;
}

const BookingForm: React.FC<BookingFormProps> = ({ className }) => {
  const [formData, setFormData] = useState({
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
  };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        const emailHTML = `<p> Buna Buluc, Tocmai ai primit un mesaj de la ${formData.name}, cu email-ul ${formData.email}, a solicitat oferta pentru Experince V3 cu mesajul:.</p> <p>${formData.message}</p>`
  
        await emailHandlerNetlify({
          user_email: formData.email,
          subject: "Inscriere Experince V3",
          message: emailHTML,
        });
  
        setFormData({
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
                  Nume
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nume"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 border border-gray-300 focus:outline-none focus:border-gray-500 shadow-sm border-radious-0 h-10"
                />
              </div>
              <div>

              <label htmlFor="email" className="block font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-4 border border-gray-300 focus:outline-none focus:border-gray-500 shadow-sm border-radious-0 h-10"
                required
              />
            </div>
            </div>
          </div>

          {/* Message Section */}
          <div>
            <label htmlFor="message" className="block font-medium mb-2">
              Mesaj
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-4 border border-gray-300 focus:outline-none focus:border-gray-500 resize-none shadow-sm border-radious-0"
              placeholder="Scrie-ne"
            />
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
