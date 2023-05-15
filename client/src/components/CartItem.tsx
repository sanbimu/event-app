import React from 'react';
import Button from './Button';
import { CheckSVG, DeleteSVG, SaveSVG, SavedSVG } from '../icons';
import { Event } from '../hooks/useCart';
import { Query, useQuery } from '../graphql';
import { formatCurrency } from '../utils/format';
import { useCart } from '../hooks/useCart';

const CartItem: React.FC<Event> = ({ id, tickets }) => {
  const { getEventTotal } = useCart();

  const [data] = useQuery({
    query: Query.Event,
    variables: { id },
  });

  return (
    <div className="flex flex-col border-b border-black lg:ml-6 lg:w-[50vw]">
      <div className="flex flex-row gap-6 pl-6 pt-6">
        <img
          src={data.data?.event?.picture}
          alt="image"
          className="h-24 w-24 object-cover"
        ></img>
        <p className="shadow-text toolong font-franklin text-lg font-extralight uppercase md:text-xl ">
          {data.data?.event?.title}
        </p>
      </div>

      <div className="flex flex-col pl-6">
        {tickets.map((ticket) => {
          return (
            <div className="flex flex-row items-center pr-12 pt-4">
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
                  <option value="1" selected={ticket.amount === 1}>
                    1
                  </option>
                  <option value="2" selected={ticket.amount === 2}>
                    2
                  </option>
                  <option value="3" selected={ticket.amount === 3}>
                    3
                  </option>
                  <option value="4" selected={ticket.amount === 4}>
                    4
                  </option>
                  <option value="5" selected={ticket.amount === 5}>
                    5
                  </option>
                  <option value="6" selected={ticket.amount === 6}>
                    6
                  </option>
                  <option value="7" selected={ticket.amount === 7}>
                    7
                  </option>
                  <option value="8" selected={ticket.amount === 8}>
                    8
                  </option>
                  <option value="9" selected={ticket.amount === 9}>
                    9
                  </option>
                  <option value="10" selected={ticket.amount === 10}>
                    10
                  </option>
                </select>
                <button className="border border-black p-1">
                  <img src={CheckSVG} alt="V" className="h-6 w-6"></img>
                </button>
              </div>
            </div>
          );
        })}

        <div className="flex flex-row items-center pt-4 pr-12 text-lg">
          <div className="flex w-1/2 flex-row items-center justify-start gap-4 pt-2 font-franklin">
            <p className="text-lg font-extralight">Total</p>
            <p className="text-base">{formatCurrency(getEventTotal(id))}</p>
          </div>
          <div className="flex w-1/2 flex-row justify-end">
            <Button text="buy" className="w-[150px] py-2 shadow-custom" />
          </div>
        </div>
        <div className="flex flex-row items-center justify-between pr-12 pt-4 pb-6 md:justify-start">
          <button className="flex flex-row items-center">
            <img src={DeleteSVG} alt="delete" className="h-6 w-6"></img>
            <p className="pl-4 font-franklin text-[14px] font-extralight uppercase ">
              Delete
            </p>
          </button>
          <div className="flex flex-row items-center">
            <img src={SaveSVG} alt="save" className="h-[27px] pl-10"></img>
            <p className="pl-4 font-franklin text-[14px] font-extralight uppercase ">
              Save for later
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
