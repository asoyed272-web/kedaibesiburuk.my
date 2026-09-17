import { Link } from 'react-router-dom';
import { Truck, DollarSign, Recycle, ShieldCheck } from 'lucide-react';
import { getWhatsAppLink } from '../utils';
import Services from './Services';
import HowItWorks from './HowItWorks';
import Prices from './Prices';
import FAQ from './FAQ';
import Contact from './Contact';
import heroImg from '../assets/images/hero_scrap_collection_1789398344728.jpg';
import { useLanguage } from '../context/LanguageContext';
import { useQuickContact } from '../context/QuickContactContext';

export default function Home() {
  const { t } = useLanguage();
  const { openQuickContact } = useQuickContact();

  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className="relative bg-white overflow-hidden" id="hero-section">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-16 px-4 sm:px-6 lg:px-8">
            <main className="mx-auto max-w-7xl">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">{t.hero.titlePart1}</span>{' '}
                  <span className="block text-green-600 xl:inline">{t.hero.titleHighlight}</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  {t.hero.description}
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-3">
                  <div className="rounded-md shadow">
                    <Link
                      to="/pickup"
                      id="hero-request-pickup-btn"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10 transition-colors"
                    >
                      {t.hero.requestPickupBtn}
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0">
                    <Link
                      to="/sell"
                      id="hero-sell-scrap-btn"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10 transition-colors"
                    >
                      {t.hero.sellScrapBtn}
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0">
                    <button
                      type="button"
                      onClick={openQuickContact}
                      id="hero-whatsapp-btn"
                      className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-colors cursor-pointer"
                    >
                      {t.hero.whatsappBtn}
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src={heroImg}
            alt={t.hero.heroAlt}
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-green-800 text-white py-12" id="trust-bar-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <Truck className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-lg font-bold mb-2">{t.trustBar.easyPickupTitle}</h3>
              <p className="text-green-100 text-sm">{t.trustBar.easyPickupDesc}</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <DollarSign className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-lg font-bold mb-2">{t.trustBar.fairPricingTitle}</h3>
              <p className="text-green-100 text-sm">{t.trustBar.fairPricingDesc}</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Recycle className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-lg font-bold mb-2">{t.trustBar.recyclingTitle}</h3>
              <p className="text-green-100 text-sm">{t.trustBar.recyclingDesc}</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <ShieldCheck className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-lg font-bold mb-2">{t.trustBar.trustedTitle}</h3>
              <p className="text-green-100 text-sm">{t.trustBar.trustedDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTIONS FROM OTHER PAGES */}
      <Services isSection={true} />
      <HowItWorks isSection={true} />
      <Prices isSection={true} />
      
      {/* ENVIRONMENTAL / RECYCLING SECTION */}
      <section className="py-20 bg-green-50" id="environmental-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                {t.environmental.heading}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t.environmental.description}
              </p>
              <ul className="space-y-4">
                {t.environmental.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                      <Recycle className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="ml-3 text-base text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 lg:mt-0 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://picsum.photos/seed/recycle/800/600" 
                alt={t.environmental.imageAlt} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="py-20 bg-white" id="reviews-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t.reviews.heading}</h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">{t.reviews.subheading}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.reviews.items.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100 relative">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.review}"</p>
                <div className="mt-auto">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.type}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <span className="text-xs text-gray-400 italic">{t.reviews.sampleNotice}</span>
          </div>
        </div>
      </section>

      <FAQ isSection={true} />
      
      {/* REQUEST PICKUP CTA */}
      <section className="bg-green-600 py-16" id="cta-banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            {t.ctaSection.title}
          </h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            {t.ctaSection.description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/pickup"
              id="cta-request-pickup"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-green-50 md:py-4 md:text-lg md:px-10 transition-colors shadow-md"
            >
              {t.ctaSection.pickupBtn}
            </Link>
            <button
              type="button"
              onClick={openQuickContact}
              id="cta-whatsapp"
              className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-green-700 md:py-4 md:text-lg md:px-10 transition-colors cursor-pointer"
            >
              {t.ctaSection.whatsappBtn}
            </button>
          </div>
        </div>
      </section>
      
      <Contact isSection={true} />
    </div>
  );
}
