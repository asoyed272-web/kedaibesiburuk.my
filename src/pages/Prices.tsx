import { Link } from 'react-router-dom';
import { ArrowRight, Info } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface PricesProps {
  isSection?: boolean;
}

export default function Prices({ isSection = false }: PricesProps) {
  const { t } = useLanguage();

  const priceItems = [
    { id: 'aluminium', name: t.prices.materials.aluminium, price: t.prices.contactUs, unit: t.prices.units.kg },
    { id: 'copper-brass', name: t.prices.materials.copperBrass, price: t.prices.contactUs, unit: t.prices.units.kg },
    { id: 'iron-steel', name: t.prices.materials.ironSteel, price: t.prices.contactUs, unit: t.prices.units.kg },
    { id: 'cables-wiring', name: t.prices.materials.cablesWiring, price: t.prices.contactUs, unit: t.prices.units.kg },
    { id: 'motors-power', name: t.prices.materials.motorsPower, price: t.prices.contactUs, unit: t.prices.units.kg },
    { id: 'electronics-it', name: t.prices.materials.electronicsIt, price: t.prices.contactUs, unit: t.prices.units.piece },
    { id: 'cans-containers', name: t.prices.materials.cansContainers, price: t.prices.contactUs, unit: t.prices.units.kg },
  ];

  const content = (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t.prices.heading}</h2>
        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
          {t.prices.subheading}
        </p>
      </div>

      <div className="bg-white shadow-sm ring-1 ring-gray-200 rounded-2xl overflow-hidden max-w-4xl mx-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="py-4 pl-6 pr-3 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                {t.prices.colMaterial}
              </th>
              <th scope="col" className="px-3 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                {t.prices.colPrice}
              </th>
              <th scope="col" className="px-3 py-4 text-right text-sm font-semibold text-gray-900 uppercase tracking-wider pr-6">
                {t.prices.colAction}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {priceItems.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                <td className="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-gray-900">
                  {item.name}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-600">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {item.price}
                  </span>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-right pr-6">
                  <Link 
                    to={`/sell?type=${item.id}`}
                    className="text-green-600 hover:text-green-900 font-medium inline-flex items-center"
                  >
                    <span>{t.prices.sellAction}</span>
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 flex items-start p-4 bg-yellow-50 rounded-lg max-w-4xl mx-auto border border-yellow-100">
        <Info className="h-5 w-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
        <p className="text-sm text-yellow-800">
          {t.prices.disclaimer}
        </p>
      </div>
    </div>
  );

  if (isSection) {
    return <section className="py-20 bg-white" id="prices-section">{content}</section>;
  }

  return <div className="py-20 bg-gray-50 min-h-screen" id="prices-page">{content}</div>;
}
