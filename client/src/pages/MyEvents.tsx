import { useHorizontalScroll } from '../hooks';
import BannerMedium from '../layout/BannerMedium';
import BannerSmall from '../layout/BannerSmall';
import { useTranslation } from 'react-i18next';
import MyEvent from '../layout/MyEvent';
import { NextSVG } from '../icons';
import { Query, useQuery } from '../graphql';

export function MyEvents() {
  const { t } = useTranslation();

  const [dataSaved] = useQuery({
    query: Query.Events,
    variables: { saved: true },
    requestPolicy: 'network-only',
  });

  const scrollRef = useHorizontalScroll<HTMLDivElement>();
  return (
    <>
      <BannerMedium title={t('my-events.bought')} fontMobile="text-[64px]" />

      <div
        id="myevents"
        className="scrollbar-hide flex w-auto flex-row items-center gap-6 overflow-x-auto border-b border-black py-4 pl-6"
        ref={scrollRef}
      >
        {/* <MyEvent /> */}
        <img src={NextSVG} alt="next" className="absolute right-0 block h-[22px]"></img>
      </div>

      <BannerSmall />

      <div
        id="myevents"
        className="scrollbar-hide flex w-auto flex-row items-center gap-6 overflow-x-auto py-4 pl-6"
        ref={scrollRef}
      >
        {dataSaved.data?.events.edges.map((event) => {
          return <MyEvent event={event?.node!} />;
        })}

        <img src={NextSVG} alt="next" className="absolute right-0 block h-[22px]"></img>
      </div>
    </>
  );
}
