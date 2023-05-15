import Button from '../components/Button';
import BannerMedium from '../layout/BannerMedium';
import CartItem from '../components/CartItem';

export function Cart() {
  return (
    <>
      <BannerMedium title="cart" fontMobile="text-7xl" />

      <div className="flex flex-col md:px-12 lg:flex-row lg:justify-between lg:px-0">
        <div className="flex flex-col">
          <CartItem />
        </div>

        <div className="flex h-min flex-col gap-4 border-black pl-6 pb-6 lg:border-b lg:border-l lg:pr-12">
          <p className="shadow-text mr-32 pt-6 font-franklin text-2xl font-extralight uppercase md:mr-[380px] lg:mb-4 lg:mr-0 lg:ml-6">
            BUY ALL EVENTS
          </p>
          <div className="flex flex-row items-center gap-12 font-franklin lg:pl-6 lg:pt-1">
            <p className="text-lg font-extralight">Name</p>
            <p className="">19.00 €</p>
          </div>

          <div className="flex flex-row items-center gap-12 font-franklin lg:py-4 lg:pl-6">
            <p className="text-lg">TOTAL</p>
            <p className="">19.00 €</p>
          </div>
          <Button text="buy" className="w-[170px] py-3 text-lg shadow-custom lg:ml-6" />
        </div>
      </div>
    </>
  );
}
