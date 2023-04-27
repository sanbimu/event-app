export enum EventStatus {
  NEW = 'NEW',
  ONGOING = 'ONGOING',
  FINISHED = 'FINISHED',
  CANCELED = 'CANCELED',
  SOLD_OUT = 'SOLD_OUT',
}

export enum EventLabel {
  ROCK = 'ROCK',
  POP = 'POP',
  METAL = 'METAL',
  JAZZ_BLUES = 'JAZZ_BLUES',
  CLASSICAL = 'CLASSICAL',
  ELECTRONIC = 'ELECTRONIC',
  HIPHOP_RAP = 'HIPHOP_RAP',
  FOLK_ACOUSTIC = 'FOLK_ACOUSTIC',
  CULTURAL = 'CULTURAL',
  OPERA = 'OPERA',
  OTHER = 'OTHER',
}

export enum EventType {
  CONCERT = 'CONCERT',
  FESTIVAL = 'FESTIVAL',
  PARTY = 'PARTY',
}

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
