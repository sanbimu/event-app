import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ObjectId } from 'mongodb';
import { DateSVG, LocationSVG, SaveSVG, SavedSVG } from '../../icons';
import { Mutation, Prices, Query, useMutation, useQuery } from '../../graphql';
import { formatCurrency, formatDates } from '../../utils/format';
import { filterButtons } from '../../shared/constants';
import { useCart } from '../../hooks';
import Button from '../Button';

interface ShowOneProps {
  id: ObjectId;
}

const ShowOne: React.FC<ShowOneProps> = ({ id }) => {
  const { t, i18n } = useTranslation();

  const [data, execute] = useQuery({
    query: Query.Event,
    variables: { id },
    requestPolicy: 'network-only',
  });

  const [, executeAddSavedEvent] = useMutation(Mutation.AddSavedEvent);
  const [, executeRemoveSavedEvent] = useMutation(Mutation.RemoveSavedEvent);

  const { setTicketAmount } = useCart();
  const [tickets, setTickets] = useState<any[]>([]);

  const event = useMemo(() => {
    const e = data.data?.event;

    if (!e) {
      return;
    }

    return {
      ...e,
      date: formatDates(e.fromDate, e.toDate),
      prices: e.prices.map((ticket) => {
        return { ...ticket!, formattedPrice: formatCurrency(ticket?.price || 0) };
      }),
    };
  }, [data.data]);

  if (!event) {
    return null;
  }

  const handleSaveButton = () => {
    if (event.saved) {
      executeRemoveSavedEvent({ id: event._id });
      event.saved = false;
    } else {
      executeAddSavedEvent({ id: event._id });
      event.saved = true;
    }
  };

  const handleSelectTicket = (ticket: Prices, amount: number) => {
    const existingTicketIndex = tickets.findIndex((item) => item.label === ticket.label);

    if (existingTicketIndex !== -1) {
      tickets[existingTicketIndex] = {
        ...tickets[existingTicketIndex],
        amount: amount,
      };
      setTickets(tickets);
    } else {
      const newItem = {
        label: ticket.label,
        price: ticket.price,
        amount: amount,
      };
      setTickets((prevTickets) => [...prevTickets, newItem]);
    }
  };

  const handleAddToCart = () => {
    for (const ticket of tickets) {
      setTicketAmount(event._id.toString(), ticket);
    }
  };

  return (
    <>
      {/* MOBILE */}

      <div className="scrollbar-hide flex h-[85vh] w-[85vw] flex-col overflow-y-scroll md:hidden">
        {/* INFORMATION */}

        <div className="flex h-auto flex-col border-b border-black p-4">
          <p className="toolong shadow-text max-w-full pt-10 font-franklin text-2xl font-light">
            {event.title}
          </p>
          <div className="flex flex-row items-center pt-6">
            <img src={DateSVG} alt="date" className="h-[20px] pl-1"></img>
            <p className="pl-5 font-franklin text-[16px] font-extralight uppercase ">
              {event.date}
            </p>
          </div>
          <div className="flex flex-row items-center pt-4">
            <img src={LocationSVG} alt="where" className="h-[27px]"></img>
            <div className="flex flex-col">
              <p className="pl-4 pt-1 font-franklin text-[16px] font-extralight uppercase ">
                {event.location.label}
              </p>
              <p className="pl-4 pt-1 font-franklin text-[14px] font-extralight">
                {event.location.address}
              </p>
            </div>
          </div>
          <button
            className="flex flex-row items-center pb-8 pt-4"
            onClick={handleSaveButton}
          >
            <img
              src={event.saved ? SavedSVG : SaveSVG}
              alt="save"
              className="h-[27px]"
            ></img>
            <p className="pl-4 font-franklin text-[16px] font-extralight uppercase ">
              {event.saved ? t('show-one.saved') : t('show-one.save')}
            </p>
          </button>
        </div>

        {/* PICTURE */}

        <div className="flex h-auto flex-col items-center border-b border-black">
          <img
            src={event.picture}
            alt="image event"
            className="aspect-square object-cover p-3"
          ></img>
        </div>

        {/* DESCRIPTION */}

        <div className="mt-2 flex min-h-[35%] flex-col items-center justify-center overflow-auto border-b border-black p-4">
          <p className="font-franklin text-[15px] font-extralight">{event.description}</p>
        </div>

        {/* PRICES */}

        <div className="flex h-auto flex-col gap-4 border-b border-black py-6 pl-8">
          <p className="pb-2 font-fromage text-2xl font-medium">{t('show-one.prices')}</p>
          {event.prices.map((ticket) => {
            return (
              <div className="flex flex-row justify-between gap-6 pr-12 font-franklin">
                <p className="toolong whitespace-nowrap text-[15px] font-light">
                  {ticket?.label}
                </p>
                <p className="whitespace-nowrap">{ticket?.formattedPrice}</p>
                <select
                  name="tickets"
                  className="border border-black bg-background"
                  onChange={(e) => handleSelectTicket(ticket, Number(e.target.value))}
                >
                  <option value="0" selected>
                    0
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
            );
          })}

          <Button
            text={t('show-one.add')!}
            className="mt-4 w-[180px] py-4 px-2 shadow-custom"
            disabled={
              data.data?.event?.prices.some((price) => {
                return price?.price === 0;
              }) || false
            }
            onClick={handleAddToCart}
          />
        </div>

        {/* TAGS */}

        <div className="flex h-auto flex-row flex-wrap gap-4 p-4">
          {event.labels.map((value) => {
            const button = filterButtons.find((b) => b.value === value);
            return (
              <Button
                className="h-[38px] px-3 font-franklin text-[15px] font-light"
                text={button?.label || ''}
              />
            );
          })}
        </div>
      </div>

      {/* DESKTOP */}

      <div className="hidden w-[75vw] flex-row md:flex md:h-[55vh] lg:h-[85vh]">
        <div className="scrollbar-hide flex w-[50%] flex-col overflow-y-scroll border-r border-black">
          {/* INFORMATION */}

          <div className="flex h-auto flex-col border-b border-black px-10">
            <p className="toolong shadow-text max-w-full pt-12 font-franklin text-2xl font-light">
              {event.title}
            </p>
            <div className="flex flex-row items-center pt-5">
              <img src={DateSVG} alt="date" className="h-[20px] pl-1"></img>
              <p className="pl-5 font-franklin text-[16px] font-extralight uppercase ">
                {event.date}
              </p>
            </div>

            <div className="flex flex-row items-center pt-4">
              <img src={LocationSVG} alt="where" className="h-[27px]"></img>
              <div className="flex flex-col">
                <p className="pl-4 pt-1 font-franklin text-[16px] font-extralight uppercase ">
                  {event.location.label}
                </p>
                <p className="pl-4 pt-1 font-franklin text-[14px] font-extralight">
                  {event.location.address}
                </p>
              </div>
            </div>

            <button
              className="flex flex-row items-center pb-8 pt-4"
              onClick={handleSaveButton}
            >
              <img
                src={event.saved ? SavedSVG : SaveSVG}
                alt="save"
                className="h-[27px]"
              ></img>
              <p className="pl-4 font-franklin text-[16px] font-extralight uppercase ">
                {event.saved ? t('show-one.saved') : t('show-one.save')}
              </p>
            </button>
          </div>

          {/* PRICES */}

          <div className="flex h-auto flex-1 flex-col gap-4 border-b border-black py-6 pl-12">
            <p className="pb-2 font-fromage text-2xl font-medium">
              {t('show-one.prices')!}
            </p>
            {event.prices.map((ticket) => {
              return (
                <div className="flex flex-row justify-between gap-6 pr-12 font-franklin">
                  <p className="toolong whitespace-nowrap text-[15px] font-light">
                    {ticket?.label}
                  </p>
                  <p className="ml-auto mr-6 whitespace-nowrap">
                    {ticket?.formattedPrice}
                  </p>
                  <select
                    id="search"
                    name="tickets"
                    className="border border-black bg-background"
                    onChange={(e) => handleSelectTicket(ticket, Number(e.target.value))}
                  >
                    <option value="0" selected>
                      0
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
              );
            })}

            <Button
              text={t('show-one.add')!}
              className="mt-4 w-[180px] py-4 px-2 shadow-custom "
              disabled={
                data.data?.event?.prices.some((price) => {
                  return price?.price === 0;
                }) || false
              }
              onClick={handleAddToCart}
            />
          </div>

          {/* TAGS */}

          <div className="flex h-auto flex-row flex-wrap gap-4 p-4 pt-6">
            {event.labels.map((value) => {
              const button = filterButtons.find((b) => b.value === value);
              return (
                <Button
                  className="h-[38px] px-3 font-franklin text-[15px] font-light"
                  text={button?.label || ''}
                />
              );
            })}
          </div>
        </div>

        <div className="flex w-[50%] flex-col">
          {/* PICTURE */}

          <div className="flex flex-col items-center overflow-hidden ">
            <img
              src={event.picture}
              alt="image event"
              className="aspect-square object-cover p-6"
            ></img>
          </div>

          {/* DESCRIPTION */}

          <div className="scrollbar-hide flex min-h-[35%] flex-col items-center overflow-auto px-6 pb-6 pt-4">
            <p className="font-franklin text-[15px] font-extralight">
              {event.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowOne;
