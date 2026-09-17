import { Link } from 'react-router-dom';
import { PhoneCall, ClipboardList, Truck, Banknote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HowItWorksProps {
  isSection?: boolean;
}

export default function HowItWorks({ isSection = false }: HowItWorksProps) {
  const { t } = useLanguage();

  const steps = [
    {
      id: '01',
      title: t.howItWorks.steps.step1.title,
      description: t.howItWorks.steps.step1.desc,
      icon: PhoneCall,
    },
    {
      id: '02',
      title: t.howItWorks.steps.step2.title,
      description: t.howItWorks.steps.step2.desc,
      icon: ClipboardList,
    },
    {
      id: '03',
      title: t.howItWorks.steps.step3.title,
      description: t.howItWorks.steps.step3.desc,
      icon: Truck,
    },
    {
      id: '04',
      title: t.howItWorks.steps.step4.title,
      description: t.howItWorks.steps.step4.desc,
      icon: Banknote,
    },
  ];

  const content = (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t.howItWorks.heading}</h2>
        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
          {t.howItWorks.subheading}
        </p>
      </div>

      <div className="relative">
        {/* Connection line for desktop */}
        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-green-200" aria-hidden="true" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {steps.map((step) => (
            <div key={step.id} className="relative text-center">
              <div className="mx-auto h-24 w-24 rounded-full bg-white border-4 border-green-500 flex items-center justify-center mb-6 relative z-10 shadow-md">
                <step.icon className="h-10 w-10 text-green-600" />
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full relative z-10">
                <span className="text-green-600 font-bold text-sm tracking-widest uppercase block mb-2">{t.howItWorks.stepPrefix} {step.id}</span>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 bg-blue-50 border border-blue-100 rounded-xl p-6 text-center max-w-3xl mx-auto">
        <p className="text-sm text-blue-800 italic">
          <strong>{t.howItWorks.disclaimerPrefix}</strong> {t.howItWorks.disclaimerText}
        </p>
      </div>
      
      {!isSection && (
        <div className="mt-12 text-center">
          <Link
            to="/pickup"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10 shadow-sm transition-colors"
          >
            {t.howItWorks.startNowBtn}
          </Link>
        </div>
      )}
    </div>
  );

  if (isSection) {
    return <section className="py-20 bg-gray-50" id="how-it-works-section">{content}</section>;
  }

  return <div className="py-20 bg-white min-h-screen" id="how-it-works-page">{content}</div>;
}
