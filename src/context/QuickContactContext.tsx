import React, { createContext, useContext, useState } from 'react';

interface QuickContactContextType {
  isOpen: boolean;
  openQuickContact: () => void;
  closeQuickContact: () => void;
}

const QuickContactContext = createContext<QuickContactContextType | undefined>(undefined);

export function QuickContactProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openQuickContact = () => setIsOpen(true);
  const closeQuickContact = () => setIsOpen(false);

  return (
    <QuickContactContext.Provider value={{ isOpen, openQuickContact, closeQuickContact }}>
      {children}
    </QuickContactContext.Provider>
  );
}

export function useQuickContact(): QuickContactContextType {
  const context = useContext(QuickContactContext);
  if (!context) {
    throw new Error('useQuickContact must be used within a QuickContactProvider');
  }
  return context;
}
