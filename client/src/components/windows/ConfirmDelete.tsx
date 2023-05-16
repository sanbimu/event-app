import React from 'react';
import Button from '../Button';
import { useTranslation } from 'react-i18next';
import { useCart } from '../../hooks/useCart';
import { useWindowContext } from '../../hooks';

interface Props {
  id: string;
}

const ConfirmDelete: React.FC<Props> = ({ id }) => {
  const { t } = useTranslation();
  const { removeEvent } = useCart();
  const { closeWindow } = useWindowContext();

  const handleDeleteEvent = () => {
    removeEvent(id);
    closeWindow();
  };

  return (
    <div className="z-[100] flex h-auto w-[80vw] flex-col border border-black bg-background md:w-[60vw] lg:w-[30vw]">
      <div className="border-8 border-dark-pink-transparent p-4">
        <div className="flex flex-col items-center justify-center gap-6">
          <p className="z-40 pt-6 text-center font-franklin text-dark-grey lg:pt-8">
            {t('delete.text')!}
          </p>

          <div className="flex flex-row items-center justify-center gap-6 py-2 md:gap-8 lg:py-3">
            <Button
              className="px-3 py-2 md:px-6 md:py-3"
              text={t('delete.confirm')!}
              onClick={handleDeleteEvent}
            ></Button>
            <Button
              className="bg-dark-pink-transparent bg-opacity-80 px-3 py-2 text-dark-pink md:px-6 md:py-3"
              text={t('delete.cancel')!}
              onClick={closeWindow}
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;
