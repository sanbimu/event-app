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

export interface Event {
  id: string;
  tickets: Ticket[];
}

export interface Ticket {
  price: number;
  label: string;
  amount: number;
}
