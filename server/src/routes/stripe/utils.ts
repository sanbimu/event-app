import type Stripe from 'stripe';
import type { Event } from '~/graphql/schema';
import type { Event as IEvent } from '~/shared/types';

export function formatEventToPayment(
  event: Event & IEvent,
): Stripe.Checkout.SessionCreateParams.LineItem[] {
  return event.tickets.map((ticket) => ({
    quantity: ticket.amount,
    price_data: {
      currency: 'eur',
      product_data: {
        name: event.title,
        description: ticket.label,
        images: [event.picture],
      },
      unit_amount: ticket.price * 100,
    },
  }));
}
