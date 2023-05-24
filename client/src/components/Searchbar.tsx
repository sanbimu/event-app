import React, { InputHTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';

const Searchbar: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...props }) => {
  const { t } = useTranslation();

  return (
    <div className="flex px-8">
      <p className="pr-2 pt-4 font-fromage text-2xl font-light">{t('search.text')}</p>
      <input
        id="search"
        className="mt-[8px] h-[32px] w-[264px] border-b border-black bg-transparent pt-4 font-franklin text-lg lg:w-[35vw]"
        {...props}
      ></input>
    </div>
  );
};

export default Searchbar;
