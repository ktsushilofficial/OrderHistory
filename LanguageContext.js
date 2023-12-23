// context/LanguageContext.js
import React, { createContext, useState, useEffect } from 'react';
//import * as RNLocalize from 'react-native-localize';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [isRTL, setRTL] = useState(false);

  const toggleLanguage = () => {
    setRTL((prevIsRTL) => !prevIsRTL);
  };

  useEffect(() => {
   // const currentLocale = RNLocalize.getLocales()[0];
    setRTL(true);
  }, []);

  const contextValue = {
    isRTL,
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
