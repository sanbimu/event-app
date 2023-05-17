import { useMemo } from 'react';
import { useLocalStorage } from 'usehooks-ts';

export interface Event {
  id: string;
  tickets: Ticket[];
}

interface Ticket {
  price: number;
  label: string;
  amount: number;
}

export function useCart() {
  const [cartItems, setCartItems] = useLocalStorage<Event[]>('cart', []);

  const cartTotal = useMemo(() => {
    return cartItems.reduce((total, event) => {
      const eventTotal = event.tickets.reduce(
        (subtotal, ticket) => subtotal + ticket.price * ticket.amount,
        0,
      );
      return total + eventTotal;
    }, 0);
  }, [cartItems]);

  const getEventTotal = (eventId: string): number => {
    const event = cartItems.find((cartItem) => cartItem.id === eventId);
    if (event) {
      return event.tickets.reduce(
        (total, ticket) => total + ticket.price * ticket.amount,
        0,
      );
    }
    return 0;
  };

  const setTicketAmount = (eventId: string, ticket: Ticket) => {
    const eventIndex = cartItems.findIndex((e) => e.id === eventId);

    if (eventIndex >= 0) {
      const ticketIndex = cartItems[eventIndex].tickets.findIndex(
        (t) => t.label === ticket.label,
      );

      if (ticketIndex >= 0) {
        cartItems[eventIndex].tickets[ticketIndex].amount = ticket.amount;

        if (ticket.amount === 0) {
          cartItems[eventIndex].tickets.splice(ticketIndex, 1);
        }
      } else {
        cartItems[eventIndex].tickets.push(ticket);
      }
    } else {
      cartItems.push({
        id: eventId,
        tickets: [ticket],
      });
    }

    setCartItems(cartItems);
  };

  const removeEvent = (eventId: string) => {
    const updatedItems = cartItems.filter((cartItem) => cartItem.id !== eventId);
    setCartItems(updatedItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return {
    cartItems,
    cartTotal,
    getEventTotal,
    setTicketAmount,
    removeEvent,
    clearCart,
  };
}
