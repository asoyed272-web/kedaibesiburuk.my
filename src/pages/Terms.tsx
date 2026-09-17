import { useLanguage } from '../context/LanguageContext';

export default function Terms() {
  const { t, language } = useLanguage();
  const dateStr = language === 'ms' ? '14 September 2026' : 'September 14, 2026';

  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8" id="terms-page">
      <div className="max-w-3xl mx-auto prose prose-green text-gray-600">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">{t.termsConditions.title}</h1>
        <p className="mb-4 text-sm text-gray-500">{t.termsConditions.lastUpdated} {dateStr}</p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">{t.termsConditions.sec1Title}</h2>
        <p className="mb-6 leading-relaxed">
          {t.termsConditions.sec1Desc}
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">{t.termsConditions.sec2Title}</h2>
        <p className="mb-4 leading-relaxed">
          {t.termsConditions.sec2Desc}
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          {t.termsConditions.sec2List.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">{t.termsConditions.sec3Title}</h2>
        <p className="mb-6 leading-relaxed">
          {t.termsConditions.sec3Desc}
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">{t.termsConditions.sec4Title}</h2>
        <p className="mb-6 leading-relaxed">
          {t.termsConditions.sec4Desc}
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">{t.termsConditions.sec5Title}</h2>
        <p className="mb-6 leading-relaxed">
          {t.termsConditions.sec5Desc}
        </p>
      </div>
    </div>
  );
}
