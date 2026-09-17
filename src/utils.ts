import { BUSINESS_CONFIG, DEVELOPER_CONFIG } from './config';

export function getWhatsAppLink(message?: string): string {
  if (message && message.trim()) {
    const encodedMessage = encodeURIComponent(message.trim());
    return `https://wa.me/${BUSINESS_CONFIG.whatsappNumberOnly}?text=${encodedMessage}`;
  }
  return BUSINESS_CONFIG.whatsappUrl;
}

export function getDeveloperWhatsAppLink(message?: string): string {
  // Extract purely numeric digits without '+' or other chars
  const digitsOnly = DEVELOPER_CONFIG.whatsappNumberOnly || DEVELOPER_CONFIG.whatsapp.replace(/[^0-9]/g, '') || '8801633276359';
  if (message && message.trim()) {
    const encodedMessage = encodeURIComponent(message.trim());
    return `https://wa.me/${digitsOnly}?text=${encodedMessage}`;
  }
  return DEVELOPER_CONFIG.whatsappUrl || `https://wa.me/${digitsOnly}`;
}

export function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
