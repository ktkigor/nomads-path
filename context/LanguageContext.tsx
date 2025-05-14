'use client';

import { createContext, useContext, useState } from 'react';

type Lang = 'en' | 'mn';

const LanguageContext = createContext<{
  language: Lang;
  setLanguage: (lang: Lang) => void;
}>({
  language: 'en',
  setLanguage: () => {},
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Lang>('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
