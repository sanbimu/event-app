import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Mutation, Query, useMutation, useQuery } from '../graphql';
import { Event, useCart, useWindowContext } from '../hooks';
import { DeleteSVG, SaveSVG, SavedSVG } from '../icons';
import { formatCurrency } from '../utils/format';
import ShowOne from './windows/ShowOne';
import ConfirmDelete from './windows/ConfirmDelete';
import CartItemTicket from './CartItemTicket';
import Button from './Button';

const CartItem: React.FC<Event> = ({ id, tickets }) => {
  const { t, i18n } = useTranslation();
  const { openWindow } = useWindowContext();
  const { getEventTotal } = useCart();

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
        {tickets.map((ticket) => (
          <CartItemTicket key={ticket.label} id={id} {...ticket} />
        ))}

        <div className="flex flex-row items-center pr-12 pt-4 text-lg">
          <div className="flex w-1/2 flex-row items-center justify-start gap-4 pt-2 font-franklin">
            <p className="text-lg font-extralight">Total</p>
            <p className="text-base">{formatCurrency(getEventTotal(id))}</p>
          </div>
          <form
            action={`${import.meta.env.VITE_SERVER_HOST}/stripe/payment`}
            method="POST"
          >
            <input
              type="hidden"
              name="cartItems"
              value={JSON.stringify([{ id, tickets }])}
            />

            <Button
              type="submit"
              text={t('cart.buy')!}
              className="w-[150px] py-2 shadow-custom"
            />
          </form>
        </div>
        <div className="flex flex-row items-center justify-between gap-10 pb-6 pr-12 pt-4 md:justify-start">
          <button
            className="flex flex-row items-center gap-4"
            onClick={() => openWindow(<ConfirmDelete id={id} />)}
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
