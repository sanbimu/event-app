export enum Provider {
  GOOGLE = 'google',
  FACEBOOK = 'facebook',
}

export interface ProviderUser extends TokenUser {
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
}

export interface TokenUser {
  providerId: string;
  provider: Provider;
}
