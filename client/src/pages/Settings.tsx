import Button from '../components/Button';
import BannerMedium from '../layout/BannerMedium';
import Header from '../layout/Header';

export function Settings() {
  return (
    <div className="flex h-screen flex-col lg:flex-row">
      <Header />
      <div className="w-screen flex-col lg:ml-[240px] lg:flex">
        <BannerMedium title="settings" fontMobile="text-7xl" />

        <div className="flex flex-col gap-4 pl-8 pt-10 md:pl-12 md:pt-14 lg:pl-10 lg:pt-10">
          <div className="flex pr-32">
            <div className="relative inline-block h-[20px]">
              <p className="relative z-40 font-franklin text-2xl font-light">
                Contact Information
              </p>
              <div className="absolute top-0 bottom-0 left-0 right-0 z-30 translate-x-[0.65rem] translate-y-[0.80rem] bg-dark-pink-transparent"></div>
            </div>
          </div>

          <div className="mr-6 flex flex-col gap-4 md:flex-row">
            <div className="mt-2 flex">
              <p className="pr-2 pt-4 font-franklin text-sm font-light">FIRST NAME</p>
              <input
                id="search"
                className="h-[32px] border-b border-black bg-transparent pt-4 font-franklin text-lg"
              ></input>
            </div>
            <div className="mt-2 flex">
              <p className="pr-2 pt-4 font-franklin text-sm font-light">LAST NAME</p>
              <input
                id="search"
                className=" h-[32px] border-b border-black bg-transparent pt-4 font-franklin text-lg"
              ></input>
            </div>
          </div>
          <div className="flex">
            <p className="pr-2 pt-4 font-franklin text-sm font-light">PHONE NUMBER</p>
            <input
              id="search"
              className="h-[32px] border-b border-black bg-transparent pt-4 font-franklin text-lg"
              size={17}
            ></input>
          </div>

          <div className="flex pr-32 pt-2 md:pt-6 lg:pt-4">
            <div className="relative inline-block h-[20px]">
              <p className="relative z-40 font-franklin text-2xl font-light">
                Home Address
              </p>
              <div className="absolute top-0 bottom-0 left-0 right-0 z-30 translate-x-[0.65rem] translate-y-[0.80rem] bg-dark-pink-transparent"></div>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex">
              <p className="pr-2 pt-4 font-franklin text-sm font-light">STREET</p>
              <input
                id="search"
                className="h-[32px] border-b border-black bg-transparent pt-4 font-franklin text-lg"
              ></input>
            </div>
            <div className="flex">
              <p className="pr-2 pt-4 font-franklin text-sm font-light">POSTAL CODE</p>
              <input
                id="search"
                className=" h-[32px] border-b border-black bg-transparent pt-4 font-franklin text-lg"
                size={8}
              ></input>
            </div>
          </div>
          <div className="flex">
            <p className="pr-2 pt-4 font-franklin text-sm font-light">CITY</p>
            <input
              id="search"
              className="h-[32px] border-b border-black bg-transparent pt-4 font-franklin text-lg"
            ></input>
          </div>

          <div className="lg-pt-4 flex pr-32 pt-2 md:pt-6">
            <div className="relative inline-block h-[20px]">
              <p className="relative z-40 font-franklin text-2xl font-light">
                Billing Information
              </p>
              <div className="absolute top-0 bottom-0 left-0 right-0 z-30 translate-x-[0.65rem] translate-y-[0.80rem] bg-dark-pink-transparent"></div>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex md:mt-2">
              <p className="pr-2 pt-4 font-franklin text-sm font-light">STREET</p>
              <input
                id="search"
                className="h-[32px] border-b border-black bg-transparent pt-4 font-franklin text-lg"
              ></input>
            </div>
            <div className="flex md:mt-2">
              <p className="pr-2 pt-4 font-franklin text-sm font-light">POSTAL CODE</p>
              <input
                id="search"
                className=" h-[32px] border-b border-black bg-transparent pt-4 font-franklin text-lg"
                size={8}
              ></input>
            </div>
          </div>
          <div className="flex">
            <p className="pr-2 pt-4 font-franklin text-sm font-light">CITY</p>
            <input
              id="search"
              className="h-[32px] border-b border-black bg-transparent pt-4 font-franklin text-lg"
            ></input>
          </div>

          <div className="mb-8 mt-6 flex gap-5 font-franklin text-lg md:mt-10 md:gap-10 lg:mt-6">
            <Button
              text="save"
              className="w-[120px] py-3 text-dark-pink shadow-custom"
            ></Button>
            <Button
              text="delete account"
              className="w-[180px] bg-dark-pink-transparent py-3 text-dark-grey shadow-custom"
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
