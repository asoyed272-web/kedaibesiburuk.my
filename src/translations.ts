export type Language = 'en' | 'ms';

export interface Translations {
  brand: {
    name: string;
    tagline: string;
    secondaryTagline: string;
  };
  nav: {
    home: string;
    whatWeCollect: string;
    howItWorks: string;
    prices: string;
    about: string;
    contact: string;
    requestPickup: string;
    sellScrap: string;
    openMainMenu: string;
    closeMenu: string;
  };
  hero: {
    titlePart1: string;
    titleHighlight: string;
    description: string;
    requestPickupBtn: string;
    sellScrapBtn: string;
    whatsappBtn: string;
    heroAlt: string;
  };
  trustBar: {
    easyPickupTitle: string;
    easyPickupDesc: string;
    fairPricingTitle: string;
    fairPricingDesc: string;
    recyclingTitle: string;
    recyclingDesc: string;
    trustedTitle: string;
    trustedDesc: string;
  };
  services: {
    heading: string;
    subheading: string;
    searchPlaceholder: string;
    filterAll: string;
    filterGroups: {
      all: string;
      metals: string;
      electricalHvac: string;
      electronicsIt: string;
      machineryStructural: string;
      containersGeneral: string;
    };
    sellActionPrefix: string;
    noResults: string;
    resetSearch: string;
    categoryCount: (count: number) => string;
    otherTitle: string;
    otherDesc: string;
    contactBtn: string;
  };
  howItWorks: {
    heading: string;
    subheading: string;
    stepPrefix: string;
    steps: {
      step1: { title: string; desc: string };
      step2: { title: string; desc: string };
      step3: { title: string; desc: string };
      step4: { title: string; desc: string };
    };
    disclaimerPrefix: string;
    disclaimerText: string;
    startNowBtn: string;
  };
  prices: {
    heading: string;
    subheading: string;
    colMaterial: string;
    colPrice: string;
    colAction: string;
    contactUs: string;
    sellAction: string;
    disclaimer: string;
    materials: {
      aluminium: string;
      copperBrass: string;
      ironSteel: string;
      cablesWiring: string;
      motorsPower: string;
      electronicsIt: string;
      cansContainers: string;
    };
    units: {
      kg: string;
      piece: string;
      ton: string;
      bags: string;
      other: string;
    };
  };
  environmental: {
    heading: string;
    description: string;
    benefits: string[];
    imageAlt: string;
  };
  reviews: {
    heading: string;
    subheading: string;
    sampleNotice: string;
    items: {
      name: string;
      type: string;
      review: string;
    }[];
  };
  faq: {
    heading: string;
    subheading: string;
    items: {
      q: string;
      a: string;
    }[];
  };
  ctaSection: {
    title: string;
    description: string;
    pickupBtn: string;
    whatsappBtn: string;
  };
  about: {
    heading: string;
    description: string;
    values: {
      professional: { title: string; desc: string };
      fair: { title: string; desc: string };
      responsible: { title: string; desc: string };
      customer: { title: string; desc: string };
    };
  };
  contact: {
    heading: string;
    subheading: string;
    cardHeader: string;
    infoTitle: string;
    phoneTitle: string;
    phoneLabel: string;
    phoneDesc: string;
    emailTitle: string;
    emailLabel: string;
    emailDesc: string;
    locationTitle: string;
    locationLabel: string;
    locationDesc: string;
    hoursTitle: string;
    hoursWeekdays: string;
    hoursSunday: string;
    getDirections: string;
    whatsappLabel: string;
    callBtn: string;
    whatsappBtn: string;
    emailBtn: string;
    mapBtn: string;
  };
  forms: {
    sellTitle: string;
    sellSubtitle: string;
    pickupTitle: string;
    pickupSubtitle: string;
    customerInfo: string;
    fullName: string;
    fullNamePlaceholder: string;
    phoneNumber: string;
    phonePlaceholder: string;
    whatsappNumber: string;
    whatsappPlaceholder: string;
    scrapDetails: string;
    scrapType: string;
    selectScrapType: string;
    householdScrapOption: string;
    industrialScrapOption: string;
    mixedScrapOption: string;
    otherOption: string;
    estimatedQuantity: string;
    quantityPlaceholder: string;
    unit: string;
    location: string;
    pickupAddress: string;
    addressPlaceholder: string;
    cityArea: string;
    cityAreaPlaceholder: string;
    preferredDate: string;
    preferredTime: string;
    anyTime: string;
    morningTime: string;
    afternoonTime: string;
    eveningTime: string;
    additionalInfo: string;
    additionalNotes: string;
    sellNotesPlaceholder: string;
    pickupNotesPlaceholder: string;
    photoNote: string;
    submitSellBtn: string;
    submitPickupBtn: string;
    successTitle: string;
    successSellMsg: string;
    successPickupMsg: string;
    submitAnotherBtn: string;
    errorTitle: string;
    errorMsg: string;
    validationName: string;
    validationPhone: string;
    validationScrapType: string;
    validationQuantity: string;
    validationAddress: string;
  };
  quickRequest: {
    title: string;
    subtitle: string;
    reassuranceNote: string;
    nameLabel: string;
    namePlaceholder: string;
    materialsLabel: string;
    materialsSubtitle: string;
    materials: Record<string, string>;
    weightLabel: string;
    weightPlaceholder: string;
    units: {
      kg: string;
      ton: string;
      piece: string;
      bag: string;
      other: string;
    };
    locationLabel: string;
    locationPlaceholder: string;
    locationExample: string;
    photoLabel: string;
    addPhotoBtn: string;
    photosAttached: (count: number) => string;
    noPhotosAttached: string;
    notesLabel: string;
    notesPlaceholder: string;
    continueBtn: string;
    validation: {
      name: string;
      materials: string;
      weight: string;
      location: string;
    };
    preview: {
      title: string;
      subtitle: string;
      nameLabel: string;
      scrapLabel: string;
      weightLabel: string;
      fromLabel: string;
      photosLabel: string;
      noteLabel: string;
      messagePreviewTitle: string;
      sendWhatsAppBtn: string;
      editBtn: string;
      sentTitle: string;
      sentMessage: string;
      openWhatsAppAgainBtn: string;
      submitAnotherBtn: string;
    };
  };
  quickContactModal: {
    title: string;
    subtitle: string;
    closeBtn: string;
    previewTitle: string;
    verifiedBusiness: string;
    onlineNow: string;
    tabs: {
      pickup: string;
      sell: string;
      whatsapp: string;
    };
    messages: {
      pickup: string;
      sell: string;
      whatsapp: string;
    };
    customNotePlaceholder: string;
    sendWhatsAppBtn: string;
    orFillFormBtn: string;
    options: {
      sell: {
        title: string;
        desc: string;
      };
      pickup: {
        title: string;
        desc: string;
      };
      prices: {
        title: string;
        desc: string;
      };
      general: {
        title: string;
        desc: string;
      };
    };
  };
  footer: {
    quickLinks: string;
    services: string;
    contactInfo: string;
    allRightsReserved: string;
    privacyPolicy: string;
    termsConditions: string;
  };
  developerSection: {
    title: string;
    subtitle: string;
    contactBtn: string;
    creditPrefix: string;
    modalTitle: string;
    modalSubtitle: string;
    servicesTitle: string;
    services: {
      development: string;
      updates: string;
      support: string;
      design: string;
    };
    whatsappBtn: string;
    emailBtn: string;
    closeBtn: string;
    whatsappMessage: string;
  };
  mobileBar: {
    home: string;
    sell: string;
    pickup: string;
    whatsapp: string;
    call: string;
    map: string;
  };
  floatingWhatsApp: {
    tooltip: string;
    ariaLabel: string;
  };
  privacyPolicy: {
    title: string;
    lastUpdated: string;
    intro: string;
    sec1Title: string;
    sec1Desc: string;
    sec1Personal: string;
    sec1Scrap: string;
    sec2Title: string;
    sec2Desc: string;
    sec2List: string[];
    sec3Title: string;
    sec3Desc: string;
    secNoLoginTitle: string;
    secNoLoginDesc: string;
    sec4Title: string;
    sec4Desc: string;
  };
  termsConditions: {
    title: string;
    lastUpdated: string;
    sec1Title: string;
    sec1Desc: string;
    sec2Title: string;
    sec2Desc: string;
    sec2List: string[];
    sec3Title: string;
    sec3Desc: string;
    sec4Title: string;
    sec4Desc: string;
    sec5Title: string;
    sec5Desc: string;
  };
  whatsappMessages: {
    general: string;
    sellInquiry: string;
    pickupInquiry: string;
    priceInquiry: string;
    otherInquiry: string;
    sellForm: (data: {
      name: string;
      phone: string;
      whatsapp: string;
      scrapName: string;
      quantity: string;
      unit: string;
      address: string;
      city: string;
      notes?: string;
    }) => string;
    pickupForm: (data: {
      name: string;
      phone: string;
      whatsapp: string;
      scrapName: string;
      quantity: string;
      unit: string;
      address: string;
      city: string;
      preferredDate?: string;
      preferredTime?: string;
      notes?: string;
    }) => string;
    quickRequestMessage: (data: {
      name: string;
      materials: string;
      weight: string;
      unit: string;
      location: string;
      notes?: string;
      photoCount?: number;
    }) => string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    brand: {
      name: "Kedai Besi Buruk",
      tagline: "Turn Your Scrap Into Value.",
      secondaryTagline: "We Collect. We Recycle. We Make a Difference.",
    },
    nav: {
      home: "Home",
      whatWeCollect: "What We Collect",
      howItWorks: "How It Works",
      prices: "Prices",
      about: "About",
      contact: "Contact",
      requestPickup: "Request Pickup",
      sellScrap: "Sell Your Scrap",
      openMainMenu: "Open main menu",
      closeMenu: "Close menu",
    },
    hero: {
      titlePart1: "Kedai Besi Buruk –",
      titleHighlight: "Scrap Collection & Recycling",
      description: "We collect scrap and recyclable materials from homes, shops, businesses and industries. We give higher payments for eligible scrap materials. Contact us today to arrange a convenient pickup.",
      requestPickupBtn: "Request Pickup",
      sellScrapBtn: "Sell Your Scrap",
      whatsappBtn: "WhatsApp Us",
      heroAlt: "Kedai Besi Buruk professional scrap collection truck",
    },
    trustBar: {
      easyPickupTitle: "Easy Pickup",
      easyPickupDesc: "We come directly to your location.",
      fairPricingTitle: "Higher & Fair Payments",
      fairPricingDesc: "We give higher payments for eligible scrap materials based on quality and volume.",
      recyclingTitle: "Responsible Recycling",
      recyclingDesc: "We help recyclable materials get a second life.",
      trustedTitle: "Trusted Service",
      trustedDesc: "Professional and reliable collection.",
    },
    services: {
      heading: "What We Collect",
      subheading: "We collect 23 categories of recyclable scrap, metals, electronics, and industrial materials. Select your category below.",
      searchPlaceholder: "Search scrap materials...",
      filterAll: "All Categories",
      filterGroups: {
        all: "All (23)",
        metals: "Metals",
        electricalHvac: "Electrical & HVAC",
        electronicsIt: "Electronics & IT",
        machineryStructural: "Machinery & Structural",
        containersGeneral: "Containers & General",
      },
      sellActionPrefix: "Sell",
      noResults: "No scrap materials found matching your search.",
      resetSearch: "Clear search and view all",
      categoryCount: (count: number) => `${count} categories available`,
      otherTitle: "Have other recyclable scrap?",
      otherDesc: "If you have unlisted scrap materials, bulk commercial quantities or specialized industrial plant components, reach out to us on WhatsApp.",
      contactBtn: "Contact Us on WhatsApp",
    },
    howItWorks: {
      heading: "How It Works",
      subheading: "A simple four-step process to turn your unwanted scrap into value.",
      stepPrefix: "Step",
      steps: {
        step1: {
          title: "Contact Us",
          desc: "Customer contacts kedaibesiburuk through website, WhatsApp, or phone.",
        },
        step2: {
          title: "Tell Us About Your Scrap",
          desc: "Customer provides scrap type, estimated quantity, location, and photos if available.",
        },
        step3: {
          title: "We Collect",
          desc: "The collection team visits the customer's location at the scheduled time.",
        },
        step4: {
          title: "Get Paid",
          desc: "The scrap is weighed and the customer receives payment according to the agreed price.",
        },
      },
      disclaimerPrefix: "Disclaimer:",
      disclaimerText: "Final prices may depend on material type, quality, weight and current market conditions.",
      startNowBtn: "Start Now - Request Pickup",
    },
    prices: {
      heading: "Scrap Prices",
      subheading: "We offer competitive prices for your recyclable materials.",
      colMaterial: "Material",
      colPrice: "Price",
      colAction: "Action",
      contactUs: "Contact Us",
      sellAction: "Sell",
      disclaimer: "Prices may vary depending on material quality, quantity and current market conditions. Contact us for today's price.",
      materials: {
        aluminium: "Aluminium",
        copperBrass: "Copper & Brass",
        ironSteel: "Iron & Steel",
        cablesWiring: "Cables & Wiring",
        motorsPower: "Motors & Power",
        electronicsIt: "Electronics & IT",
        cansContainers: "Cans & Containers",
      },
      units: {
        kg: "kg",
        piece: "piece",
        ton: "ton",
        bags: "bags",
        other: "other",
      },
    },
    environmental: {
      heading: "Give Your Scrap a Second Life",
      description: "Recycling helps reduce waste, conserve resources and create a cleaner environment. By selling recyclable materials instead of throwing them away, customers can help support a more sustainable future.",
      benefits: [
        "Reduce landfill waste",
        "Save resources",
        "Reduce pollution",
        "Support recycling",
        "Keep communities cleaner",
      ],
      imageAlt: "Clean environment and recycling",
    },
    reviews: {
      heading: "Customer Reviews",
      subheading: "See what our customers are saying about our service.",
      sampleNotice: "Sample reviews during development.",
      items: [
        {
          name: "Ahmed S.",
          type: "Shop Owner",
          review: "Very convenient service. They collected the scrap directly from our shop.",
        },
        {
          name: "Sarah M.",
          type: "Household",
          review: "Fast and reliable. Cleared out my old appliances in no time, and the price was fair.",
        },
        {
          name: "Tech Solutions Ltd.",
          type: "Office",
          review: "Professional team. Handled our e-waste efficiently and provided great customer service.",
        },
      ],
    },
    faq: {
      heading: "Frequently Asked Questions",
      subheading: "Find answers to common questions about our scrap collection and recycling services.",
      items: [
        {
          q: "What types of scrap do you collect?",
          a: "We collect 23 categories of recyclable scrap materials including aluminium, copper & brass, iron & steel, industrial metals, electrical wiring, HVAC units, electronic IT waste, machinery, plant scrap, and more.",
        },
        {
          q: "Do you provide pickup?",
          a: "Yes. Customers can request a pickup through the website, phone or WhatsApp.",
        },
        {
          q: "How are prices determined?",
          a: "Prices may depend on the material type, quality, quantity and current market conditions.",
        },
        {
          q: "Can I send a photo of my scrap?",
          a: "Yes. You can upload photos through the request form or send them through WhatsApp.",
        },
        {
          q: "Do you collect from businesses?",
          a: "Yes. Pickup services can be arranged for shops, offices, factories and other businesses.",
        },
        {
          q: "Do I need an account?",
          a: "No. Customers should be able to request a pickup without creating an account.",
        },
      ],
    },
    ctaSection: {
      title: "Ready to turn your scrap into value?",
      description: "Schedule a pickup today or contact us on WhatsApp for an immediate response.",
      pickupBtn: "Request Pickup",
      whatsappBtn: "WhatsApp Us",
    },
    about: {
      heading: "About kedaibesiburuk",
      description: "kedaibesiburuk provides convenient scrap collection and recycling services for households, shops, offices, businesses and industries. Our goal is to make scrap collection simple while helping recyclable materials stay in the recycling system.",
      values: {
        professional: {
          title: "Professional Collection",
          desc: "Reliable collection service from trained professionals equipped to handle all your scrap needs safely and efficiently.",
        },
        fair: {
          title: "Fair & Transparent",
          desc: "Clear communication about pricing. We believe in fair market value based on current rates and precise weights.",
        },
        responsible: {
          title: "Responsible Recycling",
          desc: "Helping reduce unnecessary waste by ensuring that collected materials are directed to proper recycling facilities.",
        },
        customer: {
          title: "Customer Focused",
          desc: "Making scrap selling convenient. Our process is designed around your schedule and location for maximum ease.",
        },
      },
    },
    contact: {
      heading: "Get in Touch",
      subheading: "Have questions or ready to schedule a pickup? We're here to help.",
      cardHeader: "CONTACT US",
      infoTitle: "Contact Information",
      phoneTitle: "Phone & WhatsApp",
      phoneLabel: "Call",
      phoneDesc: "Call or message us anytime 24/7.",
      emailTitle: "Email",
      emailLabel: "Email",
      emailDesc: "Send us an email for general inquiries.",
      locationTitle: "Location",
      locationLabel: "Location",
      locationDesc: "Our collection base in Ampang.",
      hoursTitle: "Opening Hours",
      hoursWeekdays: "Open 24/7",
      hoursSunday: "",
      getDirections: "View on Google Maps →",
      whatsappLabel: "WhatsApp",
      callBtn: "Call Us",
      whatsappBtn: "WhatsApp Us",
      emailBtn: "Email Us",
      mapBtn: "View on Google Maps",
    },
    forms: {
      sellTitle: "Have Scrap to Sell?",
      sellSubtitle: "Don't let unwanted materials take up space. Sell your recyclable scrap and turn it into value.",
      pickupTitle: "Request a Pickup",
      pickupSubtitle: "Schedule a convenient time for our team to collect your recyclable materials.",
      customerInfo: "Customer Information",
      fullName: "Full Name *",
      fullNamePlaceholder: "John Doe",
      phoneNumber: "Phone Number *",
      phonePlaceholder: "+601111545835",
      whatsappNumber: "WhatsApp Number (Optional)",
      whatsappPlaceholder: "If different from phone",
      scrapDetails: "Scrap Information",
      scrapType: "Scrap Type *",
      selectScrapType: "Select a type",
      householdScrapOption: "Household Scrap",
      industrialScrapOption: "Industrial Scrap",
      mixedScrapOption: "Mixed Scrap",
      otherOption: "Other",
      estimatedQuantity: "Estimated Quantity *",
      quantityPlaceholder: "e.g. 50",
      unit: "Unit",
      location: "Location",
      pickupAddress: "Pickup Address *",
      addressPlaceholder: "Street address",
      cityArea: "Area / City",
      cityAreaPlaceholder: "Your city or area",
      preferredDate: "Preferred Date",
      preferredTime: "Preferred Time",
      anyTime: "Any time",
      morningTime: "Morning (8:00 AM – 12:00 PM)",
      afternoonTime: "Afternoon (12:00 PM – 4:00 PM)",
      eveningTime: "Evening (4:00 PM – 6:00 PM)",
      additionalInfo: "Additional Information",
      additionalNotes: "Additional Notes",
      sellNotesPlaceholder: "Any special instructions for pickup?",
      pickupNotesPlaceholder: "Any special instructions for finding the location or handling the scrap?",
      photoNote: "Note: You can attach photos of your scrap directly in the WhatsApp chat after submitting this form.",
      submitSellBtn: "Submit Scrap Request",
      submitPickupBtn: "Request Pickup",
      successTitle: "Request Sent Successfully!",
      successSellMsg: "Thank you. We have received your request. If WhatsApp didn't open automatically, please click the button below. Our team will contact you shortly.",
      successPickupMsg: "Thank you. We have received your pickup request. If WhatsApp didn't open automatically, please click the button below. Our team will contact you shortly to confirm.",
      submitAnotherBtn: "Submit another request",
      errorTitle: "Something went wrong",
      errorMsg: "Please check your information and try again, or contact us directly through WhatsApp.",
      validationName: "Please enter your name.",
      validationPhone: "Please enter a valid phone number.",
      validationScrapType: "Please select a scrap type.",
      validationQuantity: "Please enter an estimated quantity.",
      validationAddress: "Please enter a pickup address.",
    },
    quickRequest: {
      title: "Quick Scrap Request",
      subtitle: "Tell us what you have. We'll contact you on WhatsApp.",
      reassuranceNote: "Don't worry about the exact price or pickup time. We'll discuss the details with you on WhatsApp.",
      nameLabel: "Your Name",
      namePlaceholder: "Enter your name",
      materialsLabel: "What Scrap Do You Have?",
      materialsSubtitle: "Select all that apply",
      materials: {
        'aluminium': 'Aluminium',
        'copper-brass': 'Copper & Brass',
        'iron-steel': 'Iron & Steel',
        'metal-piping': 'Metal & Piping',
        'metal-fabrication': 'Metal & Fabrication',
        'metal-structural': 'Metal & Structural',
        'mixed-metal': 'Mixed Metal',
        'motors-power': 'Motors & Power',
        'cables-wiring': 'Cables & Wiring',
        'hvac-cooling': 'HVAC & Cooling',
        'hvac-heavy-parts': 'HVAC & Heavy Parts',
        'electrical-industrial': 'Electrical & Industrial',
        'electronics-it': 'Electronics & IT',
        'office-electronics': 'Office Electronics',
        'appliances-motors': 'Appliances & Motors',
        'containers-metal': 'Containers & Metal',
        'machinery-plant': 'Machinery & Plant',
        'structural-furniture': 'Structural & Furniture',
        'electrical-scrap': 'Electrical Scrap',
        'electronic-waste': 'Electronic Waste',
        'general-scrap': 'General Scrap',
        'glass-containers': 'Glass & Containers',
        'cans-containers': 'Cans & Containers',
      },
      weightLabel: "Approximate Weight",
      weightPlaceholder: "e.g. 50",
      units: {
        kg: "kg",
        ton: "ton",
        piece: "piece",
        bag: "bag",
        other: "Other",
      },
      locationLabel: "From Where?",
      locationPlaceholder: "Enter your area or city",
      locationExample: "e.g. Kuala Lumpur, Petaling Jaya",
      photoLabel: "Add Photos (Optional)",
      addPhotoBtn: "+ Add Photo",
      photosAttached: (count: number) => `${count} photo${count > 1 ? 's' : ''} attached`,
      noPhotosAttached: "No photos attached",
      notesLabel: "Anything else?",
      notesPlaceholder: "Add a note (optional)",
      continueBtn: "Continue to Preview",
      validation: {
        name: "Please enter your name.",
        materials: "Please select at least one scrap material.",
        weight: "Please enter the approximate weight.",
        location: "Please enter your area or city.",
      },
      preview: {
        title: "Check Your Request",
        subtitle: "Review your details below before sending to WhatsApp.",
        nameLabel: "Name",
        scrapLabel: "Scrap",
        weightLabel: "Approximate Weight",
        fromLabel: "From",
        photosLabel: "Photos",
        noteLabel: "Note",
        messagePreviewTitle: "WhatsApp Message Preview",
        sendWhatsAppBtn: "Send to WhatsApp",
        editBtn: "Edit Request",
        sentTitle: "Ready on WhatsApp!",
        sentMessage: "We've opened WhatsApp with your request ready to send. If WhatsApp didn't open automatically, please click below.",
        openWhatsAppAgainBtn: "Open WhatsApp Now",
        submitAnotherBtn: "Submit Another Request",
      },
    },
    quickContactModal: {
      title: "WhatsApp Quick Message",
      subtitle: "Preview and send your message directly to our team on WhatsApp",
      closeBtn: "Close",
      previewTitle: "WhatsApp Message Preview",
      verifiedBusiness: "Verified Business",
      onlineNow: "Typically replies in minutes",
      tabs: {
        pickup: "Request Pickup",
        sell: "Sell Your Scrap",
        whatsapp: "WhatsApp Us",
      },
      messages: {
        pickup: "Hello kedaibesiburuk, I would like to schedule a scrap pickup at my location. Please contact me with available collection times.",
        sell: "Hello kedaibesiburuk, I have recyclable scrap materials to sell. Can you provide price quotes and collection details?",
        whatsapp: "Hello kedaibesiburuk, I would like to chat with your team regarding your recycling services.",
      },
      customNotePlaceholder: "Add an optional note (e.g. scrap types, location)...",
      sendWhatsAppBtn: "Send to WhatsApp",
      orFillFormBtn: "Use 30s Quick Form",
      options: {
        sell: {
          title: "Sell Your Scrap",
          desc: "Fill in our quick 30-second form to get an estimate",
        },
        pickup: {
          title: "Request Pickup",
          desc: "Schedule a collection from your location",
        },
        prices: {
          title: "Ask About Prices",
          desc: "Chat with our team to inquire about today's scrap rates",
        },
        general: {
          title: "WhatsApp Us",
          desc: "Direct inquiry about our recycling services",
        },
      },
    },
    footer: {
      quickLinks: "Quick Links",
      services: "Services",
      contactInfo: "Contact Info",
      allRightsReserved: "All rights reserved.",
      privacyPolicy: "Privacy Policy",
      termsConditions: "Terms & Conditions",
    },
    developerSection: {
      title: "Website Developer",
      subtitle: "Need a website, website updates, or technical support?",
      contactBtn: "Contact Website Developer",
      creditPrefix: "Website designed & developed by",
      modalTitle: "Website Developer",
      modalSubtitle: "Professional web development, modern redesigns, and technical support services.",
      servicesTitle: "Services Offered",
      services: {
        development: "Website Development",
        updates: "Website Updates",
        support: "Technical Support",
        design: "Website Design",
      },
      whatsappBtn: "WhatsApp Developer",
      emailBtn: "Email Developer",
      closeBtn: "Close",
      whatsappMessage: "Hello Khairul Amin,\n\nI found your contact through the kedaibesiburuk website. I’m interested in learning more about your website development and design services.\n\nI would like to discuss my requirements, available options, and pricing. Please let me know when would be a convenient time to discuss this.\n\nThank you.",
    },
    mobileBar: {
      home: "Home",
      sell: "Sell",
      pickup: "Pickup",
      whatsapp: "WhatsApp",
      call: "Call",
      map: "Map",
    },
    floatingWhatsApp: {
      tooltip: "Chat on WhatsApp",
      ariaLabel: "Chat on WhatsApp",
    },
    privacyPolicy: {
      title: "Privacy Policy",
      lastUpdated: "Last updated:",
      intro: "At kedaibesiburuk, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.",
      sec1Title: "1. Information We Collect",
      sec1Desc: "We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, when participating in activities on the website, or otherwise contacting us.",
      sec1Personal: "Personal Information Provided by You: We collect names, phone numbers, email addresses, contact preferences, and other relevant contact details.",
      sec1Scrap: "Scrap Details: Information regarding the materials you wish to sell or have collected, including item types, quantities, and pickup location address.",
      sec2Title: "2. How We Use Your Information",
      sec2Desc: "We use personal information collected via our website for a variety of legitimate business purposes, including:",
      sec2List: [
        "To facilitate scrap collection and payment processing.",
        "To respond to user inquiries and offer fast customer support.",
        "To schedule convenient pickup dates and times with our logistics drivers.",
        "To fulfill and coordinate your recycling requests.",
      ],
      sec3Title: "3. WhatsApp Communication",
      sec3Desc: "Our website utilizes WhatsApp as a primary means of communication for requests and inquiries. When you submit a form, your data is formatted into a pre-filled message and opened via the WhatsApp application on your device.",
      secNoLoginTitle: "4. No User Accounts, Logins, or Credential Collection",
      secNoLoginDesc: "Kedai Besi Buruk does NOT operate any user login, account registration, password authentication, or credential collection systems. We will never ask you for passwords, PINs, or banking login credentials. All pickup requests and inquiries are conducted directly via telephone and WhatsApp.",
      sec4Title: "5. Contact Us",
      sec4Desc: "If you have questions or comments about this policy, you may contact us using the contact details provided on our Contact page.",
    },
    termsConditions: {
      title: "Terms & Conditions",
      lastUpdated: "Last updated:",
      sec1Title: "1. Agreement to Terms",
      sec1Desc: "These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity, and kedaibesiburuk concerning your access to and use of our collection services.",
      sec2Title: "2. Services and Pricing",
      sec2Desc: "We provide scrap collection and recycling services. Regarding our pricing and collection terms:",
      sec2List: [
        "Prices displayed on the website are indicative and subject to change according to real-time market conditions.",
        "Final pricing is determined upon physical inspection, weighing, and quality assessment of the scrap materials at the time of collection.",
        "We reserve the right to refuse collection of hazardous, contaminated, or non-recyclable materials not agreed upon prior to pickup.",
      ],
      sec3Title: "3. Collection Process",
      sec3Desc: "By requesting a pickup, you confirm that the materials belong to you or you have the legal right to dispose of them. You agree to provide a safe and accessible environment for our collection personnel.",
      sec4Title: "4. Contact & Communication",
      sec4Desc: "By using our service and contacting us via WhatsApp or phone, you consent to receive communications from us regarding your collection request, pricing updates, and pickup schedules.",
      sec5Title: "5. Modifications",
      sec5Desc: "We reserve the right to modify these terms and conditions at any time. Continued use of our website or services confirms your acceptance of any revisions.",
    },
    whatsappMessages: {
      general: "Hello, I would like to know more about your scrap collection service.",
      sellInquiry: "Hello, I have scrap to sell. Please let me know today's prices.",
      pickupInquiry: "Hello, I would like to request a scrap pickup.",
      priceInquiry: "Hello, can you please tell me today's scrap prices?",
      otherInquiry: "Hello, I have some other type of scrap to sell. Can you help?",
      sellForm: (data) =>
`Hello kedaibesiburuk,

I would like to sell my scrap.

Name: ${data.name}
Phone: ${data.phone}
WhatsApp: ${data.whatsapp || data.phone}
Scrap Type: ${data.scrapName}
Quantity: ${data.quantity} ${data.unit}
Pickup Address: ${data.address}${data.city ? `, ${data.city}` : ''}
${data.notes ? `Additional Notes: ${data.notes}\n` : ''}
Please contact me regarding pickup and price.`,
      pickupForm: (data) =>
`Hello kedaibesiburuk,

I would like to request a scrap pickup.

Name: ${data.name}
Phone: ${data.phone}
WhatsApp: ${data.whatsapp || data.phone}
Scrap Type: ${data.scrapName}
Quantity: ${data.quantity} ${data.unit}
Pickup Address: ${data.address}${data.city ? `, ${data.city}` : ''}
${data.preferredDate ? `Preferred Date: ${data.preferredDate}\n` : ''}${data.preferredTime ? `Preferred Time: ${data.preferredTime}\n` : ''}${data.notes ? `Additional Notes: ${data.notes}\n` : ''}
Please confirm the pickup schedule.`,
      quickRequestMessage: (data) => {
        let msg = `Hello kedaibesiburuk!\n\nMy name is ${data.name}. I have some recyclable materials to sell.\n\n♻️ Materials: ${data.materials}\n⚖️ Approx. Weight: ${data.weight} ${data.unit}\n📍 From: ${data.location}`;
        if (data.notes && data.notes.trim()) {
          msg += `\n📝 Note: ${data.notes.trim()}`;
        }
        if (data.photoCount && data.photoCount > 0) {
          msg += `\n📷 Photos: ${data.photoCount} photo${data.photoCount > 1 ? 's' : ''} ready to share on WhatsApp`;
        }
        msg += `\n\nI would like to know the current price and arrange a pickup if available.\n\nThank you!`;
        return msg;
      },
    },
  },
  ms: {
    brand: {
      name: "Kedai Besi Buruk",
      tagline: "Tukarkan Barangan Lusuh Anda Kepada Wang.",
      secondaryTagline: "Kami Kutip. Kami Kitar Semula. Kami Membawa Perubahan.",
    },
    nav: {
      home: "Laman Utama",
      whatWeCollect: "Apa Yang Kami Kutip",
      howItWorks: "Cara Ia Berfungsi",
      prices: "Harga Barangan",
      about: "Tentang Kami",
      contact: "Hubungi Kami",
      requestPickup: "Minta Kutipan",
      sellScrap: "Jual Barangan Lusuh",
      openMainMenu: "Buka menu utama",
      closeMenu: "Tutup menu",
    },
    hero: {
      titlePart1: "Kedai Besi Buruk –",
      titleHighlight: "Kutipan & Kitar Semula",
      description: "Kami mengutip barangan lusuh dan bahan kitar semula dari rumah, kedai, perniagaan dan industri. Kami memberikan bayaran lebih tinggi untuk barangan lusuh yang layak. Hubungi kami hari ini untuk urusan kutipan yang mudah dan pantas.",
      requestPickupBtn: "Minta Kutipan",
      sellScrapBtn: "Jual Barangan Lusuh",
      whatsappBtn: "WhatsApp Kami",
      heroAlt: "Lori dan pasukan kutipan barangan lusuh Kedai Besi Buruk",
    },
    trustBar: {
      easyPickupTitle: "Kutipan Mudah",
      easyPickupDesc: "Kami datang terus ke lokasi anda.",
      fairPricingTitle: "Bayaran Lebih Tinggi & Telus",
      fairPricingDesc: "Kami memberikan bayaran lebih tinggi untuk barangan lusuh yang layak berdasarkan kualiti dan kuantiti.",
      recyclingTitle: "Kitar Semula Bertanggungjawab",
      recyclingDesc: "Kami bantu bahan kitar semula mendapat peluang kehidupan kedua.",
      trustedTitle: "Perkhidmatan Dipercayai",
      trustedDesc: "Kutipan profesional, selamat dan boleh dipercayai.",
    },
    services: {
      heading: "Apa Yang Kami Kutip",
      subheading: "Kami mengutip 23 kategori barangan lusuh kitar semula, bahan industri dan peralatan. Pilih kategori anda di bawah.",
      searchPlaceholder: "Cari bahan barang lusuh...",
      filterAll: "Semua Kategori",
      filterGroups: {
        all: "Semua (23)",
        metals: "Logam",
        electricalHvac: "Elektrik & HVAC",
        electronicsIt: "Elektronik & IT",
        machineryStructural: "Jentera & Struktur",
        containersGeneral: "Bekas & Umum",
      },
      sellActionPrefix: "Jual",
      noResults: "Tiada bahan barang lusuh ditemui yang sepadan dengan carian anda.",
      resetSearch: "Padam carian dan lihat semua",
      categoryCount: (count: number) => `${count} kategori tersedia`,
      otherTitle: "Ada barangan lusuh kitar semula lain?",
      otherDesc: "Jika anda mempunyai barangan yang tidak tersenarai, kuantiti besar komersial atau komponen loji industri, hubungi kami di WhatsApp.",
      contactBtn: "Hubungi Kami di WhatsApp",
    },
    howItWorks: {
      heading: "Cara Ia Berfungsi",
      subheading: "Proses mudah empat langkah untuk menukar barangan lusuh anda menjadi wang tunai bernilai.",
      stepPrefix: "Langkah",
      steps: {
        step1: {
          title: "Hubungi Kami",
          desc: "Pelanggan menghubungi kedaibesiburuk melalui laman web, WhatsApp, atau panggilan telefon.",
        },
        step2: {
          title: "Beritahu Kami Tentang Barangan Anda",
          desc: "Pelanggan berikan jenis barangan lusuh, anggaran kuantiti, lokasi, dan gambar sekiranya ada.",
        },
        step3: {
          title: "Kami Datang Kutip",
          desc: "Pasukan kutipan kami mengunjungi lokasi anda mengikut waktu yang telah dipersetujui bersama.",
        },
        step4: {
          title: "Terima Bayaran",
          desc: "Barangan lusuh ditimbang di hadapan anda dan anda menerima bayaran mengikut harga yang dipersetujui.",
        },
      },
      disclaimerPrefix: "Penafian:",
      disclaimerText: "Harga akhir mungkin bergantung pada jenis bahan, kualiti, timbangan berat sebenar dan keadaan pasaran semasa.",
      startNowBtn: "Mula Sekarang - Minta Kutipan",
    },
    prices: {
      heading: "Harga Barangan Lusuh",
      subheading: "Kami menawarkan harga yang kompetitif dan telus untuk bahan kitar semula anda.",
      colMaterial: "Bahan",
      colPrice: "Harga",
      colAction: "Tindakan",
      contactUs: "Hubungi Kami",
      sellAction: "Jual",
      disclaimer: "Harga mungkin berbeza bergantung pada kualiti bahan, kuantiti dan keadaan pasaran semasa. Hubungi kami untuk harga terkini hari ini.",
      materials: {
        aluminium: "Aluminium",
        copperBrass: "Tembaga & Loyang",
        ironSteel: "Besi & Keluli",
        cablesWiring: "Kabel & Pendawaian",
        motorsPower: "Motor & Penjana Kuasa",
        electronicsIt: "Elektronik & IT",
        cansContainers: "Tin & Bekas Logam",
      },
      units: {
        kg: "kg",
        piece: "biji / unit",
        ton: "tan",
        bags: "guni / beg",
        other: "lain-lain",
      },
    },
    environmental: {
      heading: "Beri Barangan Lusuh Peluang Kedua",
      description: "Kitar semula membantu mengurangkan sisa buangan, memelihara sumber alam semula jadi dan mewujudkan persekitaran yang lebih bersih. Dengan menjual bahan kitar semula berbanding membuangnya, anda menyokong masa depan yang lebih lestari.",
      benefits: [
        "Kurangkan sisa buangan ke tapak pelupusan",
        "Jimatkan sumber semula jadi bumi",
        "Kurangkan pencemaran alam sekitar",
        "Sokong ekosistem kitar semula",
        "Kekalkan kawasan perumahan dan bandar lebih bersih",
      ],
      imageAlt: "Persekitaran bersih dan kitar semula lestari",
    },
    reviews: {
      heading: "Ulasan Pelanggan",
      subheading: "Lihat apa kata pelanggan kami tentang perkhidmatan kutipan kedaibesiburuk.",
      sampleNotice: "Ulasan sampel semasa fasa pembangunan.",
      items: [
        {
          name: "Encik Ahmed S.",
          type: "Pemilik Kedai",
          review: "Perkhidmatan yang sangat mudah dan pantas. Mereka datang kutip barangan lusuh terus dari kedai kami dengan timbangan telus.",
        },
        {
          name: "Puan Sarah M.",
          type: "Isi Rumah",
          review: "Pantas dan boleh dipercayai. Menolong mengosongkan peralatan elektrik lama di rumah saya dengan segera pada harga berpatutan.",
        },
        {
          name: "Tech Solutions Sdn. Bhd.",
          type: "Pejabat",
          review: "Pasukan yang sangat profesional. Menguruskan sisa barangan elektronik pejabat kami dengan teratur dan cekap.",
        },
      ],
    },
    faq: {
      heading: "Soalan Lazim (FAQ)",
      subheading: "Ketahui jawapan kepada soalan biasa mengenai perkhidmatan kutipan dan kitar semula kami.",
      items: [
        {
          q: "Apakah jenis barangan lusuh yang anda kutip?",
          a: "Kami mengutip 23 kategori barangan lusuh kitar semula termasuk aluminium, tembaga & loyang, besi & keluli, logam industri, pendawaian elektrik, unit HVAC, sisa IT elektronik, jentera loji, dan banyak lagi.",
        },
        {
          q: "Adakah anda menyediakan perkhidmatan kutipan terus ke lokasi?",
          a: "Ya. Pelanggan boleh meminta kutipan ke rumah, kedai, pejabat atau kilang melalui laman web, telefon atau WhatsApp.",
        },
        {
          q: "Bagaimanakah harga barangan ditentukan?",
          a: "Harga ditentukan mengikut jenis bahan, kualiti, kuantiti, timbangan sebenar dan keadaan harga pasaran semasa.",
        },
        {
          q: "Bolehkah saya menghantar gambar barangan lusuh saya?",
          a: "Ya, sudah tentu. Anda boleh menghantar gambar melalui borang permintaan atau terus menghantarnya di sembang WhatsApp kami.",
        },
        {
          q: "Adakah anda membuat kutipan daripada pihak perniagaan dan kilang?",
          a: "Ya. Perkhidmatan kutipan khas disediakan untuk kedai, pejabat, kilang perindustrian dan tapak komersial.",
        },
        {
          q: "Adakah saya perlu mendaftar akaun?",
          a: "Tidak perlu. Anda boleh membuat permintaan kutipan atau jualan sebagai tetamu dengan pantas tanpa perlu mendaftar atau log masuk.",
        },
      ],
    },
    ctaSection: {
      title: "Bersedia untuk menukar barangan lusuh anda kepada wang?",
      description: "Jadualkan kutipan hari ini atau hubungi kami di WhatsApp untuk maklum balas segera.",
      pickupBtn: "Minta Kutipan",
      whatsappBtn: "WhatsApp Kami",
    },
    about: {
      heading: "Tentang kedaibesiburuk",
      description: "kedaibesiburuk menyediakan perkhidmatan kutipan dan kitar semula barangan lusuh yang mudah dan pantas untuk isi rumah, kedai, pejabat, perniagaan dan sektor perindustrian. Matlamat kami adalah memudahkan urusan pelupusan bahan kitar semula sambil memastikan ia kekal dalam rantaian kelestarian alam.",
      values: {
        professional: {
          title: "Kutipan Profesional",
          desc: "Perkhidmatan kutipan dipercayai oleh kakitangan terlatih yang bersedia mengendalikan bahan anda dengan selamat dan teratur.",
        },
        fair: {
          title: "Harga Telus & Berpatutan",
          desc: "Komunikasi harga yang jelas dan adil. Kami berpegang kepada kadar pasaran telus berpandukan timbangan tepat.",
        },
        responsible: {
          title: "Kitar Semula Bertanggungjawab",
          desc: "Membantu mengurangkan sisa buangan dengan memastikan bahan yang dikumpul disalurkan ke pusat kitar semula yang sah.",
        },
        customer: {
          title: "Utamakan Pelanggan",
          desc: "Menjadikan jualan barangan lusuh mudah dan menyenangkan. Urusan kutipan diselaraskan mengikut keselesaan masa anda.",
        },
      },
    },
    contact: {
      heading: "Hubungi Kami",
      subheading: "Ada pertanyaan atau bersedia untuk mengatur kutipan? Kami sedia membantu anda.",
      cardHeader: "HUBUNGI KAMI",
      infoTitle: "Maklumat Hubungan",
      phoneTitle: "Telefon & WhatsApp",
      phoneLabel: "Telefon",
      phoneDesc: "Hubungi atau hantar mesej kepada kami pada bila-bila masa 24/7.",
      emailTitle: "E-mel",
      emailLabel: "E-mel",
      emailDesc: "Hantarkan emel kepada kami untuk sebarang pertanyaan am.",
      locationTitle: "Lokasi",
      locationLabel: "Lokasi",
      locationDesc: "Pangkalan pengumpulan kami di Ampang.",
      hoursTitle: "Waktu Operasi",
      hoursWeekdays: "Buka 24/7",
      hoursSunday: "",
      getDirections: "Lihat di Google Maps →",
      whatsappLabel: "WhatsApp",
      callBtn: "Hubungi Kami",
      whatsappBtn: "WhatsApp Kami",
      emailBtn: "E-mel Kami",
      mapBtn: "Lihat di Google Maps",
    },
    forms: {
      sellTitle: "Ada Barangan Lusuh Untuk Dijual?",
      sellSubtitle: "Jangan biarkan bahan yang tidak digunakan memenuhi ruang anda. Jual barangan kitar semula anda dan tukarkannya kepada wang tunai bernilai.",
      pickupTitle: "Minta Kutipan Barangan",
      pickupSubtitle: "Jadualkan masa yang mudah untuk pasukan kami datang mengutip bahan kitar semula anda.",
      customerInfo: "Maklumat Pelanggan",
      fullName: "Nama Penuh *",
      fullNamePlaceholder: "cth. Muhammad Ali",
      phoneNumber: "Nombor Telefon *",
      phonePlaceholder: "+601111545835",
      whatsappNumber: "Nombor WhatsApp (Pilihan)",
      whatsappPlaceholder: "Jika berbeza daripada nombor telefon",
      scrapDetails: "Maklumat Barangan Lusuh",
      scrapType: "Jenis Barangan Lusuh *",
      selectScrapType: "Pilih jenis barangan",
      householdScrapOption: "Barangan Lusuh Rumah",
      industrialScrapOption: "Barangan Lusuh Industri",
      mixedScrapOption: "Campuran Barangan Lusuh",
      otherOption: "Lain-lain",
      estimatedQuantity: "Anggaran Kuantiti *",
      quantityPlaceholder: "cth. 50",
      unit: "Unit",
      location: "Lokasi",
      pickupAddress: "Alamat Kutipan *",
      addressPlaceholder: "Alamat jalan, bangunan atau rumah",
      cityArea: "Kawasan / Bandar",
      cityAreaPlaceholder: "Kawasan atau bandar anda",
      preferredDate: "Tarikh Pilihan",
      preferredTime: "Masa Pilihan",
      anyTime: "Bila-bila masa",
      morningTime: "Pagi (8:00 PG – 12:00 TGH)",
      afternoonTime: "Tengah Hari (12:00 TGH – 4:00 PTG)",
      eveningTime: "Petang (4:00 PTG – 6:00 PTG)",
      additionalInfo: "Maklumat Tambahan",
      additionalNotes: "Nota Tambahan",
      sellNotesPlaceholder: "Sebarang arahan khas mengenai barang atau lokasi kutipan?",
      pickupNotesPlaceholder: "Sebarang panduan jalan atau arahan khusus untuk pasukan kami?",
      photoNote: "Nota: Anda boleh melampirkan foto barangan lusuh terus di dalam sembang WhatsApp selepas menghantar borang ini.",
      submitSellBtn: "Hantar Permintaan Jual",
      submitPickupBtn: "Minta Kutipan Sekarang",
      successTitle: "Permintaan Berjaya Dihantar!",
      successSellMsg: "Terima kasih. Kami telah menerima permintaan jualan barangan lusuh anda. Jika WhatsApp tidak dibuka secara automatik, sila klik butang di bawah. Pasukan kami akan menghubungi anda sebentar lagi.",
      successPickupMsg: "Terima kasih. Kami telah menerima permintaan kutipan anda. Jika WhatsApp tidak dibuka secara automatik, sila klik butang di bawah. Pasukan kami akan menghubungi anda tidak lama lagi untuk mengesahkan jadual.",
      submitAnotherBtn: "Hantar permintaan lain",
      errorTitle: "Ada masalah berlaku",
      errorMsg: "Sila semak maklumat anda dan pastikan semua ruangan wajib telah diisi, atau hubungi kami terus melalui WhatsApp.",
      validationName: "Sila masukkan nama penuh anda.",
      validationPhone: "Sila masukkan nombor telefon yang sah.",
      validationScrapType: "Sila pilih jenis barangan lusuh.",
      validationQuantity: "Sila masukkan anggaran kuantiti.",
      validationAddress: "Sila masukkan alamat kutipan.",
    },
    quickRequest: {
      title: "Permintaan Barang Lusuh Pantas",
      subtitle: "Beritahu kami apa yang anda ada. Kami akan menghubungi anda melalui WhatsApp.",
      reassuranceNote: "Jangan risau tentang harga tepat atau masa pengambilan. Kami akan berbincang dengan anda melalui WhatsApp.",
      nameLabel: "Nama Anda",
      namePlaceholder: "Masukkan nama anda",
      materialsLabel: "Apakah Barang Lusuh Anda?",
      materialsSubtitle: "Pilih semua yang berkaitan",
      materials: {
        'aluminium': 'Aluminium',
        'copper-brass': 'Tembaga & Loyang',
        'iron-steel': 'Besi & Keluli',
        'metal-piping': 'Logam & Perpaipan',
        'metal-fabrication': 'Logam & Fabrikasi',
        'metal-structural': 'Logam & Struktur',
        'mixed-metal': 'Campuran Logam',
        'motors-power': 'Motor & Penjana Kuasa',
        'cables-wiring': 'Kabel & Pendawaian',
        'hvac-cooling': 'HVAC & Penyejukan',
        'hvac-heavy-parts': 'HVAC & Bahagian Berat',
        'electrical-industrial': 'Elektrik & Industri',
        'electronics-it': 'Elektronik & IT',
        'office-electronics': 'Elektronik Pejabat',
        'appliances-motors': 'Perkakas & Motor',
        'containers-metal': 'Bekas & Logam',
        'machinery-plant': 'Jentera & Loji',
        'structural-furniture': 'Struktur & Perabot',
        'electrical-scrap': 'Sisa Elektrik',
        'electronic-waste': 'E-Sisa (Sisa Elektronik)',
        'general-scrap': 'Barangan Lusuh Umum',
        'glass-containers': 'Kaca & Bekas',
        'cans-containers': 'Tin & Bekas Logam',
      },
      weightLabel: "Anggaran Berat",
      weightPlaceholder: "cth. 50",
      units: {
        kg: "kg",
        ton: "tan",
        piece: "keping",
        bag: "beg",
        other: "Lain-lain",
      },
      locationLabel: "Dari Mana?",
      locationPlaceholder: "Masukkan kawasan atau bandar anda",
      locationExample: "cth. Kuala Lumpur, Petaling Jaya",
      photoLabel: "Tambah Foto (Pilihan)",
      addPhotoBtn: "+ Tambah Foto",
      photosAttached: (count: number) => `${count} foto dilampirkan`,
      noPhotosAttached: "Tiada foto dilampirkan",
      notesLabel: "Ada apa-apa lagi?",
      notesPlaceholder: "Tambah nota (pilihan)",
      continueBtn: "Teruskan ke Pratonton",
      validation: {
        name: "Sila masukkan nama anda.",
        materials: "Sila pilih sekurang-kurangnya satu jenis barang lusuh.",
        weight: "Sila masukkan anggaran berat.",
        location: "Sila masukkan kawasan atau bandar anda.",
      },
      preview: {
        title: "Semak Permintaan Anda",
        subtitle: "Sila semak butiran anda sebelum menghantar mesej ke WhatsApp.",
        nameLabel: "Nama",
        scrapLabel: "Barangan Lusuh",
        weightLabel: "Anggaran Berat",
        fromLabel: "Dari",
        photosLabel: "Foto",
        noteLabel: "Nota",
        messagePreviewTitle: "Pratonton Mesej WhatsApp",
        sendWhatsAppBtn: "Hantar ke WhatsApp",
        editBtn: "Edit Permintaan",
        sentTitle: "Sedia di WhatsApp!",
        sentMessage: "Kami telah menyediakan mesej anda di WhatsApp. Jika WhatsApp tidak dibuka secara automatik, sila klik butang di bawah.",
        openWhatsAppAgainBtn: "Buka WhatsApp Sekarang",
        submitAnotherBtn: "Hantar Permintaan Lain",
      },
    },
    quickContactModal: {
      title: "Mesej Pantas WhatsApp",
      subtitle: "Pratonton dan hantar mesej anda dengan segera ke WhatsApp kami",
      closeBtn: "Tutup",
      previewTitle: "Pratonton Mesej WhatsApp",
      verifiedBusiness: "Perniagaan Disahkan",
      onlineNow: "Biasanya membalas dalam beberapa minit",
      tabs: {
        pickup: "Request Pickup",
        sell: "Sell Your Scrap",
        whatsapp: "WhatsApp Us",
      },
      messages: {
        pickup: "Salam kedaibesiburuk, saya ingin menjadualkan kutipan barangan lusuh di lokasi saya. Sila maklumkan masa kutipan yang sesuai.",
        sell: "Salam kedaibesiburuk, saya ada barang lusuh kitar semula untuk dijual. Bolehkah berikan sebut harga dan butiran kutipan?",
        whatsapp: "Salam kedaibesiburuk, saya ingin berhubung secara terus mengenai perkhidmatan kitar semula anda.",
      },
      customNotePlaceholder: "Tambah nota pilihan (cth. jenis barangan, lokasi)...",
      sendWhatsAppBtn: "Hantar ke WhatsApp",
      orFillFormBtn: "Guna Borang Pantas 30s",
      options: {
        sell: {
          title: "Sell Your Scrap (Jual Barang)",
          desc: "Isi borang pantas 30 saat untuk dapatkan anggaran",
        },
        pickup: {
          title: "Request Pickup (Tempah Kutipan)",
          desc: "Jadualkan kutipan terus dari lokasi anda",
        },
        prices: {
          title: "Tanya Harga",
          desc: "Hubungi pasukan kami untuk bertanyakan kadar harga hari ini",
        },
        general: {
          title: "WhatsApp Us (WhatsApp Kami)",
          desc: "Pertanyaan terus mengenai servis kitar semula kami",
        },
      },
    },
    footer: {
      quickLinks: "Pautan Pantas",
      services: "Perkhidmatan",
      contactInfo: "Maklumat Hubungan",
      allRightsReserved: "Hak cipta terpelihara.",
      privacyPolicy: "Dasar Privasi",
      termsConditions: "Terma & Syarat",
    },
    developerSection: {
      title: "Pembangun Laman Web",
      subtitle: "Perlukan laman web, kemas kini laman web atau sokongan teknikal?",
      contactBtn: "Hubungi Pembangun Laman Web",
      creditPrefix: "Laman web direka & dibangunkan oleh",
      modalTitle: "Pembangun Laman Web",
      modalSubtitle: "Pembangunan laman web profesional, kemas kini moden dan sokongan teknikal.",
      servicesTitle: "Perkhidmatan Yang Ditawarkan",
      services: {
        development: "Pembangunan Laman Web",
        updates: "Kemas Kini Laman Web",
        support: "Sokongan Teknikal",
        design: "Reka Bentuk Laman Web",
      },
      whatsappBtn: "WhatsApp Pembangun",
      emailBtn: "E-mel Pembangun",
      closeBtn: "Tutup",
      whatsappMessage: "Salam Khairul Amin,\n\nSaya menemui maklumat hubungan anda melalui laman web kedaibesiburuk. Saya berminat untuk mengetahui lebih lanjut tentang perkhidmatan pembangunan dan reka bentuk laman web anda.\n\nSaya ingin berbincang mengenai keperluan saya, pilihan yang tersedia dan harga. Sila maklumkan masa yang sesuai untuk kita berbincang.\n\nTerima kasih.",
    },
    mobileBar: {
      home: "Utama",
      sell: "Jual",
      pickup: "Kutipan",
      whatsapp: "WhatsApp",
      call: "Telefon",
      map: "Peta",
    },
    floatingWhatsApp: {
      tooltip: "Sembang di WhatsApp",
      ariaLabel: "Sembang di WhatsApp",
    },
    privacyPolicy: {
      title: "Dasar Privasi",
      lastUpdated: "Kemas kini terakhir:",
      intro: "Di kedaibesiburuk, kami memandang serius privasi anda. Dasar Privasi ini menerangkan bagaimana kami mengumpul, menggunakan, mendedahkan dan melindungi maklumat anda apabila anda melayari laman web kami atau menggunakan perkhidmatan kutipan kami.",
      sec1Title: "1. Maklumat Yang Kami Kumpul",
      sec1Desc: "Kami mengumpul maklumat peribadi yang anda berikan secara sukarela apabila menghubungi kami, meminta perkhidmatan kutipan atau menyatakan minat untuk menjual barangan lusuh.",
      sec1Personal: "Maklumat Peribadi Yang Diberikan: Kami mengumpul nama, nombor telefon, nombor WhatsApp, alamat emel dan maklumat perhubungan lain yang berkaitan.",
      sec1Scrap: "Maklumat Barangan Lusuh: Maklumat berkenaan bahan yang ingin anda jual atau lupuskan, termasuk jenis barangan, anggaran berat/kuantiti dan alamat lokasi kutipan.",
      sec2Title: "2. Bagaimana Kami Menggunakan Maklumat Anda",
      sec2Desc: "Kami menggunakan maklumat peribadi yang dikumpul untuk tujuan perniagaan yang sah, termasuk:",
      sec2List: [
        "Memudahkan urusan kutipan barangan lusuh dan pemprosesan pembayaran.",
        "Menjawab pertanyaan dan memberikan sokongan pelanggan yang pantas.",
        "Menjadualkan tarikh serta waktu kutipan yang bersesuaian dengan pemandu logistik kami.",
        "Menguruskan rekod dan mematuhi standard pengurusan kitar semula yang bertanggungjawab.",
      ],
      sec3Title: "3. Komunikasi Melalui WhatsApp",
      sec3Desc: "Laman web kami menggunakan aplikasi WhatsApp sebagai saluran komunikasi utama untuk permintaan dan pertanyaan. Apabila anda menghantar borang, maklumat anda diformatkan menjadi pesanan tersedia dan dibuka terus melalui aplikasi WhatsApp pada peranti anda.",
      secNoLoginTitle: "4. Tiada Akaun Pengguna, Log Masuk atau Pengumpulan Kata Laluan",
      secNoLoginDesc: "Kedai Besi Buruk TIDAK mempunyai sebarang sistem log masuk, pendaftaran akaun, pengesahan kata laluan atau pengumpulan kelayakan pengguna. Kami tidak akan sekali-kali meminta kata laluan, nombor PIN, atau maklumat log masuk perbankan anda. Semua urusan sebut harga dan penetapan jadual kutipan dijalankan terus melalui panggilan telefon dan WhatsApp rasmi kami.",
      sec4Title: "5. Hubungi Kami",
      sec4Desc: "Sekiranya anda mempunyai sebarang soalan atau kemusykilan mengenai dasar ini, anda boleh menghubungi kami melalui butiran yang tertera di halaman Hubungi Kami.",
    },
    termsConditions: {
      title: "Terma & Syarat",
      lastUpdated: "Kemas kini terakhir:",
      sec1Title: "1. Perjanjian Terma",
      sec1Desc: "Terma dan Syarat ini membentuk perjanjian yang mengikat secara sah antara anda dan kedaibesiburuk berhubung akses serta penggunaan perkhidmatan kutipan dan kitar semula kami.",
      sec2Title: "2. Perkhidmatan dan Penetapan Harga",
      sec2Desc: "Kami menyediakan perkhidmatan kutipan dan kitar semula barangan lusuh. Berkenaan harga dan syarat kutipan:",
      sec2List: [
        "Harga yang dipaparkan di laman web adalah anggaran dan tertakluk kepada perubahan mengikut harga pasaran semasa.",
        "Penetapan harga akhir adalah berdasarkan pemeriksaan fizikal, timbangan berat sebenar dan penilaian kualiti bahan semasa kutipan dijalankan.",
        "Kami berhak menolak kutipan bahan berbahaya, tercemar atau bahan yang tidak boleh dikitar semula yang tidak dipersetujui lebih awal.",
      ],
      sec3Title: "3. Proses Kutipan",
      sec3Desc: "Dengan meminta kutipan, anda mengesahkan bahawa barangan tersebut adalah kepunyaan anda atau anda mempunyai hak yang sah untuk melupuskannya. Anda bersetuju menyediakan persekitaran yang selamat untuk kakitangan kutipan kami.",
      sec4Title: "4. Hubungan & Komunikasi",
      sec4Desc: "Dengan menggunakan perkhidmatan kami dan menghubungi kami melalui WhatsApp atau panggilan telefon, anda bersetuju untuk menerima komunikasi berkaitan permintaan kutipan, kemas kini harga dan jadual perkhidmatan.",
      sec5Title: "5. Pindaan Terma",
      sec5Desc: "Kami berhak mengubah suai terma dan syarat ini pada bila-bila masa. Penggunaan berterusan laman web atau perkhidmatan kami selepas sebarang perubahan menandakan penerimaan anda terhadap pindaan tersebut.",
    },
    whatsappMessages: {
      general: "Salam sejahtera, saya ingin mengetahui lebih lanjut mengenai perkhidmatan kutipan barangan lusuh kedaibesiburuk.",
      sellInquiry: "Salam sejahtera, saya ada barangan lusuh untuk dijual. Sila maklumkan harga hari ini dan pilihan kutipan.",
      pickupInquiry: "Salam sejahtera, saya ingin meminta kutipan barangan lusuh.",
      priceInquiry: "Salam sejahtera, bolehkah anda beritahu saya harga barangan lusuh terkini hari ini?",
      otherInquiry: "Salam sejahtera, saya mempunyai jenis barangan lusuh lain untuk dijual. Bolehkah anda membantu?",
      sellForm: (data) =>
`Salam sejahtera kedaibesiburuk,

Saya ingin menjual barangan lusuh saya.

Nama: ${data.name}
Nombor Telefon: ${data.phone}
WhatsApp: ${data.whatsapp || data.phone}
Jenis Barangan: ${data.scrapName}
Anggaran Kuantiti: ${data.quantity} ${data.unit}
Alamat Kutipan: ${data.address}${data.city ? `, ${data.city}` : ''}
${data.notes ? `Nota Tambahan: ${data.notes}\n` : ''}
Sila hubungi saya berkenaan waktu kutipan dan harga.`,
      pickupForm: (data) =>
`Salam sejahtera kedaibesiburuk,

Saya ingin meminta kutipan barangan lusuh.

Nama: ${data.name}
Nombor Telefon: ${data.phone}
WhatsApp: ${data.whatsapp || data.phone}
Jenis Barangan: ${data.scrapName}
Anggaran Kuantiti: ${data.quantity} ${data.unit}
Alamat Kutipan: ${data.address}${data.city ? `, ${data.city}` : ''}
${data.preferredDate ? `Tarikh Pilihan: ${data.preferredDate}\n` : ''}${data.preferredTime ? `Masa Pilihan: ${data.preferredTime}\n` : ''}${data.notes ? `Nota Tambahan: ${data.notes}\n` : ''}
Sila sahkan jadual kutipan ini.`,
      quickRequestMessage: (data) => {
        let msg = `Salam kedaibesiburuk!\n\nNama saya ${data.name}. Saya mempunyai beberapa barangan kitar semula untuk dijual.\n\n♻️ Bahan: ${data.materials}\n⚖️ Anggaran Berat: ${data.weight} ${data.unit}\n📍 Dari: ${data.location}`;
        if (data.notes && data.notes.trim()) {
          msg += `\n📝 Nota: ${data.notes.trim()}`;
        }
        if (data.photoCount && data.photoCount > 0) {
          msg += `\n📷 Foto: ${data.photoCount} foto sedia dikongsi melalui WhatsApp`;
        }
        msg += `\n\nSaya ingin mengetahui harga semasa dan mengatur pengambilan jika tersedia.\n\nTerima kasih!`;
        return msg;
      },
    },
  },
};
