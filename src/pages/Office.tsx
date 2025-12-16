import MainLayout from "../components/layouts/MainLayout";
import { Trans, useTranslation } from 'react-i18next';
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import BannerTextAbsolute from "../components/layouts/BannerTextAbsolute";
import IMAGES from "../assets/Images";
import { FadeInViewPortAnimation, SlideXViewPortAnimation } from "../components/animations/Animations";
import "../css/office.css";

export interface IOfficeProps { }


const Office: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <MainLayout title={t('office.title')}>
      <div className="pt-10 mb:pt-5">
        <div className="flex justify-end p-4">
          <div className="border-2 border-orange rounded-lg">
            <button onClick={() => changeLanguage('ro')} className={`px-2 py-1 rounded-l-md ${i18n.language === 'ro' ? 'bg-orange text-white' : 'bg-white text-orange'}`}>RO</button>
            <button onClick={() => changeLanguage('en')} className={`px-2 py-1 rounded-r-md ${i18n.language === 'en' ? 'bg-orange text-white' : 'bg-white text-orange'}`}>EN</button>
          </div>
        </div>
        <BannerTextAbsolute
          imageURL={IMAGES.Office6}
          direction="left"
          className="h-[30vw] mb-20 mb:mb-10 mb:h-auto office z-10"
        >
          <p className="pb-2"><Trans i18nKey="office.intro" /></p>
        </BannerTextAbsolute>

        <FadeInViewPortAnimation className="grid grid-cols-6 gap-8 mb:gap-0 mb-20 mb:mb-10">
          <div className="suit-wrapper col-start-1 col-end-4 mb:col-end-7">
            <img src={IMAGES.suit} className="suit"></img>
          </div>

          <div className="col-end-7 col-span-3 mb:col-span-7">
            <SlideXViewPortAnimation className="bg-white p-6 br mb-4">
            <p>{t('office.workshopDescription')}</p>
            </SlideXViewPortAnimation>
           

            <SlideXViewPortAnimation className="bg-white p-6 br mb-4">
              <h4 className="title pb-4 text-red">{t('office.objectivesTitle')}</h4>
              <ul className="list-disc pl-8">
                {(t('office.objectives', { returnObjects: true }) as string[]).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </SlideXViewPortAnimation>

            <SlideXViewPortAnimation className="bg-white p-6 br">
              <h4 className="title pb-4 text-red">{t('office.benefitsTitle')}</h4>

              <ul className="list-disc pl-8">
                {(t('office.benefits', { returnObjects: true }) as string[]).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </SlideXViewPortAnimation>
          </div>
        </FadeInViewPortAnimation>

        <FadeInViewPortAnimation className="mb-20 mb:mb-10 bg-white p-6 br">
          <h3 className="text-red">
            {t('office.trainersTitle')}
          </h3>

          <p className=""> {t('office.trainersDescription')} </p>
        </FadeInViewPortAnimation>

        <FadeInViewPortAnimation>
          <div className="grid grid-cols-6 mb:grid-cols-1 gap-8 mb:gap-0 pb-20">
            <div className="col-start-1 col-end-5 mb:col-end-7 bg-white p-6 br">
              <h4 className="text-red">
                {t('office.locationTitle')}
              </h4>

              <p> {t('office.locationDescription')} </p>
            </div>

            <div className="col-start-1 col-end-3 mb:col-end-7">
              <img src={IMAGES.grafica1}></img>
              <div className="bg-white p-6 br">
                <h6 className="text-red">{t('office.location1Title')}</h6>
                <p>
                  {t('office.location1Description')}
                </p>
              </div>
            </div>

            <div className="col-start-3 col-span-2 mb:col-span-7">
              <img src={IMAGES.grafica2}></img>
              <div className="bg-white p-6 br">
                <h6 className="text-red">{t('office.location2Title')}</h6>
                <p>
                  {t('office.location2Description')}
                </p>
              </div>

            </div>

            <div className="col-end-7 col-span-2 mb:col-span-7">
              <img src={IMAGES.grafica3}></img>
              <div className="bg-white p-6 br">
                <h6 className="text-red">{t('office.location3Title')}</h6>
                <p>{t('office.location3Description')}</p>
              </div>
            </div>
          </div>
        </FadeInViewPortAnimation>

        <div className="w-full flex justify-center pb-20 mb:grid mb:gap-4">
          <div className="whatsapp-btn mr-10 mb:mr-0">
            <a aria-label="Chat on WhatsApp" target="_blank" href="https://wa.me/+40740993479" className="flex">
              <FaWhatsapp size='30px' className="pr-2" />
              <p className="pt-1">{t('office.contactWhatsapp')}</p>
            </a>
          </div>

          <div className="bg-red email-btn">
            <a href="mailto:rezervari.buluc@gmail.com" className="flex">
              <FaEnvelope size='30px' className="pr-2" />
              <p className="pt-1">{t('office.contactEmail')}</p>
            </a>
          </div>

        </div>

      </div>
    </MainLayout>
  );
};

export default Office;