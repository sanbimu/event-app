import { useLocalStorage } from './useLocalStorage';

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

  const getCartTotal = (): number => {
    return cartItems.reduce((total, event) => {
      const eventTotal = event.tickets.reduce(
        (subtotal, ticket) => subtotal + ticket.price * ticket.amount,
        0,
      );
      return total + eventTotal;
    }, 0);
  };

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

  const addTicketToCart = (eventId: string, ticket: Ticket) => {
    const eventIndex = cartItems.findIndex((e) => e.id === eventId);

    if (ticket.amount === 0) {
      return;
    }

    if (eventIndex >= 0) {
      const ticketIndex = cartItems[eventIndex].tickets.findIndex(
        (t) => t.label === ticket.label,
      );

      if (ticketIndex >= 0) {
        cartItems[eventIndex].tickets[ticketIndex].amount += ticket.amount;
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

  const removeTicketFromCart = (eventId: string, label: string) => {
    const updatedItems = cartItems.map((cartItem) => {
      if (cartItem.id === eventId) {
        const updatedTickets = cartItem.tickets.map((existingTicket) => {
          if (existingTicket.label === label) {
            return {
              ...existingTicket,
              amount: existingTicket.amount - 1,
            };
          }
          return existingTicket;
        });

        return {
          ...cartItem,
          tickets: updatedTickets.filter((ticket) => ticket.amount > 0),
        };
      }
      return cartItem;
    });
    setCartItems(updatedItems);
  };

  const removeAllTickets = (itemId: string) => {
    const updatedItems = cartItems.map((cartItem) => {
      if (cartItem.id === itemId) {
        return {
          ...cartItem,
          tickets: [],
        };
      }
      return cartItem;
    });
    setCartItems(updatedItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return {
    cartItems,
    addTicketToCart,
    removeTicketFromCart,
    getCartTotal,
    getEventTotal,
    removeAllTickets,
    clearCart,
  };
}
