import { Mail, Phone, MapPin, Clock, ExternalLink, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config';
import { useLanguage } from '../context/LanguageContext';

interface ContactProps {
  isSection?: boolean;
}

export default function Contact({ isSection = false }: ContactProps) {
  const { language, t } = useLanguage();

  const content = (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section / Page Header */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {t.contact.heading}
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          {t.contact.subheading}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* OFFICIAL CONTACT INFORMATION CARD (Col 1-7) */}
        <div 
          id="official-contact-card" 
          className="lg:col-span-7 bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden"
        >
          {/* Card Top Banner */}
          <div className="bg-emerald-800 text-white px-6 py-5 sm:px-8 sm:py-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold tracking-widest text-emerald-300 uppercase">
                  {BUSINESS_CONFIG.name}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight mt-1 text-white">
                  {t.contact.cardHeader}
                </h3>
              </div>
              <div className="h-12 w-12 rounded-xl bg-emerald-700/60 border border-emerald-500/30 flex items-center justify-center text-emerald-200">
                <MessageCircle className="h-6 w-6" />
              </div>
            </div>
          </div>

          {/* Card Body with structured contact points */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* 📞 Call */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-emerald-300 hover:bg-emerald-50/30 transition-all">
              <div className="flex-shrink-0 h-11 w-11 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Phone className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    📞 {t.contact.phoneLabel}:
                  </span>
                  <span className="text-[11px] font-medium text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-full">
                    Active Line
                  </span>
                </div>
                <a 
                  href={`tel:${BUSINESS_CONFIG.phone}`} 
                  id="contact-card-phone-link"
                  className="block mt-1 text-lg sm:text-xl font-bold text-gray-900 hover:text-emerald-600 transition-colors"
                >
                  {BUSINESS_CONFIG.phone}
                </a>
                <p className="text-xs text-gray-500 mt-0.5">{t.contact.phoneDesc}</p>
              </div>
            </div>

            {/* 💬 WhatsApp */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-green-300 hover:bg-green-50/30 transition-all">
              <div className="flex-shrink-0 h-11 w-11 rounded-lg bg-[#25D366]/15 text-[#128C7E] flex items-center justify-center">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    💬 WhatsApp:
                  </span>
                  <span className="text-[11px] font-medium text-emerald-800 bg-[#25D366]/20 px-2 py-0.5 rounded-full">
                    Instant Response
                  </span>
                </div>
                <a 
                  href={BUSINESS_CONFIG.whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  id="contact-card-whatsapp-link"
                  className="block mt-1 text-lg sm:text-xl font-bold text-gray-900 hover:text-emerald-600 transition-colors"
                >
                  {BUSINESS_CONFIG.whatsapp}
                </a>
                <p className="text-xs text-gray-500 mt-0.5">{BUSINESS_CONFIG.whatsappUrl}</p>
              </div>
            </div>

            {/* ✉️ Email */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-blue-300 hover:bg-blue-50/30 transition-all">
              <div className="flex-shrink-0 h-11 w-11 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                <Mail className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  ✉️ {t.contact.emailLabel}:
                </span>
                <a 
                  href={`mailto:${BUSINESS_CONFIG.email}`} 
                  id="contact-card-email-link"
                  className="block mt-1 text-base sm:text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors break-all"
                >
                  {BUSINESS_CONFIG.email}
                </a>
                <p className="text-xs text-gray-500 mt-0.5">{t.contact.emailDesc}</p>
              </div>
            </div>

            {/* 📍 Location */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-amber-300 hover:bg-amber-50/30 transition-all">
              <div className="flex-shrink-0 h-11 w-11 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  📍 {t.contact.locationLabel}:
                </span>
                <p className="mt-1 text-base font-semibold text-gray-900 leading-snug">
                  {language === 'ms' ? (
                    <>
                      Ampang, Kuala Lumpur,<br />
                      Wilayah Persekutuan Kuala Lumpur, Malaysia
                    </>
                  ) : (
                    <>
                      Ampang, Kuala Lumpur,<br />
                      Federal Territory of Kuala Lumpur, Malaysia
                    </>
                  )}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">{t.contact.locationDesc}</p>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-emerald-50/50 border border-emerald-100 text-xs text-emerald-900">
              <Clock className="h-4 w-4 text-emerald-700 shrink-0" />
              <div>
                <span className="font-semibold">{t.contact.hoursTitle}: </span>
                <span>{language === 'ms' ? BUSINESS_CONFIG.openingHours.ms : BUSINESS_CONFIG.openingHours.en}</span>
              </div>
            </div>

            {/* 4 ACTION BUTTONS REQUIRED BY USER */}
            <div className="pt-2 border-t border-gray-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* 1. [Call Us] Button */}
                <a
                  href={`tel:${BUSINESS_CONFIG.phone}`}
                  id="contact-btn-call"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold text-gray-800 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 border border-gray-300 transition-all shadow-xs cursor-pointer text-center"
                >
                  <Phone className="w-4 h-4 text-emerald-700" />
                  <span>{t.contact.callBtn}</span>
                </a>

                {/* 2. [WhatsApp Us] Button (Primary Action) */}
                <a
                  href={BUSINESS_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-btn-whatsapp"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold text-white bg-[#25D366] hover:bg-[#128C7E] active:bg-[#075E54] shadow-md transition-all cursor-pointer text-center"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span>{t.contact.whatsappBtn}</span>
                </a>

                {/* 3. [Email Us] Button */}
                <a
                  href={`mailto:${BUSINESS_CONFIG.email}`}
                  id="contact-btn-email"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold text-gray-800 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 border border-gray-300 transition-all shadow-xs cursor-pointer text-center"
                >
                  <Mail className="w-4 h-4 text-blue-700" />
                  <span>{t.contact.emailBtn}</span>
                </a>

                {/* 4. [View on Google Maps] Button */}
                <a
                  href={BUSINESS_CONFIG.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-btn-maps"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 active:bg-emerald-200 border border-emerald-300 transition-all shadow-xs cursor-pointer text-center"
                >
                  <MapPin className="w-4 h-4 text-emerald-700" />
                  <span>{t.contact.mapBtn}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-600 ml-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* MAP & LOCATION DISPLAY (Col 8-12) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div 
            id="map-container-card"
            className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden flex flex-col"
          >
            {/* Map Frame Header */}
            <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center justify-between bg-gray-50">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 leading-none">
                    {t.contact.locationTitle}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {BUSINESS_CONFIG.location[language]}
                  </p>
                </div>
              </div>
              <a
                href={BUSINESS_CONFIG.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 shrink-0"
              >
                <span>{t.contact.mapBtn}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Map Iframe */}
            <div className="h-72 sm:h-80 w-full relative bg-gray-100">
              <iframe 
                src={BUSINESS_CONFIG.mapEmbedUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title={`${BUSINESS_CONFIG.name} Ampang Location Map`}
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Quick Map Action Footer */}
            <div className="p-4 sm:p-5 bg-white border-t border-gray-100 flex flex-col sm:flex-row gap-3 items-center justify-between">
              <div className="text-xs text-gray-600">
                <span className="font-semibold text-gray-900 block">Ampang, Kuala Lumpur</span>
                <span>{BUSINESS_CONFIG.city}</span>
              </div>
              <a
                href={BUSINESS_CONFIG.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="map-external-link-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 transition-colors shadow-xs"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>{t.contact.mapBtn}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Quick Support Assurance */}
          <div className="p-5 rounded-2xl bg-emerald-900 text-white shadow-xs">
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-300">
              {language === 'ms' ? 'Respons Pantas Dijamin' : 'Fast Response Guaranteed'}
            </h4>
            <p className="mt-2 text-xs sm:text-sm text-emerald-100 leading-relaxed">
              {language === 'ms'
                ? 'Pasukan kami bersedia menjawab panggilan dan mesej WhatsApp anda untuk sebut harga barangan lusuh dan penetapan jadual kutipan di seluruh kawasan Ampang dan Lembah Klang.'
                : 'Our team is ready to answer your calls and WhatsApp messages for immediate scrap metal quotes and scheduled collection throughout Ampang and the Klang Valley.'}
            </p>
            <div className="mt-4 pt-3 border-t border-emerald-800 flex items-center justify-between text-xs text-emerald-300">
              <span>{t.contact.hoursTitle}: {language === 'ms' ? BUSINESS_CONFIG.openingHours.ms : BUSINESS_CONFIG.openingHours.en}</span>
              <a 
                href={BUSINESS_CONFIG.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:text-white font-medium"
              >
                WhatsApp +601111545835 &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (isSection) {
    return <section className="py-16 sm:py-20 bg-white" id="contact-section">{content}</section>;
  }

  return <div className="py-16 sm:py-20 bg-gray-50 min-h-screen" id="contact-page">{content}</div>;
}
