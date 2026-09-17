import { useEffect } from 'react';
import { DEVELOPER_CONFIG } from '../config';
import { getDeveloperWhatsAppLink } from '../utils';
import { useLanguage } from '../context/LanguageContext';
import { 
  X, 
  Code, 
  Wrench, 
  LifeBuoy, 
  Palette, 
  Mail, 
  CheckCircle2,
  ExternalLink 
} from 'lucide-react';

interface DeveloperContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DeveloperContactModal({ isOpen, onClose }: DeveloperContactModalProps) {
  const { language, t } = useLanguage();

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const whatsappMessage = t.developerSection.whatsappMessage;
  const whatsappUrl = getDeveloperWhatsAppLink(whatsappMessage);
  const emailUrl = `mailto:${DEVELOPER_CONFIG.email}`;

  const servicesList = [
    {
      title: t.developerSection.services.development,
      icon: Code,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-100',
    },
    {
      title: t.developerSection.services.design,
      icon: Palette,
      color: 'text-purple-600 bg-purple-50 border-purple-100',
    },
    {
      title: t.developerSection.services.updates,
      icon: Wrench,
      color: 'text-amber-600 bg-amber-50 border-amber-100',
    },
    {
      title: t.developerSection.services.support,
      icon: LifeBuoy,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    },
  ];

  return (
    <div 
      id="developer-contact-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-150"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="developer-contact-modal-title"
    >
      <div 
        id="developer-contact-modal-card"
        className="w-full max-w-sm bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 bg-gray-900 text-white border-b border-gray-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-400">
              <Code className="w-4 h-4" />
            </div>
            <h2 id="developer-contact-modal-title" className="text-base font-bold text-white tracking-tight">
              {t.developerSection.modalTitle}
            </h2>
          </div>
          <button
            id="developer-contact-close-btn"
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors cursor-pointer text-lg leading-none"
            aria-label={t.developerSection.closeBtn || 'Close'}
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 space-y-4 bg-gray-50/50">
          {/* Developer Identity */}
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-2xs">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider block">
                  {language === 'ms' ? 'Nama' : 'Name'}
                </span>
                <span className="text-lg font-bold text-gray-900 block mt-0.5">
                  {DEVELOPER_CONFIG.name}
                </span>
              </div>
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200/60">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
                <span>Developer</span>
              </div>
            </div>
          </div>

          {/* Services Offered */}
          <div>
            <span className="text-xs font-bold text-gray-600 uppercase tracking-wider block mb-2">
              {t.developerSection.servicesTitle}
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {servicesList.map((svc, index) => {
                const IconComponent = svc.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-gray-200 text-gray-800 font-medium shadow-2xs"
                  >
                    <div className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 border ${svc.color}`}>
                      <IconComponent className="w-3.5 h-3.5" />
                    </div>
                    <span className="leading-tight">{svc.title}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Action Buttons */}
          <div className="space-y-2.5 pt-1">
            {/* 💬 WhatsApp Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="dev-contact-whatsapp-btn"
              className="w-full py-3 px-4 rounded-xl font-semibold text-white bg-[#25D366] hover:bg-[#128C7E] active:bg-[#075E54] shadow-xs transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>{t.developerSection.whatsappBtn}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>

            {/* 📧 Email Button */}
            <a
              href={emailUrl}
              id="dev-contact-email-btn"
              className="w-full py-2.5 px-4 rounded-xl font-semibold text-gray-800 bg-white hover:bg-gray-100 border border-gray-300 transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
            >
              <Mail className="w-4 h-4 text-gray-600 shrink-0" />
              <span>{t.developerSection.emailBtn}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
