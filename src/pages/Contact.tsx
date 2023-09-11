import { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import MainLayout from "../components/layouts/MainLayout";

export interface IContactProps {
}

export default function Contact(props: IContactProps) {

  useEffect(() => {
    const tl = gsap.timeline({ repeat: 0 });
    tl.fromTo(".bg-peach", {  opacity: 0 }, {opacity: 1, duration: 1 })
    .fromTo(".image", {  scale: 0 }, {scale: 1, duration: 1 })
    return () => {
      tl.kill();
    };
  });

  return (
    <MainLayout title="despre">
      <div className="contact pb-8 flex items-center flex-wrap justify-between">
        <div className="w-full md:w-[45%]">
          <div className="bg-peach my-auto py-8 px-4 md:py-12 md:px-8 rounded-br-3xl">
            <h4 className="text md:text-left">Conectează-te cu noi!</h4>
            <div className="flex justify-center md:justify-start">
              <a className="mx-4 h-8 w-8" href="https://www.facebook.com/bulucorg/">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M38.7989 19.8215C38.7989 29.1682 32.1688 36.9533 23.3866 38.6783V26.1547H27.3676H27.8885L27.9669 25.6398L28.8398 19.9088L28.9461 19.2113H28.2405H23.3866V16.1006C23.3866 15.4041 23.5575 14.79 23.9281 14.3582C24.284 13.9436 24.9001 13.6084 25.9883 13.6084H28.4789H29.0852V13.0022V8.12763V7.61635L28.5812 7.53009L28.4789 8.12763C28.5812 7.53009 28.5812 7.53008 28.5811 7.53007L28.5809 7.53004L28.5805 7.52995L28.5788 7.52968L28.5732 7.52872L28.5523 7.52523L28.4736 7.51242C28.4054 7.50149 28.3063 7.48601 28.181 7.4675C27.9305 7.4305 27.5745 7.38131 27.1502 7.33214C26.3043 7.23412 25.1754 7.13483 24.0651 7.13483C21.6924 7.13483 19.6637 7.86024 18.2278 9.30615C16.7918 10.7522 16.0185 12.8487 16.0185 15.4544V19.2153H11.6198H11.0135V19.8215V25.5525V26.1587H11.6198H16.0185V38.6817C7.23591 36.9494 0.606232 29.1659 0.606232 19.8215C0.606232 9.20634 9.15996 0.606232 19.7026 0.606232C30.2451 0.606232 38.7989 9.20634 38.7989 19.8215Z" stroke="#F6772B" stroke-width="1.21246"></path>
                </svg>
              </a>
              <a className="mx-4 h-8 w-8" href="https://www.instagram.com/_bulucul/?hl=ro">
                <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M28.6006 0.723637L28.6006 0.723786L28.614 0.724073C30.1824 0.75757 31.7309 1.05259 33.1947 1.6022C35.6787 2.56102 37.6413 4.52241 38.6059 7.00324C39.1662 8.48197 39.4597 10.0526 39.487 11.6401L39.4872 11.6527L39.4879 11.6652C39.6092 13.7351 39.6094 14.3941 39.6094 19.7353C39.6094 25.0684 39.581 25.7248 39.4875 27.8138L39.4871 27.8213L39.487 27.8288C39.4556 29.3936 39.1604 30.9368 38.6099 32.4006C37.6454 34.8804 35.6833 36.8397 33.199 37.8029C31.7321 38.3507 30.1838 38.6475 28.6192 38.6788L28.6078 38.6791L28.5965 38.6797C26.5273 38.7987 25.8605 38.7989 20.5131 38.7989C15.1739 38.7989 14.5162 38.7705 12.4212 38.6793L12.4213 38.6792L12.4142 38.679C10.8431 38.6288 9.29392 38.3067 7.83403 37.737L7.83205 37.7362C5.34463 36.7757 3.38121 34.8139 2.4162 32.3349C1.86577 30.8689 1.57062 29.3256 1.5392 27.761L1.53896 27.7494L1.53828 27.7377C1.41697 25.6678 1.41678 25.0067 1.41678 19.6676C1.41678 14.3345 1.44519 13.6782 1.53871 11.5891L1.53905 11.5816L1.5392 11.5741C1.57062 10.0094 1.86584 8.46607 2.41626 7.00235C3.37879 4.52199 5.34122 2.56078 7.82745 1.60206C9.29107 1.0504 10.8391 0.755479 12.4027 0.724089L12.4137 0.723868L12.4247 0.723248C14.4942 0.606408 15.1614 0.606232 20.5087 0.606232C25.8484 0.606232 26.5059 0.632423 28.6006 0.723637ZM36.3946 31.51C36.7869 30.4506 37.019 29.3422 37.0902 28.22H37.1103L37.1363 27.641C37.231 25.5388 37.231 24.9514 37.231 19.649V19.6305C37.231 14.31 37.207 13.7104 37.1127 11.6264C37.0909 10.3153 36.8463 9.01663 36.3951 7.78939L36.3952 7.78936L36.3913 7.7792C35.6623 5.9012 34.1777 4.41604 32.2977 3.69241L32.2977 3.69237L32.291 3.68987C31.0593 3.23244 29.761 2.99034 28.4467 2.9727C26.3244 2.85231 25.7501 2.85231 20.4516 2.85231H20.4299C15.1011 2.85231 14.5005 2.87848 12.414 2.97267C11.1036 2.99215 9.80012 3.23407 8.5695 3.68966L8.56949 3.68963L8.56355 3.69189C6.67764 4.41263 5.18275 5.89514 4.45312 7.77968L4.45305 7.77966L4.44994 7.78806C3.98937 9.03197 3.74946 10.3416 3.7319 11.6639C3.61572 13.7871 3.61572 14.3574 3.61572 19.6489V19.6698C3.61572 24.9875 3.63754 25.5896 3.73191 27.6717C3.75367 28.9827 3.99831 30.2814 4.44945 31.5087L4.44936 31.5087L4.45321 31.5186C5.18272 33.4004 6.67743 34.8855 8.56417 35.6042L8.56856 35.6059C9.79848 36.0635 11.1012 36.3055 12.411 36.3232C14.5354 36.4436 15.1076 36.4436 20.4084 36.4436H20.4299C25.7558 36.4436 26.3593 36.4196 28.444 36.3232C29.7581 36.3037 31.0575 36.0641 32.291 35.606L32.291 35.606L32.2971 35.6037C34.1777 34.8822 35.6623 33.3968 36.3913 31.5188L36.3913 31.5189L36.3946 31.51ZM10.988 19.6523C10.988 14.4101 15.2431 10.1582 20.4978 10.1582C25.7482 10.1582 30.0076 14.4103 30.0076 19.6523C30.0076 24.8966 25.7481 29.1486 20.4978 29.1486C15.2432 29.1486 10.988 24.8968 10.988 19.6523ZM13.3182 19.6545C13.3182 23.6127 16.5338 26.8217 20.4978 26.8217C24.4623 26.8217 27.673 23.6122 27.673 19.6545C27.673 15.6945 24.4622 12.4873 20.4978 12.4873C16.5339 12.4873 13.3182 15.6939 13.3182 19.6545ZM32.7691 9.18054C32.7691 10.1456 31.9853 10.9295 31.0165 10.9295C30.0476 10.9295 29.2638 10.1456 29.2638 9.18054C29.2638 8.21549 30.0476 7.43156 31.0165 7.43156C31.9853 7.43156 32.7691 8.21549 32.7691 9.18054Z" stroke="#D9534A" stroke-width="1.21246"></path>
                </svg>
              </a>
              <a className="mx-4 h-8 w-8" href="mailto:contact@buluc.org">
                <svg width="54" height="40" viewBox="0 0 54 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0)">
                    <path d="M0.651154 9.60238L15.1366 21.6373L0.651154 33.7045V9.60238Z" stroke="#D9534A" stroke-width="1.21246"></path>
                    <path d="M4.30513 0.606232H49.7388C51.3908 0.606232 52.8241 1.75493 53.2851 3.32216L32.5608 20.5609L32.5596 20.5619L28.8383 23.6409C28.8382 23.641 28.8381 23.6411 28.838 23.6411C27.8448 24.4593 26.2353 24.4594 25.242 23.6414C25.2418 23.6412 25.2416 23.641 25.2414 23.6409L21.699 20.7052L21.6982 20.7045L0.783858 3.31319C1.18699 1.76177 2.61067 0.606232 4.30513 0.606232Z" stroke="#D9534A" stroke-width="1.21246"></path>
                    <path d="M38.9079 21.6373L53.3933 9.60238V33.7045L38.9079 21.6373Z" stroke="#D9534A" stroke-width="1.21246"></path>
                    <path d="M51.3673 38.4118C50.8782 38.6571 50.3224 38.7989 49.7393 38.7989H4.30565C3.72292 38.7989 3.16748 38.6572 2.67865 38.4123L18.9841 24.8617L20.7442 26.3293L20.7447 26.3297L24.4319 29.4101L24.4351 29.4127C25.8763 30.6002 28.1329 30.6002 29.574 29.4127L29.5741 29.4127L29.5779 29.4095L32.441 27.0103L32.4421 27.0094L35.0603 24.8263L51.3673 38.4118Z" stroke="#D9534A" stroke-width="1.21246"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="53.9547" height="39.4051" fill="white" transform="translate(0.0449219)"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
            <div style={{ paddingTop: '50px' }}>
              <div role="form" className="wpcf7" id="wpcf7-f136-o1" lang="en-US" dir="ltr">
                <div className="screen-reader-response">
                  <p role="status" aria-live="polite" aria-atomic="true"></p>
                  <ul></ul>
                </div>
                <form
                  action="/contact/#wpcf7-f136-o1"
                  method="post"
                  className="wpcf7-form init"
                  noValidate={true}
                  data-status="init"
                >
                  <div className="mx-auto" style={{ maxWidth: '600px' }}>
                    <p className="text">Nume:* </p>
                    <p>
                      <span className="wpcf7-form-control-wrap your-name">
                        <input
                          type="text"
                          name="your-name"
                          size={40}
                          className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                          aria-required="true"
                          aria-invalid="false"
                        />
                      </span>
                    </p>
                    <p className="text"> Email:* </p>
                    <p>
                      <span className="wpcf7-form-control-wrap your-email">
                        <input
                          type="email"
                          name="your-email"
                          size={40}
                          className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                          aria-required="true"
                          aria-invalid="false"
                        />
                      </span>
                    </p>
                    <p className="text"> Telefon:* </p>
                    <p>
                      <span className="wpcf7-form-control-wrap your-phone">
                        <input
                          type="tel"
                          name="your-phone"
                          size={40}
                          className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel"
                          aria-required="true"
                          aria-invalid="false"
                        />
                      </span>
                    </p>
                    <p className="text"> Mesaj:* </p>
                    <p>
                      <span className="wpcf7-form-control-wrap mesaj">
                        <textarea
                          name="mesaj"
                          cols={40}
                          rows={5}
                          className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
                          aria-required="true"
                          aria-invalid="false"
                        ></textarea>
                      </span>
                    </p>
                    <div className="flex items-center mb-4">
                      <div className="mr-4">
                        <span className="wpcf7-form-control-wrap gdpr-accept">
                          <span className="wpcf7-form-control wpcf7-acceptance">
                            <span className="wpcf7-list-item">
                              <input type="checkbox" name="gdpr-accept" value="1" aria-invalid="false" />
                            </span>
                          </span>
                        </span>
                      </div>
                      <p className="mb-0">
                        Sunt de acord cu <a href="politica-de-confidentialitate/">Politica de Confidențialitate</a>.
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <button type="submit" className="wpcf7-form-control wpcf7-submit btn-submit"> 
                        Trimite
                      </button>
                      <span className="ajax-loader"></span>
                    </div>
                  </div>
                  <div className="wpcf7-response-output" aria-hidden="true"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-5/12 image">
          <img className="mx-auto" src="https://buluc.org/wp-content/themes/Buluc/assets/graphics/contact.jpg" loading="lazy" alt="Contact" />
        </div>
      </div>
    </MainLayout>
  );
}
