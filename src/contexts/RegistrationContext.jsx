'use client';

import { createContext, useContext, useState } from 'react';

const RegistrationContext = createContext();

export function RegistrationProvider({ children }) {
  const [showRegistrationPopup, setShowRegistrationPopup] = useState(false);

  return (
    <RegistrationContext.Provider value={{ showRegistrationPopup, setShowRegistrationPopup }}>
      {children}
    </RegistrationContext.Provider>
  );
}

export function useRegistration() {
  const context = useContext(RegistrationContext);
  if (!context) {
    throw new Error('useRegistration must be used within RegistrationProvider');
  }
  return context;
}
