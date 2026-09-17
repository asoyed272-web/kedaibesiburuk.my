import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { classNames } from '../utils';
import { useLanguage } from '../context/LanguageContext';

interface FAQProps {
  isSection?: boolean;
}

export default function FAQ({ isSection = false }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLanguage();

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const content = (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t.faq.heading}</h2>
        <p className="mt-4 text-lg text-gray-500">
          {t.faq.subheading}
        </p>
      </div>

      <div className="space-y-4">
        {t.faq.items.map((faq, index) => (
          <div 
            key={index} 
            className={classNames(
              "border rounded-xl transition-colors duration-200 overflow-hidden",
              openIndex === index ? "border-green-200 bg-green-50/50" : "border-gray-200 bg-white hover:border-green-200 hover:bg-gray-50"
            )}
          >
            <button
              onClick={() => toggleFaq(index)}
              className="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none cursor-pointer"
            >
              <span className="text-lg font-medium text-gray-900">{faq.q}</span>
              <ChevronDown
                className={classNames(
                  "h-5 w-5 text-gray-500 transition-transform duration-300",
                  openIndex === index ? "rotate-180 text-green-600" : ""
                )}
              />
            </button>
            
            <div 
              className={classNames(
                "overflow-hidden transition-all duration-300 ease-in-out",
                openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <div className="px-6 pb-5">
                <p className="text-base text-gray-600">{faq.a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  if (isSection) {
    return <section className="py-20 bg-gray-50" id="faq-section">{content}</section>;
  }

  return <div className="py-20 bg-white min-h-screen" id="faq-page">{content}</div>;
}
