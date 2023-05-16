import React, { useMemo } from 'react';
import Button from './Button';
import { CheckSVG, DeleteSVG, SaveSVG, SavedSVG } from '../icons';
import { Event } from '../hooks/useCart';
import { Mutation, Query, useMutation, useQuery } from '../graphql';
import { formatCurrency } from '../utils/format';
import { useCart } from '../hooks/useCart';
import { useWindowContext } from '../hooks';
import ShowOne from './windows/ShowOne';
import { useTranslation } from 'react-i18next';
import ConfirmDelete from './windows/ConfirmDelete';

const CartItem: React.FC<Event> = ({ id, tickets }) => {
  const { t, i18n } = useTranslation();
  const { openWindow } = useWindowContext();
  const { getEventTotal, removeEvent } = useCart();

  const [data] = useQuery({
    query: Query.Event,
    variables: { id },
  });

  const [, executeAddSavedEvent] = useMutation(Mutation.AddSavedEvent);
  const [, executeRemoveSavedEvent] = useMutation(Mutation.RemoveSavedEvent);

  const event = useMemo(() => data.data?.event!, [data.data]);

  const handleShowOne = () => {
    openWindow(<ShowOne id={data.data?.event?._id!} />);
  };

  const handleSaveButton = () => {
    if (event.saved) {
      executeRemoveSavedEvent({ id });
      event.saved = false;
    } else {
      executeAddSavedEvent({ id });
      event.saved = true;
    }
  };

  const handleDeleteEvent = () => {
    removeEvent(id);
  };

  return (
    <div className="flex flex-col border-b border-black lg:ml-6 lg:w-[50vw]">
      <button className="flex flex-row gap-6 pl-6 pt-6" onClick={handleShowOne}>
        <img
          src={data.data?.event?.picture}
          alt="image"
          className="h-24 w-24 object-cover"
        ></img>
        <p className="shadow-text toolong font-franklin text-lg font-extralight uppercase md:text-xl ">
          {data.data?.event?.title}
        </p>
      </button>

      <div className="flex flex-col pl-6">
        {tickets.map((ticket) => {
          return (
            <div key={ticket.label} className="flex flex-row items-center pr-12 pt-4">
              <div className="flex w-1/2 flex-row items-center justify-start gap-4 pt-2">
                <p className="font-franklin text-lg font-extralight">{ticket.label}</p>
                <p className="whitespace-nowrap font-franklin text-base">
                  {formatCurrency(ticket.price)}
                </p>
              </div>

              <div className="flex w-1/2 flex-row justify-end gap-4">
                <select
                  name="tickets"
                  id="search"
                  className="border border-black bg-background"
                >
                  <option value="0">0</option>
                  {Array.from({ length: 10 }).map((_, i) => {
                    const value = i + 1;
                    return (
                      <option key={i} value={value} selected={ticket.amount === value}>
                        {value}
                      </option>
                    );
                  })}
                </select>
                <button className="border border-black p-1">
                  <img src={CheckSVG} alt="V" className="h-6 w-6"></img>
                </button>
              </div>
            </div>
          );
        })}

        <div className="flex flex-row items-center pr-12 pt-4 text-lg">
          <div className="flex w-1/2 flex-row items-center justify-start gap-4 pt-2 font-franklin">
            <p className="text-lg font-extralight">Total</p>
            <p className="text-base">{formatCurrency(getEventTotal(id))}</p>
          </div>
          <div className="flex w-1/2 flex-row justify-end">
            <Button text={t('cart.buy')!} className="w-[150px] py-2 shadow-custom" />
          </div>
        </div>
        <div className="flex flex-row items-center justify-between gap-10 pb-6 pr-12 pt-4 md:justify-start">
          <button
            className="flex flex-row items-center gap-4"
            onClick={() => openWindow(<ConfirmDelete />)}
          >
            <img src={DeleteSVG} alt="delete" className="h-6 w-6"></img>
            <p className="font-franklin text-[14px] font-extralight uppercase ">
              {t('cart.delete')}
            </p>
          </button>
          <button className="flex flex-row items-center gap-4" onClick={handleSaveButton}>
            <img
              src={data.data?.event?.saved ? SavedSVG : SaveSVG}
              alt="save"
              className="h-[27px]"
            ></img>
            <p className="font-franklin text-[14px] font-extralight uppercase ">
              {data.data?.event?.saved ? t('cart.saved') : t('cart.save')}
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
