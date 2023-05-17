import { useTranslation } from 'react-i18next';
import Logo from '../Logo';

const CartSuccess = () => {
  const { t } = useTranslation();
  return (
    <div className="scrollbar-hide flex flex-col p-9 md:p-12 lg:p-14">
      <div className="mb-4 flex flex-col items-center">
        <Logo />
      </div>

      <div className="justify-self-center text-justify font-franklin text-sm font-light text-dark-grey">
        <p className="text-center font-franklin text-lg text-dark-grey lg:py-6">
          {t('cart.success')}
        </p>
      </div>
    </div>
  );
};

export default CartSuccess;
