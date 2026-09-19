import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getWhatsAppLink } from '../utils';
import { SCRAP_CATEGORIES, ScrapCategory } from '../data/scrapCategories';
import { 
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
  Camera, 
  X, 
  Check, 
  ArrowLeft, 
  Send, 
  Info,
  RotateCcw,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Search,
  LucideIcon
} from 'lucide-react';

export type WeightUnit = 'kg' | 'ton' | 'piece' | 'bag' | 'other';

interface PhotoAttachment {
  id: string;
  dataUrl: string;
  name: string;
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

export default function QuickScrapForm() {
  const { t, language } = useLanguage();
  const [searchParams] = useSearchParams();

  // Form states
  const [name, setName] = useState('');
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [materialFilter, setMaterialFilter] = useState('');
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState<WeightUnit>('kg');
  const [location, setLocation] = useState('');
  const [photos, setPhotos] = useState<PhotoAttachment[]>([]);
  const [notes, setNotes] = useState('');

  // UI Flow states: 'form' | 'preview' | 'sent'
  const [step, setStep] = useState<'form' | 'preview' | 'sent'>('form');

  // Validation state
  const [errors, setErrors] = useState<{
    name?: string;
    materials?: string;
    weight?: string;
    location?: string;
  }>({});

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Initialize from search query if any (e.g. /sell?type=copper-brass or /sell?type=aluminium)
  useEffect(() => {
    const typeParam = searchParams.get('type')?.toLowerCase();
    if (typeParam) {
      const matched = SCRAP_CATEGORIES.find(c => c.id === typeParam);
      if (matched) {
        setSelectedMaterials([matched.id]);
      } else {
        // Fallback checks for legacy or general terms
        if (typeParam === 'metal' || typeParam === 'iron') {
          setSelectedMaterials(['iron-steel']);
        } else if (typeParam === 'copper') {
          setSelectedMaterials(['copper-brass']);
        } else if (typeParam === 'electronics') {
          setSelectedMaterials(['electronics-it']);
        }
      }
    }
  }, [searchParams]);

  const unitsList: { value: WeightUnit; label: string }[] = [
    { value: 'kg', label: t.quickRequest.units.kg },
    { value: 'ton', label: t.quickRequest.units.ton },
    { value: 'piece', label: t.quickRequest.units.piece },
    { value: 'bag', label: t.quickRequest.units.bag },
    { value: 'other', label: t.quickRequest.units.other },
  ];

  const filteredCategories = useMemo(() => {
    const query = materialFilter.trim().toLowerCase();
    if (!query) return SCRAP_CATEGORIES;
    return SCRAP_CATEGORIES.filter((category) => {
      const nameEn = category.name.en.toLowerCase();
      const nameMs = category.name.ms.toLowerCase();
      const descEn = category.description.en.toLowerCase();
      const descMs = category.description.ms.toLowerCase();
      return (
        nameEn.includes(query) ||
        nameMs.includes(query) ||
        descEn.includes(query) ||
        descMs.includes(query)
      );
    });
  }, [materialFilter]);

  const toggleMaterial = (id: string) => {
    setSelectedMaterials(prev => {
      const next = prev.includes(id) 
        ? prev.filter(k => k !== id)
        : [...prev, id];
      if (next.length > 0 && errors.materials) {
        setErrors(e => ({ ...e, materials: undefined }));
      }
      return next;
    });
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const remainingSlots = 3 - photos.length;
    const fileList: File[] = [];
    for (let i = 0; i < files.length && fileList.length < remainingSlots; i++) {
      const f = files.item(i);
      if (f) fileList.push(f);
    }

    fileList.forEach(file => {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setPhotos(prev => {
            if (prev.length >= 3) return prev;
            return [
              ...prev,
              {
                id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                dataUrl: event.target!.result as string,
                name: file.name
              }
            ];
          });
        }
      };
      reader.readAsDataURL(file);
    });

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const removePhoto = (id: string) => {
    setPhotos(prev => prev.filter(p => p.id !== id));
  };

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!name.trim()) {
      newErrors.name = t.quickRequest.validation.name;
    }
    if (selectedMaterials.length === 0) {
      newErrors.materials = t.quickRequest.validation.materials;
    }
    if (!weight.trim()) {
      newErrors.weight = t.quickRequest.validation.weight;
    }
    if (!location.trim()) {
      newErrors.location = t.quickRequest.validation.location;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinueToPreview = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setStep('preview');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Build localized materials string from selected IDs
  const materialsNames = useMemo(() => {
    return selectedMaterials
      .map(id => {
        const cat = SCRAP_CATEGORIES.find(c => c.id === id);
        if (cat) {
          return cat.name[language] || cat.name.en;
        }
        return t.quickRequest.materials[id] || id;
      })
      .join(', ');
  }, [selectedMaterials, language, t.quickRequest.materials]);

  // Get current localized unit label
  const currentUnitLabel = t.quickRequest.units[unit] || unit;

  // Build generated WhatsApp message
  const generatedWhatsAppMessage = t.whatsappMessages.quickRequestMessage({
    name: name.trim(),
    materials: materialsNames,
    weight: weight.trim(),
    unit: currentUnitLabel,
    location: location.trim(),
    notes: notes.trim(),
    photoCount: photos.length,
  });

  const handleSendToWhatsApp = () => {
    const url = getWhatsAppLink(generatedWhatsAppMessage);
    window.open(url, '_blank', 'noopener,noreferrer');
    setStep('sent');
  };

  const handleResetForm = () => {
    setName('');
    setSelectedMaterials([]);
    setMaterialFilter('');
    setWeight('');
    setUnit('kg');
    setLocation('');
    setPhotos([]);
    setNotes('');
    setErrors({});
    setStep('form');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="quick-scrap-request-wrapper" className="w-full max-w-2xl mx-auto px-4 py-6 sm:py-10">
      {/* Header Container */}
      <div className="text-center mb-6 sm:mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          {language === 'ms' ? 'Pantas & Terus ke WhatsApp' : 'Quick & Direct to WhatsApp'}
        </span>
        <h1 
          id="quick-scrap-title"
          className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight"
        >
          {t.quickRequest.title}
        </h1>
        <p 
          id="quick-scrap-subtitle"
          className="mt-2 text-sm sm:text-base text-gray-600 max-w-md mx-auto"
        >
          {t.quickRequest.subtitle}
        </p>
      </div>

      {/* STEP 1: SIMPLE FORM */}
      {step === 'form' && (
        <form 
          id="quick-scrap-form"
          action="#"
          method="POST"
          role="form"
          aria-label="Scrap Metal Request Form"
          onSubmit={handleContinueToPreview} 
          noValidate
          className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 sm:p-8 space-y-6"
        >
          {/* A. NAME */}
          <div id="form-field-name">
            <label 
              htmlFor="customer-name" 
              className="block text-sm font-semibold text-gray-900 mb-1.5"
            >
              {t.quickRequest.nameLabel} <span className="text-rose-500">*</span>
            </label>
            <input
              id="customer-name"
              name="scrap_customer_name"
              type="text"
              autoComplete="name"
              spellCheck="false"
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name) setErrors(err => ({ ...err, name: undefined }));
              }}
              placeholder={t.quickRequest.namePlaceholder}
              className={`w-full px-4 py-3 text-base rounded-xl border transition-all focus:outline-hidden focus:ring-2 ${
                errors.name 
                  ? 'border-rose-300 focus:border-rose-500 focus:ring-rose-200 bg-rose-50/20' 
                  : 'border-gray-300 focus:border-emerald-600 focus:ring-emerald-100 bg-white'
              }`}
            />
            {errors.name && (
              <p className="mt-1.5 text-xs sm:text-sm text-rose-600 flex items-center gap-1 font-medium">
                <Info className="w-3.5 h-3.5 shrink-0" />
                {errors.name}
              </p>
            )}
          </div>

          {/* B. SCRAP MATERIAL (23 Categories Multi-select) */}
          <div id="form-field-materials" className="space-y-3">
            <div className="flex items-baseline justify-between">
              <label className="block text-sm font-semibold text-gray-900">
                {t.quickRequest.materialsLabel} <span className="text-rose-500">*</span>
              </label>
              <span className="text-xs text-gray-500 font-normal">
                {selectedMaterials.length > 0 
                  ? `${selectedMaterials.length} ${language === 'ms' ? 'dipilih' : 'selected'}`
                  : t.quickRequest.materialsSubtitle
                }
              </span>
            </div>

            {/* Quick search input for the 23 materials */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <Search className="h-4 w-4" />
              </div>
              <input
                id="material-filter-search"
                name="scrap_material_filter"
                type="text"
                autoComplete="off"
                spellCheck="false"
                value={materialFilter}
                onChange={(e) => setMaterialFilter(e.target.value)}
                placeholder={language === 'ms' ? 'Cari kategori barang lusuh...' : 'Filter scrap materials...'}
                className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white"
              />
              {materialFilter && (
                <button
                  type="button"
                  onClick={() => setMaterialFilter('')}
                  className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-gray-400 hover:text-gray-600"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            {/* Selected Pills (if any) */}
            {selectedMaterials.length > 0 && (
              <div className="flex flex-wrap items-center gap-1.5 p-2 bg-emerald-50/60 rounded-xl border border-emerald-100">
                {selectedMaterials.map((id) => {
                  const cat = SCRAP_CATEGORIES.find(c => c.id === id);
                  const catName = cat ? (cat.name[language] || cat.name.en) : id;
                  return (
                    <span
                      key={id}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-600 text-white shadow-xs"
                    >
                      <span>{catName}</span>
                      <button
                        type="button"
                        onClick={() => toggleMaterial(id)}
                        className="hover:bg-emerald-700 rounded-full p-0.5"
                        aria-label={`Remove ${catName}`}
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  );
                })}
                <button
                  type="button"
                  onClick={() => setSelectedMaterials([])}
                  className="text-[11px] text-emerald-800 hover:text-emerald-950 font-medium ml-1 underline"
                >
                  {language === 'ms' ? 'Padam semua' : 'Clear all'}
                </button>
              </div>
            )}

            {/* Grid of Categories (23 categories) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-80 overflow-y-auto pr-1">
              {filteredCategories.map((category: ScrapCategory) => {
                const Icon = ICON_MAP[category.iconName] || CircleDot;
                const isSelected = selectedMaterials.includes(category.id);
                const catName = category.name[language] || category.name.en;

                return (
                  <button
                    key={category.id}
                    id={`material-chip-${category.id}`}
                    type="button"
                    onClick={() => toggleMaterial(category.id)}
                    className={`relative p-2.5 rounded-xl border text-left flex items-center gap-2.5 transition-all cursor-pointer select-none ${
                      isSelected
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-900 shadow-xs ring-2 ring-emerald-600'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className={`p-1.5 rounded-lg shrink-0 ${isSelected ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-600'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold leading-tight line-clamp-2 flex-1">
                      {catName}
                    </span>
                    <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      isSelected 
                        ? 'bg-emerald-600 text-white' 
                        : 'border border-gray-300 bg-white'
                    }`}>
                      {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {errors.materials && (
              <p className="mt-2 text-xs sm:text-sm text-rose-600 flex items-center gap-1 font-medium">
                <Info className="w-3.5 h-3.5 shrink-0" />
                {errors.materials}
              </p>
            )}
          </div>

          {/* C. APPROXIMATE WEIGHT */}
          <div id="form-field-weight">
            <label 
              htmlFor="approx-weight" 
              className="block text-sm font-semibold text-gray-900 mb-1.5"
            >
              {t.quickRequest.weightLabel} <span className="text-rose-500">*</span>
            </label>
            <div className="flex gap-2">
              <input
                id="approx-weight"
                name="scrap_estimated_weight"
                type="text"
                autoComplete="off"
                spellCheck="false"
                required
                value={weight}
                onChange={(e) => {
                  setWeight(e.target.value);
                  if (errors.weight) setErrors(err => ({ ...err, weight: undefined }));
                }}
                placeholder={t.quickRequest.weightPlaceholder}
                className={`flex-1 px-4 py-3 text-base rounded-xl border transition-all focus:outline-hidden focus:ring-2 ${
                  errors.weight 
                    ? 'border-rose-300 focus:border-rose-500 focus:ring-rose-200 bg-rose-50/20' 
                    : 'border-gray-300 focus:border-emerald-600 focus:ring-emerald-100 bg-white'
                }`}
              />
              <div className="w-32 sm:w-36 shrink-0">
                <select
                  id="weight-unit-select"
                  name="scrap_weight_unit"
                  value={unit}
                  onChange={(e) => setUnit(e.target.value as WeightUnit)}
                  className="w-full h-full px-3 py-3 text-base rounded-xl border border-gray-300 bg-white font-medium text-gray-800 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 focus:outline-hidden cursor-pointer"
                >
                  {unitsList.map(u => (
                    <option key={u.value} value={u.value}>
                      {u.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {errors.weight && (
              <p className="mt-1.5 text-xs sm:text-sm text-rose-600 flex items-center gap-1 font-medium">
                <Info className="w-3.5 h-3.5 shrink-0" />
                {errors.weight}
              </p>
            )}
          </div>

          {/* D. FROM / LOCATION (City / Area only, no street address) */}
          <div id="form-field-location">
            <label 
              htmlFor="customer-location" 
              className="block text-sm font-semibold text-gray-900 mb-1.5"
            >
              {t.quickRequest.locationLabel} <span className="text-rose-500">*</span>
            </label>
            <input
              id="customer-location"
              name="scrap_pickup_area"
              type="text"
              autoComplete="address-level2"
              spellCheck="false"
              required
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
                if (errors.location) setErrors(err => ({ ...err, location: undefined }));
              }}
              placeholder={t.quickRequest.locationPlaceholder}
              className={`w-full px-4 py-3 text-base rounded-xl border transition-all focus:outline-hidden focus:ring-2 ${
                errors.location 
                  ? 'border-rose-300 focus:border-rose-500 focus:ring-rose-200 bg-rose-50/20' 
                  : 'border-gray-300 focus:border-emerald-600 focus:ring-emerald-100 bg-white'
              }`}
            />
            <p className="mt-1 text-xs text-gray-500">
              {t.quickRequest.locationExample}
            </p>
            {errors.location && (
              <p className="mt-1.5 text-xs sm:text-sm text-rose-600 flex items-center gap-1 font-medium">
                <Info className="w-3.5 h-3.5 shrink-0" />
                {errors.location}
              </p>
            )}
          </div>

          {/* E. PHOTOS (Optional, 1–3) */}
          <div id="form-field-photos">
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-semibold text-gray-900">
                {t.quickRequest.photoLabel}
              </label>
              <span className="text-xs text-gray-500">
                {photos.length}/3
              </span>
            </div>

            {/* Hidden file input */}
            <input
              ref={fileInputRef}
              id="scrap-photo-input"
              name="scrap_photo_uploads"
              type="file"
              accept="image/*"
              multiple
              tabIndex={-1}
              aria-hidden="true"
              onChange={handlePhotoUpload}
              className="hidden"
            />

            {/* Photo thumbnails and Add button */}
            <div className="flex flex-wrap items-center gap-3">
              {photos.map(photo => (
                <div 
                  key={photo.id} 
                  className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border border-gray-200 shadow-xs group"
                >
                  <img 
                    src={photo.dataUrl} 
                    alt="Scrap preview" 
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => removePhoto(photo.id)}
                    className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-black/70 hover:bg-rose-600 text-white flex items-center justify-center transition-colors cursor-pointer shadow-xs"
                    aria-label="Remove photo"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}

              {photos.length < 3 && (
                <button
                  id="add-photo-btn"
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl border-2 border-dashed border-gray-300 hover:border-emerald-500 bg-gray-50 hover:bg-emerald-50/50 text-gray-600 hover:text-emerald-700 flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <Camera className="w-5 h-5" />
                  <span className="text-[11px] font-semibold text-center leading-tight">
                    {t.quickRequest.addPhotoBtn}
                  </span>
                </button>
              )}
            </div>
          </div>

          {/* F. NOTE (Optional) */}
          <div id="form-field-note">
            <label 
              htmlFor="customer-notes" 
              className="block text-sm font-semibold text-gray-900 mb-1.5"
            >
              {t.quickRequest.notesLabel}
            </label>
            <textarea
              id="customer-notes"
              name="scrap_additional_notes"
              autoComplete="off"
              spellCheck="false"
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={t.quickRequest.notesPlaceholder}
              className="w-full px-4 py-2.5 text-base rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 focus:outline-hidden bg-white resize-none"
            />
          </div>

          {/* Reassurance Note */}
          <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-100 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
              {t.quickRequest.reassuranceNote}
            </p>
          </div>

          {/* SUBMIT BUTTON */}
          <div>
            <button
              id="continue-to-preview-btn"
              type="submit"
              className="w-full py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-base sm:text-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{t.quickRequest.continueBtn}</span>
            </button>
          </div>
        </form>
      )}

      {/* STEP 2: REQUEST PREVIEW */}
      {step === 'preview' && (
        <div 
          id="quick-scrap-preview"
          className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 sm:p-8 space-y-6 animate-in fade-in duration-200"
        >
          <div className="border-b border-gray-100 pb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              {t.quickRequest.preview.title}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              {t.quickRequest.preview.subtitle}
            </p>
          </div>

          {/* Summary Details Card */}
          <div className="bg-gray-50 rounded-xl p-4 sm:p-5 space-y-3.5 border border-gray-100 text-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-1 border-b border-gray-200/60">
              <span className="text-gray-500 font-medium">{t.quickRequest.preview.nameLabel}:</span>
              <span className="font-semibold text-gray-900 text-base mt-0.5 sm:mt-0">{name}</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-1 border-b border-gray-200/60">
              <span className="text-gray-500 font-medium">{t.quickRequest.preview.scrapLabel}:</span>
              <span className="font-semibold text-emerald-800 text-base mt-0.5 sm:mt-0">{materialsNames}</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-1 border-b border-gray-200/60">
              <span className="text-gray-500 font-medium">{t.quickRequest.preview.weightLabel}:</span>
              <span className="font-semibold text-gray-900 text-base mt-0.5 sm:mt-0">{weight} {currentUnitLabel}</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-1 border-b border-gray-200/60">
              <span className="text-gray-500 font-medium">{t.quickRequest.preview.fromLabel}:</span>
              <span className="font-semibold text-gray-900 text-base mt-0.5 sm:mt-0">{location}</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-1 border-b border-gray-200/60">
              <span className="text-gray-500 font-medium">{t.quickRequest.preview.photosLabel}:</span>
              <span className="font-medium text-gray-800 mt-0.5 sm:mt-0">
                {photos.length > 0 
                  ? t.quickRequest.photosAttached(photos.length) 
                  : t.quickRequest.noPhotosAttached
                }
              </span>
            </div>

            {/* Thumbnail previews if any */}
            {photos.length > 0 && (
              <div className="flex items-center gap-2 pt-1">
                {photos.map(p => (
                  <img 
                    key={p.id} 
                    src={p.dataUrl} 
                    alt="attachment" 
                    className="w-12 h-12 rounded-lg object-cover border border-gray-200" 
                  />
                ))}
              </div>
            )}

            {notes.trim() && (
              <div className="flex flex-col py-1 pt-2">
                <span className="text-gray-500 font-medium">{t.quickRequest.preview.noteLabel}:</span>
                <span className="font-normal text-gray-800 text-sm mt-1 whitespace-pre-wrap bg-white p-3 rounded-lg border border-gray-200">
                  {notes}
                </span>
              </div>
            )}
          </div>

          {/* Generated WhatsApp Message Preview */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-gray-700 tracking-wider uppercase">
                {t.quickRequest.preview.messagePreviewTitle}
              </span>
              <span className="text-xs text-green-700 font-medium bg-green-100 px-2 py-0.5 rounded-md">
                WhatsApp Ready
              </span>
            </div>

            <div className="bg-[#EFEAE2] rounded-xl p-4 border border-green-200 shadow-xs">
              <div className="bg-white rounded-lg p-3.5 shadow-xs max-w-lg border border-gray-100">
                <p className="text-xs sm:text-sm text-gray-900 whitespace-pre-wrap font-sans leading-relaxed">
                  {generatedWhatsAppMessage}
                </p>
              </div>
            </div>
          </div>

          {/* PREVIEW BUTTONS: Send to WhatsApp & Edit Request */}
          <div className="flex flex-col-reverse sm:flex-row gap-3 pt-2">
            <button
              id="edit-request-btn"
              type="button"
              onClick={() => {
                setStep('form');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="sm:w-1/3 py-3.5 px-4 rounded-xl border border-gray-300 hover:bg-gray-50 active:bg-gray-100 text-gray-700 font-semibold text-base transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t.quickRequest.preview.editBtn}</span>
            </button>

            <button
              id="send-to-whatsapp-btn"
              type="button"
              onClick={handleSendToWhatsApp}
              className="sm:w-2/3 py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1caa51] text-white font-bold text-base sm:text-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-5 h-5 fill-current" />
              <span>{t.quickRequest.preview.sendWhatsAppBtn}</span>
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: SENT STATE / WHATSAPP OPENED */}
      {step === 'sent' && (
        <div 
          id="quick-scrap-sent"
          className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-10 text-center space-y-6 animate-in zoom-in-95 duration-200"
        >
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-xs">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-gray-900">
              {t.quickRequest.preview.sentTitle}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto mt-2 leading-relaxed">
              {t.quickRequest.preview.sentMessage}
            </p>
          </div>

          <div className="max-w-sm mx-auto space-y-3 pt-2">
            <button
              id="reopen-whatsapp-btn"
              type="button"
              onClick={() => {
                window.open(getWhatsAppLink(generatedWhatsAppMessage), '_blank', 'noopener,noreferrer');
              }}
              className="w-full py-3.5 px-5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <ExternalLink className="w-5 h-5" />
              <span>{t.quickRequest.preview.openWhatsAppAgainBtn}</span>
            </button>

            <button
              id="submit-another-btn"
              type="button"
              onClick={handleResetForm}
              className="w-full py-3 px-5 rounded-xl border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{t.quickRequest.preview.submitAnotherBtn}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
