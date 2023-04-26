import type { FastifyPluginCallback } from 'fastify';
import type { FastifyOAuth2Options } from '@fastify/oauth2';
import oauth2 from '@fastify/oauth2';
import { Provider } from '~/shared/types';
import { handleOAuth2Callback } from './utils';

const facebookConfig: FastifyOAuth2Options = {
  name: Provider.FACEBOOK,
  scope: ['email'],
  credentials: {
    client: {
      id: import.meta.env.VITE_FACEBOOK_CLIENT_ID,
      secret: import.meta.env.VITE_FACEBOOK_CLIENT_SECRET,
    },
    auth: oauth2.FACEBOOK_CONFIGURATION,
  },
  startRedirectPath: '/oauth2/facebook',
  callbackUri: `${import.meta.env.VITE_SERVER_HOST}/oauth2/facebook/callback`,
};

const googleConfig: FastifyOAuth2Options = {
  name: Provider.GOOGLE,
  scope: ['email', 'profile'],
  credentials: {
    client: {
      id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      secret: import.meta.env.VITE_GOOGLE_CLIENT_SECRET,
    },
    auth: oauth2.GOOGLE_CONFIGURATION,
  },
  startRedirectPath: '/oauth2/google',
  callbackUri: `${import.meta.env.VITE_SERVER_HOST}/oauth2/google/callback`,
};

export const oauth2ProvidersRouter: FastifyPluginCallback = (app, _, next) => {
  app.register(oauth2, facebookConfig);
  app.register(oauth2, googleConfig);

  app.get('/oauth2/facebook/callback', async (req, res) => {
    return handleOAuth2Callback(Provider.FACEBOOK, app, req, res);
  });

  app.get('/oauth2/google/callback', async (req, res) => {
    return handleOAuth2Callback(Provider.GOOGLE, app, req, res);
  });

  next();
};
