import Button from '../components/Button';
import { useCart } from '../hooks/useCart';
import BannerMedium from '../layout/BannerMedium';
import CartItem from '../components/CartItem';
import { formatCurrency } from '../utils/format';

export function Cart() {
  const { cartItems, cartTotal } = useCart();

  return (
    <>
      <BannerMedium title="cart" fontMobile="text-7xl" />

      <div className="flex flex-col md:px-12 lg:flex-row lg:justify-between lg:px-0">
        <div className="flex flex-col pb-6">
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} {...cartItem} />
          ))}
        </div>

        <div className="flex h-min flex-col gap-4 border-black pb-6 pl-6 lg:border-b lg:border-l lg:pr-12">
          <p className="shadow-text mr-32 pt-6 font-franklin text-2xl font-extralight uppercase md:mr-[380px] lg:mb-2 lg:ml-6 lg:mr-0">
            BUY ALL EVENTS
          </p>
          <div className="flex flex-row items-center gap-12 font-franklin lg:py-2 lg:pl-6">
            <p className="text-lg">TOTAL</p>
            <p className="">{formatCurrency(cartTotal)}</p>
          </div>
          <Button text="buy" className="w-[170px] py-3 text-lg shadow-custom lg:ml-6" />
        </div>
      </div>
    </>
  );
}
