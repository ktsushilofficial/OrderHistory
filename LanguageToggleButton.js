// components/LanguageToggleButton.js
import React, { useContext } from 'react';
import { Button } from 'react-native';
import LanguageContext from './LanguageContext';

const LanguageToggleButton = () => {
  const { isRTL, toggleLanguage } = useContext(LanguageContext);

  return (
    <Button onPress={toggleLanguage} title={isRTL ? 'English':'العربية'  } />
  );
};

export default LanguageToggleButton;
