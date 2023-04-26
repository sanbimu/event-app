import type { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import type { ProviderUser } from '~/shared/types';
import { Provider } from '~/shared/types';
import { UserController } from '~/database/controllers';

export async function handleOAuth2Callback(
  provider: Provider,
  app: FastifyInstance,
  req: FastifyRequest,
  res: FastifyReply,
) {
  try {
    const { token } = await app[provider].getAccessTokenFromAuthorizationCodeFlow(req);
    const user = await getProviderUser(provider, token.access_token);

    if (user) {
      await UserController.findOneOrCreate(
        { providerId: user.providerId, provider: provider },
        {
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          avatar: user.avatar,
        },
      );

      const jwt = app.jwt.sign(
        { providerId: user.providerId, provider: user.provider },
        { expiresIn: '7d' },
      );

      return res.redirect(`${import.meta.env.VITE_CLIENT_HOST}/token?token=${jwt}`);
    }
  } catch (e) {
    console.error(e);
  }

  return res.redirect(`${import.meta.env.VITE_CLIENT_HOST}/token`);
}

async function getProviderUser(
  provider: Provider,
  accessToken: string,
): Promise<ProviderUser> {
  try {
    const url = getProviderUserURL(provider);
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.ok) {
      const data = await response.json();

      return {
        providerId: data.id,
        provider,
        email: data.email,
        firstName: data.given_name,
        lastName: data.family_name,
        avatar: data.picture,
      };
    }
  } catch (e) {
    console.error(e);
  }
}

function getProviderUserURL(provider: Provider) {
  switch (provider) {
    case Provider.GOOGLE:
      return 'https://www.googleapis.com/userinfo/v2/me';
    case Provider.FACEBOOK:
      return 'https://graph.facebook.com/me?fields=id,first_name,last_name,email,picture.type(large)';
  }
}
