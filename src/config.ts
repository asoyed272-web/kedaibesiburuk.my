export const BUSINESS_CONFIG = {
  name: "kedaibesiburuk",
  tagline: "Turn Your Scrap Into Value.",
  secondaryTagline: "We Collect. We Recycle. We Make a Difference.",
  phone: "+601111545835",
  whatsapp: "+601111545835",
  whatsappNumberOnly: "601111545835", // purely numeric without '+' for wa.me URL
  whatsappUrl: "https://wa.me/601111545835",
  email: "him511046@gmail.com",
  location: {
    en: "Ampang, Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia",
    ms: "Ampang, Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia"
  },
  address: "Ampang, Kuala Lumpur",
  city: "Federal Territory of Kuala Lumpur, Malaysia",
  mapUrl: "https://maps.app.goo.gl/nxfabzXJPdP8r5km6?g_st=awb",
  mapEmbedUrl: "https://maps.google.com/maps?q=Ampang,%20Kuala%20Lumpur,%20Malaysia&t=&z=13&ie=UTF8&iwloc=&output=embed",
  openingHours: {
    en: "Monday–Saturday: 8:00 AM – 6:00 PM (Sunday: Closed)",
    ms: "Isnin–Sabtu: 8:00 PG – 6:00 PTG (Ahad: Tutup)"
  }
};

// ==================================================
// CENTRAL DEVELOPER CONFIGURATION
// Separate from BUSINESS_CONFIG
// Change developer name, WhatsApp number and email in one place
// ==================================================
export const DEVELOPER_CONFIG = {
  name: "Khairul Amin",
  whatsapp: "+8801633276359",
  whatsappNumberOnly: "8801633276359",
  whatsappUrl: "https://wa.me/8801633276359",
  email: "mr.khairulamin786@gmail.com"
};

export const SCRAP_PRICES = [
  { id: "aluminium", name: "Aluminium", price: "Contact Us", unit: "kg" },
  { id: "copper-brass", name: "Copper & Brass", price: "Contact Us", unit: "kg" },
  { id: "iron-steel", name: "Iron & Steel", price: "Contact Us", unit: "kg" },
  { id: "cables-wiring", name: "Cables & Wiring", price: "Contact Us", unit: "kg" },
  { id: "motors-power", name: "Motors & Power", price: "Contact Us", unit: "kg" },
  { id: "electronics-it", name: "Electronics & IT", price: "Contact Us", unit: "piece" },
  { id: "cans-containers", name: "Cans & Containers", price: "Contact Us", unit: "kg" }
];

export const WHATSAPP_PREFILLS = {
  general: "Hello, I would like to know more about your scrap collection service.",
  sell: "Hello, I have scrap to sell. Please let me know today's prices.",
  pickup: "Hello, I would like to request a scrap pickup.",
  price: "Hello, can you please tell me today's scrap prices?"
};
