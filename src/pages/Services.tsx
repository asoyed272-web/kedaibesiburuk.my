import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Search,
  X,
  CircleDot,
  Sparkles,
  Anvil,
  Wrench,
  Hammer,
  Building2,
  Boxes,
  Zap,
  Cable,
  Wind,
  Cog,
  Power,
  Server,
  Printer,
  Tv,
  Archive,
  Factory,
  Armchair,
  Plug,
  Cpu,
  HelpCircle,
  Wine,
  Disc3,
  LucideIcon,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getWhatsAppLink } from '../utils';
import { SCRAP_CATEGORIES, ScrapCategory } from '../data/scrapCategories';

interface ServicesProps {
  isSection?: boolean;
}

const ICON_MAP: Record<string, LucideIcon> = {
  CircleDot,
  Sparkles,
  Anvil,
  Wrench,
  Hammer,
  Building2,
  Boxes,
  Zap,
  Cable,
  Wind,
  Cog,
  Power,
  Server,
  Printer,
  Tv,
  Archive,
  Factory,
  Armchair,
  Plug,
  Cpu,
  HelpCircle,
  Wine,
  Disc3,
};

export default function Services({ isSection = false }: ServicesProps) {
  const { language, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeGroup, setActiveGroup] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: t.services.filterGroups.all },
    { id: 'metals', label: t.services.filterGroups.metals },
    { id: 'electrical-hvac', label: t.services.filterGroups.electricalHvac },
    { id: 'electronics-it', label: t.services.filterGroups.electronicsIt },
    { id: 'machinery-structural', label: t.services.filterGroups.machineryStructural },
    { id: 'containers-general', label: t.services.filterGroups.containersGeneral },
  ];

  const filteredCategories = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return SCRAP_CATEGORIES.filter((category: ScrapCategory) => {
      const nameEn = category.name.en.toLowerCase();
      const nameMs = category.name.ms.toLowerCase();
      const descEn = category.description.en.toLowerCase();
      const descMs = category.description.ms.toLowerCase();

      const matchesSearch =
        !query ||
        nameEn.includes(query) ||
        nameMs.includes(query) ||
        descEn.includes(query) ||
        descMs.includes(query);

      const matchesGroup = activeGroup === 'all' || category.group === activeGroup;

      return matchesSearch && matchesGroup;
    });
  }, [searchQuery, activeGroup]);

  const content = (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
          {t.services.heading}
        </h2>
        <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          {t.services.subheading}
        </p>
      </div>

      {/* Search & Filter Controls */}
      <div className="max-w-3xl mx-auto mb-8 space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
            <Search className="h-5 w-5" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.services.searchPlaceholder}
            className="w-full pl-10 pr-10 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base shadow-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Group Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs sm:text-sm">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveGroup(tab.id)}
              className={`whitespace-nowrap px-3.5 py-1.5 rounded-full font-medium transition-all ${
                activeGroup === tab.id
                  ? 'bg-green-600 text-white shadow-sm'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count Summary */}
      <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-6">
        <span>{t.services.categoryCount(filteredCategories.length)}</span>
        {(searchQuery || activeGroup !== 'all') && (
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveGroup('all');
            }}
            className="text-green-600 hover:text-green-700 font-medium"
          >
            {t.services.resetSearch}
          </button>
        )}
      </div>

      {/* 23 Categories Grid */}
      {filteredCategories.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCategories.map((category) => {
            const Icon = ICON_MAP[category.iconName] || CircleDot;
            const categoryName = category.name[language] || category.name.en;
            const categoryDesc = category.description[language] || category.description.en;
            const actionText = `${t.services.sellActionPrefix} ${categoryName}`;

            return (
              <div
                key={category.id}
                id={`category-card-${category.id}`}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group hover:shadow-md hover:border-green-200 transition-all duration-200"
              >
                {/* Image Container with Aspect Ratio */}
                <div className="relative h-44 overflow-hidden bg-gray-100">
                  <img
                    src={category.image}
                    alt={categoryName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category Icon Badge */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm p-2 rounded-lg shadow-sm text-green-700">
                    <Icon className="h-4 w-4" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                    {categoryName}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-grow">
                    {categoryDesc}
                  </p>

                  {/* Sell Button */}
                  <Link
                    to={`/sell?type=${category.id}`}
                    id={`sell-btn-${category.id}`}
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 bg-green-50 text-green-700 font-semibold text-sm rounded-xl hover:bg-green-600 hover:text-white transition-colors duration-150 group/btn"
                  >
                    <span className="truncate pr-2">{actionText}</span>
                    <ArrowRight className="h-4 w-4 flex-shrink-0 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-2xl p-10 text-center border border-gray-200 shadow-sm max-w-md mx-auto my-8">
          <HelpCircle className="h-10 w-10 text-gray-400 mx-auto mb-3" />
          <p className="text-gray-700 font-medium mb-4">{t.services.noResults}</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveGroup('all');
            }}
            className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
          >
            {t.services.resetSearch}
          </button>
        </div>
      )}

      {/* Unlisted / Other Recyclables Card */}
      <div className="mt-12 bg-white rounded-2xl shadow-sm border border-gray-200 border-dashed p-6 sm:p-8 text-center max-w-3xl mx-auto">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
          {t.services.otherTitle}
        </h3>
        <p className="text-gray-600 text-sm mb-6 max-w-xl mx-auto">
          {t.services.otherDesc}
        </p>
        <a
          href={getWhatsAppLink(t.whatsappMessages.otherInquiry)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-2.5 bg-green-600 text-white font-medium rounded-xl hover:bg-green-700 transition-colors shadow-sm text-sm"
        >
          {t.services.contactBtn}
        </a>
      </div>
    </div>
  );

  if (isSection) {
    return (
      <section className="py-16 sm:py-20 bg-gray-50/50" id="services-section">
        {content}
      </section>
    );
  }

  return (
    <div className="py-12 sm:py-16 bg-gray-50 min-h-screen" id="services-page">
      {content}
    </div>
  );
}
