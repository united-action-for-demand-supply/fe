import { useContext } from 'react';
import { LanguageContext } from './language';

const useLanguage = () => {
  const context = useContext(LanguageContext);
  const { language, changeLanguage } = context.value;
  return { language, changeLanguage };
};

export default useLanguage;
