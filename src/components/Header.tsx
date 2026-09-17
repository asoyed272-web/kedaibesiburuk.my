import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config';
import { classNames } from '../utils';
import { useLanguage } from '../context/LanguageContext';
import logoImg from '../assets/images/kedaibesiburuk_logo_1789615580189.jpg';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navigation = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.whatWeCollect, href: '/services' },
    { name: t.nav.howItWorks, href: '/how-it-works' },
    { name: t.nav.prices, href: '/prices' },
    { name: t.nav.about, href: '/about' },
    { name: t.nav.contact, href: '/contact' },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <nav className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 w-full items-center justify-between gap-2">
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <Link to="/" className="flex items-center gap-2.5" onClick={closeMenu}>
              <img 
                src={logoImg} 
                alt={BUSINESS_CONFIG.name} 
                className="h-9 w-9 sm:h-10 sm:w-10 rounded-full object-cover shadow-xs ring-1 ring-orange-200 shrink-0" 
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight leading-tight">{BUSINESS_CONFIG.name}</span>
                <span className="hidden sm:inline-block text-[10px] text-green-700 font-medium leading-none">{t.brand.tagline}</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-5 xl:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={classNames(
                  location.pathname === item.href
                    ? 'text-green-600 font-semibold'
                    : 'text-gray-600 hover:text-green-600',
                  'text-sm font-medium transition-colors'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Header Controls (Language Switcher & Request Pickup CTA) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop Language Switcher: 🇬🇧 English | 🇲🇾 Bahasa Melayu */}
            <div 
              id="desktop-language-switcher"
              className="hidden md:flex items-center bg-gray-100 p-1 rounded-full border border-gray-200 shadow-2xs"
            >
              <button
                type="button"
                id="lang-btn-en"
                onClick={() => setLanguage('en')}
                className={classNames(
                  language === 'en'
                    ? 'bg-white text-green-800 font-bold shadow-xs'
                    : 'text-gray-600 hover:text-gray-900',
                  'flex items-center gap-1.5 px-3 py-1 rounded-full text-xs transition-all cursor-pointer'
                )}
                aria-label="Switch to English"
                aria-pressed={language === 'en'}
              >
                <span className="text-sm leading-none" role="img" aria-label="UK Flag">🇬🇧</span>
                <span>English</span>
              </button>
              <span className="text-gray-300 mx-0.5 select-none font-light">|</span>
              <button
                type="button"
                id="lang-btn-ms"
                onClick={() => setLanguage('ms')}
                className={classNames(
                  language === 'ms'
                    ? 'bg-white text-green-800 font-bold shadow-xs'
                    : 'text-gray-600 hover:text-gray-900',
                  'flex items-center gap-1.5 px-3 py-1 rounded-full text-xs transition-all cursor-pointer'
                )}
                aria-label="Tukar ke Bahasa Melayu"
                aria-pressed={language === 'ms'}
              >
                <span className="text-sm leading-none" role="img" aria-label="Malaysia Flag">🇲🇾</span>
                <span>Bahasa Melayu</span>
              </button>
            </div>

            {/* Mobile Header Language Switcher: 🌐 English 🌐 Bahasa Melayu */}
            <div 
              id="mobile-header-language-switcher"
              className="flex md:hidden items-center bg-gray-100 p-0.5 rounded-lg border border-gray-200"
            >
              <button
                type="button"
                id="mobile-lang-btn-en"
                onClick={() => setLanguage('en')}
                className={classNames(
                  language === 'en'
                    ? 'bg-green-600 text-white font-semibold shadow-xs'
                    : 'text-gray-600 hover:text-gray-900',
                  'flex items-center gap-1 px-2 py-1 rounded-md transition-all text-[11px]'
                )}
                aria-pressed={language === 'en'}
              >
                <span className="text-xs">🌐</span>
                <span>English</span>
              </button>
              <button
                type="button"
                id="mobile-lang-btn-ms"
                onClick={() => setLanguage('ms')}
                className={classNames(
                  language === 'ms'
                    ? 'bg-green-600 text-white font-semibold shadow-xs'
                    : 'text-gray-600 hover:text-gray-900',
                  'flex items-center gap-1 px-2 py-1 rounded-md transition-all text-[11px]'
                )}
                aria-pressed={language === 'ms'}
              >
                <span className="text-xs">🌐</span>
                <span>Bahasa Melayu</span>
              </button>
            </div>

            {/* Direct Call / WhatsApp (Desktop) */}
            <a
              href={`tel:${BUSINESS_CONFIG.phone}`}
              id="header-phone-cta"
              className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-gray-700 hover:text-green-700 hover:bg-green-50 transition-colors border border-gray-200"
              title={`Call ${BUSINESS_CONFIG.phone}`}
            >
              <span className="text-emerald-600">📞</span>
              <span>{BUSINESS_CONFIG.phone}</span>
            </a>

            {/* Request Pickup Button (Desktop) */}
            <Link
              to="/pickup"
              id="header-pickup-cta"
              className="hidden sm:inline-flex items-center justify-center rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 transition-colors shrink-0"
            >
              {t.nav.requestPickup}
            </Link>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                id="mobile-menu-trigger"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">{t.nav.openMainMenu}</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu, show/hide based on menu state. */}
      {mobileMenuOpen && (
        <div className="lg:hidden" id="mobile-menu-drawer">
          <div className="fixed inset-0 z-50 bg-gray-900/80" onClick={closeMenu} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 shadow-xl flex flex-col h-full">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2.5" onClick={closeMenu}>
                <img 
                  src={logoImg} 
                  alt={BUSINESS_CONFIG.name} 
                  className="h-9 w-9 rounded-full object-cover shadow-xs ring-1 ring-orange-200 shrink-0" 
                  referrerPolicy="no-referrer"
                />
                <span className="text-xl font-bold text-gray-900 tracking-tight">{BUSINESS_CONFIG.name}</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={closeMenu}
              >
                <span className="sr-only">{t.nav.closeMenu}</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Language Switcher in Mobile Drawer */}
            <div className="mt-6 p-3 bg-gray-50 rounded-xl border border-gray-200">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                {language === 'en' ? 'Choose Language' : 'Pilih Bahasa'}
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  id="drawer-lang-en"
                  onClick={() => setLanguage('en')}
                  className={classNames(
                    language === 'en'
                      ? 'bg-green-600 text-white font-bold ring-2 ring-green-600/30 shadow-xs'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200',
                    'flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs transition-all'
                  )}
                >
                  <span className="text-sm">🌐</span>
                  <span>English</span>
                </button>
                <button
                  type="button"
                  id="drawer-lang-ms"
                  onClick={() => setLanguage('ms')}
                  className={classNames(
                    language === 'ms'
                      ? 'bg-green-600 text-white font-bold ring-2 ring-green-600/30 shadow-xs'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200',
                    'flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs transition-all'
                  )}
                >
                  <span className="text-sm">🌐</span>
                  <span>Bahasa Melayu</span>
                </button>
              </div>
            </div>

            <div className="mt-4 flow-root flex-grow">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-1.5 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={closeMenu}
                      className={classNames(
                        location.pathname === item.href
                          ? 'text-green-600 bg-green-50'
                          : 'text-gray-900 hover:bg-gray-50',
                        '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors'
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    to="/sell"
                    onClick={closeMenu}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition-colors"
                  >
                    {t.nav.sellScrap}
                  </Link>
                </div>
                <div className="py-4 space-y-3">
                  <Link
                    to="/pickup"
                    onClick={closeMenu}
                    className="-mx-3 block rounded-xl px-3 py-3 text-base font-bold text-white bg-green-600 hover:bg-green-500 text-center transition-colors shadow-sm"
                  >
                    {t.nav.requestPickup}
                  </Link>

                  {/* Direct Contact Actions in Mobile Drawer */}
                  <div className="pt-2 border-t border-gray-100">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      {t.contact.infoTitle}
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={`tel:${BUSINESS_CONFIG.phone}`}
                        className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-bold text-gray-800 bg-gray-100 hover:bg-gray-200 border border-gray-200 text-center"
                      >
                        <span>📞</span>
                        <span>{t.contact.callBtn}</span>
                      </a>
                      <a
                        href={BUSINESS_CONFIG.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-bold text-white bg-[#25D366] hover:bg-[#128C7E] text-center"
                      >
                        <span>💬</span>
                        <span>{t.contact.whatsappBtn}</span>
                      </a>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <a
                        href={`mailto:${BUSINESS_CONFIG.email}`}
                        className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-center"
                      >
                        <span>✉️</span>
                        <span>{t.contact.emailBtn}</span>
                      </a>
                      <a
                        href={BUSINESS_CONFIG.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-medium text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-center"
                      >
                        <span>📍</span>
                        <span>{t.contact.mapBtn}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

