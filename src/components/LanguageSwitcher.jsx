import React from 'react';
import { useTranslation } from 'react-i18next';
import enFlag from '../assets/en.png';
import esFlag from '../assets/es.png';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='fixed bottom-0 right-0 p-4 flex flex-col items-center space-y-2'>
        <div className="flex justify-center items-center mt-4">
      <div className="mx-2">
        <button onClick={() => changeLanguage('en')} className="flex items-center p-2 border border-gray-300 rounded hover:bg-gray-200">
          <img src={enFlag} alt="English" className="w-6 h-6 mr-2" />
          English
        </button>
      </div>
      <div className="mx-2">
        <button onClick={() => changeLanguage('es')} className="flex items-center p-2 border border-gray-300 rounded hover:bg-gray-200">
          <img src={esFlag} alt="Español" className="w-6 h-6 mr-2" />
          Español
        </button>
      </div>
    </div>    
    </div>
    
  );
};

export default LanguageSwitcher;
