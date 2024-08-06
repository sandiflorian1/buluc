import { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import MainLayout from "../components/layouts/MainLayout";
import SendEmail from './SendEmail.js';

export interface IContactProps {
}

export default function Contact(props: IContactProps) {
  const onclick =() => {
    debugger
    SendEmail();

  }

  return (
    <MainLayout>
      <div className="pt-20 mb:pt-10 pl-40 mb:pl-0">
        <div className="w-full p-10 mb:p-5 bg-white br">
          <h4 className="text-end mb-4 mb:text-start">Conectează-te cu noi!</h4>
          <div className="flex justify-end mb:justify-start">
            <a aria-label="Chat on WhatsApp" href="https://wa.me/+40743760430" target="_blank" className='mr-4'><FaWhatsapp size='30px' /></a>
            <a href="https://www.facebook.com/bulucorg/" target="_blank" className='mr-4'><FaFacebook size='30px' /></a>
            <a href="https://www.instagram.com/_bulucul/" target="_blank"><FaInstagram size='30px' /></a>
          </div>
          <div className="mt-6">
            <div role="form" className="">
              <form
                method="post"
                className="init"
              >
                <div className="mx-auto">
                  <p className='mb-2'>NUME </p>
                  <input
                    type="text"
                    name="your-name"
                    className="w-full h-10 rounded-[6px] mb-4"
                    aria-required="true"
                    aria-invalid="false"
                  />

                  <p className='mb-2'> EMAIL </p>
                  <input
                    type="email"
                    name="your-email"
                    className="w-full h-10 rounded-[6px] mb-4"
                    aria-required="true"
                    aria-invalid="false"
                  />
                  <p className='mb-2'> TELEFON </p>

                  <input
                    type="tel"
                    name="your-phone"
                    className="w-full h-10 rounded-[6px] mb-4"
                    aria-required="true"
                    aria-invalid="false"
                  />
                  <p className='mb-2'> MESAJ </p>
                  <textarea
                    name="mesaj"
                    cols={40}
                    rows={5}
                    className="w-full rounded-[6px] mb-4"
                    aria-required="true"
                    aria-invalid="false"
                  ></textarea>
                  <div className="flex mb-4">
                    <input type="checkbox" name="gdpr-accept" value="1" aria-invalid="false" className='w-[12px]' />
                    <p className="mb-0 ml-2">
                      Sunt de acord cu <a href="/politica-de-confidentialitate" className='underline'>Politica de Confidențialitate</a>.
                    </p>
                  </div>
                  <div className="">
                    <button type="submit" className="bg-red px-4 py-2 br text-white" onClick={() => onclick()}>
                      Trimite
                    </button>
                  </div>
                </div>
              </form>

             
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
