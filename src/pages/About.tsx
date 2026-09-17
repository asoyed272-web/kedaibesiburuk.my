import { Users, Leaf, ShieldCheck, ThumbsUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const values = [
    {
      name: t.about.values.professional.title,
      description: t.about.values.professional.desc,
      icon: Users,
    },
    {
      name: t.about.values.fair.title,
      description: t.about.values.fair.desc,
      icon: ShieldCheck,
    },
    {
      name: t.about.values.responsible.title,
      description: t.about.values.responsible.desc,
      icon: Leaf,
    },
    {
      name: t.about.values.customer.title,
      description: t.about.values.customer.desc,
      icon: ThumbsUp,
    },
  ];

  return (
    <div className="bg-white" id="about-page">
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-6">
            {t.about.heading}
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            {t.about.description}
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.name} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white mb-6">
                  <value.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.name}</h3>
                <p className="text-base text-gray-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
