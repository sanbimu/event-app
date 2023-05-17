import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import BannerMedium from '../layout/BannerMedium';
import Button from '../components/Button';
import CartItem from '../components/CartItem';
import CartSuccess from '../components/windows/CartSuccess';
import { formatCurrency } from '../utils/format';
import { useCart, useWindowContext } from '../hooks';

export function Cart() {
  const [searchParams] = useSearchParams();
  const { cartItems, cartTotal, clearCart } = useCart();
  const { t } = useTranslation();
  const { openWindow } = useWindowContext();

  useEffect(() => {
    const success = searchParams.get('success');
    if (success === 'true') {
      clearCart();
      openWindow(<CartSuccess />);
    }
  }, [searchParams]);

  return (
    <>
      <BannerMedium title={t('cart.header')} fontMobile="text-7xl" />

      <div className="flex flex-col md:px-12 lg:flex-row lg:justify-between lg:px-0">
        <div className="flex flex-col pb-6">
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} {...cartItem} />
          ))}
        </div>

        <div className="flex h-min flex-col gap-4 border-black pb-6 pl-6 lg:mr-4 lg:mt-4 lg:border lg:pr-12">
          <p className="shadow-text mr-32 pt-6 font-franklin text-2xl font-extralight uppercase md:mr-[380px] lg:mb-2 lg:ml-6 lg:mr-0">
            {t('cart.buy-all')}
          </p>
          <div className="flex flex-row items-center gap-12 font-franklin lg:py-2 lg:pl-6">
            <p className="text-lg">TOTAL</p>
            <p className="">{formatCurrency(cartTotal)}</p>
          </div>

          <form
            action={`${import.meta.env.VITE_SERVER_HOST}/stripe/payment`}
            method="POST"
          >
            <input type="hidden" name="cartItems" value={JSON.stringify(cartItems)} />

            <Button
              type="submit"
              text={t('cart.buy')!}
              className="w-[170px] py-3 text-lg shadow-custom lg:ml-6"
              disabled={cartItems.length === 0}
            />
          </form>
        </div>
      </div>
    </>
  );
}
