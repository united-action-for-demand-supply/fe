import React, { useState } from 'react';
import PropTypes from 'prop-types';
import en from './en';
import sv from './sv';

/**
 * Language Context
 * @type {React.Context}
 */
const LanguageContext = React.createContext({
  language: en,
  changeLanguage: () => {},
});

/**
 * Language Context Provider
 * @param {object} props
 * @param {Array<React.ReactComponentElement>} props.children
 * @returns {React.ReactElement}
 */
const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(en);

  const changeLanguage = lang => {
    if (lang === 'en') {
      setLanguage(en);
    } else if (lang === 'sv') {
      setLanguage(sv);
    }
  }

  const value = {
    language,
    changeLanguage,
  };

  return <LanguageContext.Provider value={{ value }}>{children}</LanguageContext.Provider>;
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { LanguageProvider, LanguageContext };
