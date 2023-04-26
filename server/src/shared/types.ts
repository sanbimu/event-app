export enum EventStatus {
  NEW = 'NEW',
  ONGOING = 'ONGOING',
  FINISHED = 'FINISHED',
  CANCELED = 'CANCELED',
  SOLD_OUT = 'SOLD_OUT',
}

export enum Provider {
  GOOGLE = 'google',
  FACEBOOK = 'facebook',
}

export interface TokenUser {
  providerId: string;
  provider: Provider;
}
