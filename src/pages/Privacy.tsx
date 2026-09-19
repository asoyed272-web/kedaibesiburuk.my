import { useLanguage } from '../context/LanguageContext';

export default function PrivacyPolicy() {
  const { t, language } = useLanguage();
  const dateStr = language === 'ms' ? '14 September 2026' : 'September 14, 2026';

  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8" id="privacy-policy-page">
      <div className="max-w-3xl mx-auto prose prose-green text-gray-600">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">{t.privacyPolicy.title}</h1>
        <p className="mb-4 text-sm text-gray-500">{t.privacyPolicy.lastUpdated} {dateStr}</p>
        
        <p className="mb-6 leading-relaxed">
          {t.privacyPolicy.intro}
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">{t.privacyPolicy.sec1Title}</h2>
        <p className="mb-4 leading-relaxed">
          {t.privacyPolicy.sec1Desc}
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>{language === 'ms' ? 'Maklumat Peribadi Yang Diberikan Oleh Anda: ' : 'Personal Information Provided by You: '}</strong>{t.privacyPolicy.sec1Personal}</li>
          <li><strong>{language === 'ms' ? 'Maklumat Barangan Lusuh: ' : 'Scrap Details: '}</strong>{t.privacyPolicy.sec1Scrap}</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">{t.privacyPolicy.sec2Title}</h2>
        <p className="mb-4 leading-relaxed">{t.privacyPolicy.sec2Desc}</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          {t.privacyPolicy.sec2List.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">{t.privacyPolicy.sec3Title}</h2>
        <p className="mb-6 leading-relaxed">
          {t.privacyPolicy.sec3Desc}
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">{t.privacyPolicy.secNoLoginTitle}</h2>
        <p className="mb-6 leading-relaxed">
          {t.privacyPolicy.secNoLoginDesc}
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">{t.privacyPolicy.sec4Title}</h2>
        <p className="mb-6 leading-relaxed">
          {t.privacyPolicy.sec4Desc}
        </p>
      </div>
    </div>
  );
}
