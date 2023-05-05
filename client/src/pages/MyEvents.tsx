import { useHorizontalScroll } from '../hooks';
import BannerMedium from '../layout/BannerMedium';
import BannerSmall from '../layout/BannerSmall';
import Header from '../layout/Header';
import MyEvent from '../layout/MyEvent';
import { NextSVG } from '../icons';

export function MyEvents() {
  const scrollRef = useHorizontalScroll<HTMLDivElement>();
  return (
    <div className="flex h-screen flex-col lg:flex-row">
      <Header />
      <div className="flex w-screen flex-col lg:pl-[240px]">
        <BannerMedium title="my events" fontMobile="text-[64px]" />

        <div
          id="myevents"
          className="scrollbar-hide flex w-auto flex-row items-center gap-6 overflow-x-auto border-b border-black py-4 pl-6"
          ref={scrollRef}
        >
          <MyEvent />
          <img src={NextSVG} alt="next" className="absolute right-0 block h-[22px]"></img>
        </div>

        <BannerSmall />

        <div
          id="myevents"
          className="scrollbar-hide flex w-auto flex-row items-center gap-6 overflow-x-auto py-4 pl-6"
          ref={scrollRef}
        >
          <MyEvent />
          <MyEvent />
          <MyEvent />
          <MyEvent />
          <MyEvent />
          <MyEvent />
          <MyEvent />

          <img src={NextSVG} alt="next" className="absolute right-0 block h-[22px]"></img>
        </div>
      </div>
    </div>
  );
}
