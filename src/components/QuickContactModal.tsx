import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuickContact } from '../context/QuickContactContext';
import { useLanguage } from '../context/LanguageContext';
import { getWhatsAppLink } from '../utils';
import { BUSINESS_CONFIG } from '../config';
import { 
  X, 
  Recycle, 
  Truck, 
  MessageCircle, 
  Send, 
  Phone,
  FileText,
  ShieldCheck,
  CheckCheck,
  Sparkles
} from 'lucide-react';

type MessageTab = 'pickup' | 'sell' | 'whatsapp';

export default function QuickContactModal() {
  const { isOpen, closeQuickContact } = useQuickContact();
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<MessageTab>('pickup');
  const [customNote, setCustomNote] = useState('');

  if (!isOpen) return null;

  // Pre-configured default message templates based on language
  const baseMessages: Record<MessageTab, string> = {
    pickup: language === 'ms'
      ? `Salam ${BUSINESS_CONFIG.name} (${BUSINESS_CONFIG.phone}),\nSaya ingin menjadualkan kutipan barangan lusuh di lokasi saya (Ampang / Lembah Klang).\nSila maklumkan tarikh dan masa yang sesuai.`
      : `Hello ${BUSINESS_CONFIG.name} (${BUSINESS_CONFIG.phone}),\nI would like to schedule a scrap collection pickup at my location (Ampang / Klang Valley).\nPlease let me know your available collection times.`,
    sell: language === 'ms'
      ? `Salam ${BUSINESS_CONFIG.name} (${BUSINESS_CONFIG.phone}),\nSaya ada barangan lusuh kitar semula untuk dijual (cth. aluminium, tembaga, besi, wayar atau e-waste).\nBolehkah berikan sebut harga dan butiran kutipan?`
      : `Hello ${BUSINESS_CONFIG.name} (${BUSINESS_CONFIG.phone}),\nI have recyclable scrap materials to sell (e.g. aluminium, copper, iron/steel, cables, or e-waste).\nCan you please provide your latest scrap price rates and collection details?`,
    whatsapp: language === 'ms'
      ? `Salam ${BUSINESS_CONFIG.name} (${BUSINESS_CONFIG.phone}),\nSaya ingin berhubung terus dengan pasukan anda mengenai servis kitar semula barangan lusuh.`
      : `Hello ${BUSINESS_CONFIG.name} (${BUSINESS_CONFIG.phone}),\nI would like to connect directly with your team regarding your recycling and scrap collection services.`
  };

  // Full formatted message including optional user note
  const getFullMessage = () => {
    let msg = baseMessages[activeTab];
    if (customNote.trim()) {
      msg += language === 'ms'
        ? `\n\nNota Tambahan: ${customNote.trim()}`
        : `\n\nAdditional Details: ${customNote.trim()}`;
    }
    return msg;
  };

  const handleSendWhatsApp = () => {
    const fullMessage = getFullMessage();
    const url = getWhatsAppLink(fullMessage);
    window.open(url, '_blank', 'noopener,noreferrer');
    closeQuickContact();
  };

  const handleNavigateToForm = (path: string) => {
    closeQuickContact();
    navigate(path);
  };

  return (
    <div 
      id="quick-contact-modal-overlay"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeQuickContact();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="quick-contact-modal-title"
    >
      <div 
        id="quick-contact-modal-card"
        className="w-full sm:max-w-xl bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col max-h-[92vh] animate-in slide-in-from-bottom-6 duration-200"
      >
        {/* WhatsApp Verified Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 bg-emerald-800 text-white">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-11 h-11 rounded-full bg-emerald-700 border-2 border-emerald-400/50 flex items-center justify-center text-white font-bold text-lg shadow-inner">
                <Recycle className="w-6 h-6 text-emerald-300" />
              </div>
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-400 border-2 border-emerald-900 rounded-full"></span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h2 id="quick-contact-modal-title" className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {BUSINESS_CONFIG.name}
                </h2>
                <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-700/80 text-emerald-200 border border-emerald-600/60">
                  <ShieldCheck className="w-3 h-3 text-emerald-300" />
                  {t.quickContactModal.verifiedBusiness}
                </span>
              </div>
              <p className="text-xs text-emerald-200 flex items-center gap-1 mt-0.5">
                <span>{BUSINESS_CONFIG.whatsapp}</span>
                <span>•</span>
                <span>{t.quickContactModal.onlineNow}</span>
              </p>
            </div>
          </div>
          <button
            id="quick-contact-close-btn"
            onClick={closeQuickContact}
            className="p-2 rounded-full text-emerald-200 hover:text-white hover:bg-emerald-700 transition-colors cursor-pointer"
            aria-label={t.quickContactModal.closeBtn}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 3 Interactive Category Tabs (Request Pickup | Sell Your Scrap | WhatsApp Us) */}
        <div className="p-3 sm:p-4 bg-gray-50 border-b border-gray-200">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-1">
            {language === 'ms' ? 'Pilih Jenis Permintaan:' : 'Select Request Type:'}
          </div>
          <div className="grid grid-cols-3 gap-2">
            {/* Tab 1: Request Pickup */}
            <button
              type="button"
              id="tab-request-pickup"
              onClick={() => setActiveTab('pickup')}
              className={`flex flex-col items-center justify-center p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                activeTab === 'pickup'
                  ? 'bg-white border-emerald-600 shadow-sm text-emerald-800 ring-2 ring-emerald-500/20'
                  : 'bg-white/80 border-gray-200 text-gray-700 hover:bg-white hover:border-gray-300'
              }`}
            >
              <div className={`p-1.5 rounded-lg mb-1 ${activeTab === 'pickup' ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-600'}`}>
                <Truck className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold leading-tight">
                {t.quickContactModal.tabs.pickup}
              </span>
            </button>

            {/* Tab 2: Sell Your Scrap */}
            <button
              type="button"
              id="tab-sell-scrap"
              onClick={() => setActiveTab('sell')}
              className={`flex flex-col items-center justify-center p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                activeTab === 'sell'
                  ? 'bg-white border-emerald-600 shadow-sm text-emerald-800 ring-2 ring-emerald-500/20'
                  : 'bg-white/80 border-gray-200 text-gray-700 hover:bg-white hover:border-gray-300'
              }`}
            >
              <div className={`p-1.5 rounded-lg mb-1 ${activeTab === 'sell' ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-600'}`}>
                <Recycle className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold leading-tight">
                {t.quickContactModal.tabs.sell}
              </span>
            </button>

            {/* Tab 3: WhatsApp Us */}
            <button
              type="button"
              id="tab-whatsapp-us"
              onClick={() => setActiveTab('whatsapp')}
              className={`flex flex-col items-center justify-center p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                activeTab === 'whatsapp'
                  ? 'bg-white border-emerald-600 shadow-sm text-emerald-800 ring-2 ring-emerald-500/20'
                  : 'bg-white/80 border-gray-200 text-gray-700 hover:bg-white hover:border-gray-300'
              }`}
            >
              <div className={`p-1.5 rounded-lg mb-1 ${activeTab === 'whatsapp' ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-600'}`}>
                <MessageCircle className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold leading-tight">
                {t.quickContactModal.tabs.whatsapp}
              </span>
            </button>
          </div>
        </div>

        {/* Message Preview System Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 bg-gray-100/50">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-gray-600 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              {t.quickContactModal.previewTitle}
            </span>
            <span className="text-[11px] text-gray-500">
              {BUSINESS_CONFIG.phone}
            </span>
          </div>

          {/* Realistic WhatsApp Chat Bubble */}
          <div 
            id="whatsapp-chat-bubble-preview"
            className="relative bg-[#DCF8C6] border border-[#b8e8a2] text-gray-900 rounded-2xl rounded-tr-xs p-4 sm:p-5 shadow-xs transition-all"
          >
            {/* Sender Label */}
            <div className="text-[11px] font-bold text-emerald-800 mb-1 flex items-center justify-between">
              <span>{language === 'ms' ? `Mesej Anda Kepada ${BUSINESS_CONFIG.name}:` : `Your Message to ${BUSINESS_CONFIG.name}:`}</span>
              <span className="text-[10px] text-emerald-700 font-normal">WhatsApp</span>
            </div>

            {/* Message Body */}
            <p className="text-sm sm:text-base leading-relaxed text-gray-900 whitespace-pre-line font-medium font-sans">
              {baseMessages[activeTab]}
            </p>

            {/* Custom User Note Display (if added) */}
            {customNote.trim() && (
              <div className="mt-2.5 pt-2 border-t border-[#c6ebb2] text-xs sm:text-sm text-gray-800 italic">
                <span className="font-semibold not-italic text-emerald-900">
                  {language === 'ms' ? 'Nota Tambahan: ' : 'Additional Details: '}
                </span>
                {customNote.trim()}
              </div>
            )}

            {/* Time & Double Checkmark */}
            <div className="mt-3 flex items-center justify-end gap-1 text-[11px] text-emerald-800/80">
              <span>{language === 'ms' ? 'Sekarang' : 'Just now'}</span>
              <CheckCheck className="w-4 h-4 text-blue-600" />
            </div>
          </div>

          {/* Optional Note Field to customize the message */}
          <div className="bg-white p-3 rounded-xl border border-gray-200">
            <label htmlFor="modal-custom-note" className="block text-xs font-semibold text-gray-700 mb-1">
              {language === 'ms' ? 'Tambah Maklumat Tambahan (Pilihan):' : 'Add Custom Details (Optional):'}
            </label>
            <input
              id="modal-custom-note"
              name="custom_message_note"
              type="text"
              autoComplete="off"
              spellCheck="false"
              value={customNote}
              onChange={(e) => setCustomNote(e.target.value)}
              placeholder={t.quickContactModal.customNotePlaceholder}
              className="w-full text-xs sm:text-sm px-3 py-2 border border-gray-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-gray-50/50"
            />
          </div>

          {/* Primary Action Button: Send to WhatsApp */}
          <button
            type="button"
            id="modal-send-whatsapp-btn"
            onClick={handleSendWhatsApp}
            className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-[#25D366] hover:bg-[#128C7E] active:bg-[#075E54] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base"
          >
            <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span>{t.quickContactModal.sendWhatsAppBtn}</span>
            <Send className="w-4 h-4 ml-1 shrink-0" />
          </button>

          {/* Contextual Alternative Link */}
          <div className="pt-2 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
            {activeTab === 'pickup' && (
              <button
                type="button"
                id="modal-alt-pickup-form"
                onClick={() => handleNavigateToForm('/pickup')}
                className="text-emerald-700 hover:text-emerald-800 font-semibold flex items-center gap-1.5 cursor-pointer py-1"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{language === 'ms' ? 'Atau guna Borang Kutipan 30 Saat →' : 'Or use 30-Second Pickup Form →'}</span>
              </button>
            )}

            {activeTab === 'sell' && (
              <button
                type="button"
                id="modal-alt-sell-form"
                onClick={() => handleNavigateToForm('/sell')}
                className="text-emerald-700 hover:text-emerald-800 font-semibold flex items-center gap-1.5 cursor-pointer py-1"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{language === 'ms' ? 'Atau guna Borang Jual Barang 30 Saat →' : 'Or use 30-Second Sell Form →'}</span>
              </button>
            )}

            {activeTab === 'whatsapp' && (
              <a
                href={`tel:${BUSINESS_CONFIG.phone}`}
                id="modal-alt-call"
                className="text-gray-700 hover:text-emerald-700 font-semibold flex items-center gap-1.5 py-1"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span>{language === 'ms' ? `Atau Telefon Terus: ${BUSINESS_CONFIG.phone}` : `Or Call Directly: ${BUSINESS_CONFIG.phone}`}</span>
              </a>
            )}

            <button
              type="button"
              onClick={closeQuickContact}
              className="text-gray-500 hover:text-gray-800 py-1 cursor-pointer"
            >
              {t.quickContactModal.closeBtn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
