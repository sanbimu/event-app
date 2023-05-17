import React, { useState } from 'react';
import { CheckSVG } from '../icons';
import { formatCurrency } from '../utils/format';
import { useCart } from '../hooks';

interface Props {
  id: string;
  price: number;
  label: string;
  amount: number;
}

const CartItemTicket: React.FC<Props> = ({ id, label, price, amount }) => {
  const { setTicketAmount, removeEvent } = useCart();

  const [selectedAmount, setSelectedAmount] = useState(amount);

  const handleApplyAmount = () => {
    setTicketAmount(id, { label, price, amount: selectedAmount });

    if (selectedAmount === 0) {
      removeEvent(id);
    }
  };

  return (
    <div key={label} className="flex flex-row items-center pr-12 pt-4">
      <div className="flex w-1/2 flex-row items-center justify-start gap-4 pt-2">
        <p className="font-franklin text-lg font-extralight">{label}</p>
        <p className="whitespace-nowrap font-franklin text-base">
          {formatCurrency(price)}
        </p>
      </div>

      <div className="flex w-1/2 flex-row justify-end gap-4">
        <select
          name="tickets"
          id="search"
          className="border border-black bg-background"
          onChange={(e) => setSelectedAmount(Number(e.target.value))}
        >
          <option value="0">0</option>
          {Array.from({ length: 10 }).map((_, i) => {
            const value = i + 1;
            return (
              <option key={i} value={value} selected={amount === value}>
                {value}
              </option>
            );
          })}
        </select>
        <button
          className={`${
            selectedAmount !== amount ? 'bg-green' : ''
          } border border-black p-1`}
          onClick={handleApplyAmount}
        >
          <img src={CheckSVG} alt="V" className="h-6 w-6"></img>
        </button>
      </div>
    </div>
  );
};

export default CartItemTicket;
