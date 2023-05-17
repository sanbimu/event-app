import type { FastifyPluginCallback, FastifyRequest } from 'fastify';
import type { Event as IEvent } from '~/shared/types';
import { formatEventToPayment } from './utils';
import { Event } from '~/database/models';

type StripePaymentRoute = FastifyRequest<{
  Body: { cartItems: string };
}>;

export const stripeRouter: FastifyPluginCallback = (app, _, next) => {
  app.route({
    method: 'POST',
    url: '/stripe/payment',
    handler: async (req: StripePaymentRoute, res) => {
      const cartItems: IEvent[] = JSON.parse(req.body.cartItems);
      const events = await Event.find({ id: cartItems.map((event) => event.id) }).lean();

      const lineItems = cartItems.map((cartItem) => {
        const event = events.find((event) => event._id.toString() === cartItem.id);
        return { ...cartItem, ...event };
      });

      const session = await app.stripe.checkout.sessions.create({
        line_items: lineItems.flatMap((event) => formatEventToPayment(event)),
        mode: 'payment',
        success_url: `${import.meta.env.VITE_CLIENT_HOST}/cart?success=true`,
        cancel_url: `${import.meta.env.VITE_CLIENT_HOST}/cart?canceled=true`,
      });

      res.redirect(303, session.url);
    },
  });

  next();
};
