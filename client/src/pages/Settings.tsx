import { FormEvent } from 'react';
import Button from '../components/Button';
import { Mutation, Query, useMutation, useQuery } from '../graphql';
import BannerMedium from '../layout/BannerMedium';
import { useTranslation } from 'react-i18next';

export function Settings() {
  const { t, i18n } = useTranslation();
  const [data] = useQuery({
    query: Query.Settings,
  });

  const [, executeMutation] = useMutation(Mutation.ModifyUserInfo);

  if (!data.data?.me) {
    return null;
  }

  const sendForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = {
      contact: {
        firstName: e.currentTarget.contact_firstname.value,
        lastName: e.currentTarget.contact_lastname.value,
        phoneNumber: e.currentTarget.contact_phonenumber.value,
      },
      home: {
        address: e.currentTarget.home_street.value,
        city: e.currentTarget.home_city.value,
        postalCode: e.currentTarget.home_postalcode.value,
      },
      billing: {
        name: e.currentTarget.billing_name.value,
        address: e.currentTarget.billing_street.value,
        city: e.currentTarget.billing_city.value,
        postalCode: e.currentTarget.billing_postalcode.value,
      },
    };
    executeMutation({
      input: input,
    });
  };

  return (
    <>
      <BannerMedium title={t('settings.header')} fontMobile="text-7xl" />

      <form onSubmit={sendForm}>
        <div className="flex flex-col gap-4 pl-8 pt-10 md:pl-12 md:pt-14 lg:pl-10 lg:pt-10">
          <div className="flex pr-32">
            <div className="relative inline-block h-[20px]">
              <p className="relative z-40 font-franklin text-2xl font-light">
                {t('settings.contact-info')}
              </p>
              <div className="absolute bottom-0 left-0 right-0 top-0 z-30 translate-x-[0.65rem] translate-y-[0.80rem] bg-dark-pink-transparent"></div>
            </div>
          </div>

          <div className="mr-6 flex flex-col gap-4 md:flex-row">
            <div className="mt-2 flex">
              <p className="pr-2 pt-4 font-franklin text-sm font-light">
                {t('settings.first-name')}
              </p>
              <input
                id="search"
                name="contact_firstname"
                className="h-[32px] border-b border-black bg-transparent pt-4 font-franklin text-lg"
                defaultValue={data.data.me.info.contact.firstName || ''}
              ></input>
            </div>
            <div className="mt-2 flex">
              <p className="pr-2 pt-4 font-franklin text-sm font-light">
                {t('settings.last-name')}
              </p>
              <input
                id="search"
                name="contact_lastname"
                className=" h-[32px] border-b border-black bg-transparent pt-4 font-franklin text-lg"
                defaultValue={data.data.me.info.contact.lastName || ''}
              ></input>
            </div>
          </div>
          <div className="flex">
            <p className="pr-2 pt-4 font-franklin text-sm font-light">
              {t('settings.phone')}
            </p>
            <input
              id="search"
              name="contact_phonenumber"
              className="h-[32px] border-b border-black bg-transparent pt-4 font-franklin text-lg"
              size={17}
              defaultValue={data.data.me.info.contact.phoneNumber || ''}
            ></input>
          </div>

          <div className="flex pr-32 pt-2 md:pt-6 lg:pt-4">
            <div className="relative inline-block h-[20px]">
              <p className="relative z-40 font-franklin text-2xl font-light">
                {t('settings.home-address')}
              </p>
              <div className="absolute bottom-0 left-0 right-0 top-0 z-30 translate-x-[0.65rem] translate-y-[0.80rem] bg-dark-pink-transparent"></div>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex md:mt-2">
              <p className="pr-2 pt-4 font-franklin text-sm font-light">
                {t('settings.street')}
              </p>
              <input
                id="search"
                name="home_street"
                className="h-[32px] border-b border-black bg-transparent pt-4 font-franklin text-lg"
                defaultValue={data.data.me.info.home.address || ''}
              ></input>
            </div>
            <div className="flex">
              <p className="pr-2 pt-6 font-franklin text-sm font-light">
                {t('settings.postal-code')}
              </p>
              <input
                id="search"
                name="home_postalcode"
                className="h-[40px] border-b border-black bg-transparent pt-6 font-franklin text-lg"
                size={8}
                defaultValue={data.data.me.info.home.postalCode || ''}
              ></input>
            </div>
          </div>
          <div className="flex">
            <p className="pr-2 pt-4 font-franklin text-sm font-light">
              {t('settings.city')}
            </p>
            <input
              id="search"
              name="home_city"
              className="h-[32px] border-b border-black bg-transparent pt-4 font-franklin text-lg"
              defaultValue={data.data.me.info.home.city || ''}
            ></input>
          </div>

          <div className="lg-pt-4 flex pr-32 pt-2 md:pt-6">
            <div className="relative inline-block h-[20px]">
              <p className="relative z-40 font-franklin text-2xl font-light">
                {t('settings.billing-address')}
              </p>
              <div className="absolute bottom-0 left-0 right-0 top-0 z-30 translate-x-[0.65rem] translate-y-[0.80rem] bg-dark-pink-transparent"></div>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex md:mt-2">
              <p className="pr-2 pt-4 font-franklin text-sm font-light">
                {t('settings.name')}
              </p>
              <input
                id="search"
                name="billing_name"
                className="h-[32px] border-b border-black bg-transparent pt-4 font-franklin text-lg"
                defaultValue={data.data.me.info.billing.name || ''}
              ></input>
            </div>
            <div className="flex md:mt-2">
              <p className="pr-2 pt-4 font-franklin text-sm font-light">
                {t('settings.street')}
              </p>
              <input
                id="search"
                name="billing_street"
                className="h-[32px] border-b border-black bg-transparent pt-4 font-franklin text-lg"
                defaultValue={data.data.me.info.billing.address || ''}
              ></input>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex md:mt-2">
              <p className="pr-2 pt-4 font-franklin text-sm font-light">
                {t('settings.postal-code')}
              </p>
              <input
                id="search"
                name="billing_postalcode"
                className=" h-[32px] border-b border-black bg-transparent pt-4 font-franklin text-lg"
                size={8}
                defaultValue={data.data.me.info.billing.postalCode || ''}
              ></input>
            </div>
            <div className="flex md:mt-2">
              <p className="pr-2 pt-4 font-franklin text-sm font-light">
                {t('settings.city')}
              </p>
              <input
                id="search"
                name="billing_city"
                className="h-[32px] border-b border-black bg-transparent pt-4 font-franklin text-lg"
                defaultValue={data.data.me.info.billing.city || ''}
              ></input>
            </div>
          </div>

          <div className="mb-8 mt-6 flex gap-5 font-franklin text-lg md:mt-10 md:gap-10 lg:mt-6">
            <Button
              text={t('settings.save')!}
              className="min-w-[120px] py-3 px-2 text-dark-pink shadow-custom"
              type="submit"
            ></Button>
            <Button
              text={t('settings.delete')!}
              className="min-w-[180px] bg-dark-pink-transparent bg-opacity-80 px-2 py-3 text-dark-pink shadow-custom"
            ></Button>
          </div>
        </div>
      </form>
    </>
  );
}
