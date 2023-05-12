import { ObjectId } from "mongodb";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ObjectID: ObjectId;
};

export type BillingInfo = {
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
};

export type BillingInfoInput = {
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
};

export type ContactInfo = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type ContactInfoInput = {
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
};

export type Event = {
  _id: Scalars['ObjectID'];
  description: Scalars['String'];
  fromDate: Scalars['String'];
  labels: Array<Maybe<EventLabel>>;
  location: Location;
  picture: Scalars['String'];
  prices: Array<Maybe<Prices>>;
  salesCount: Scalars['Int'];
  saved?: Maybe<Scalars['Boolean']>;
  status: EventStatus;
  stock: Scalars['Int'];
  title: Scalars['String'];
  toDate: Scalars['String'];
  type: EventType;
};

export type EventConnection = {
  edges: Array<Maybe<EventEdge>>;
  pageInfo: PageInfo;
};

export enum EventDate {
  NextWeek = 'NEXT_WEEK',
  ThisWeekend = 'THIS_WEEKEND',
  Today = 'TODAY',
  Tomorrow = 'TOMORROW'
}

export type EventEdge = {
  cursor: Scalars['String'];
  node: Event;
};

export enum EventLabel {
  Classical = 'CLASSICAL',
  Cultural = 'CULTURAL',
  Electronic = 'ELECTRONIC',
  FolkAcoustic = 'FOLK_ACOUSTIC',
  HiphopRap = 'HIPHOP_RAP',
  JazzBlues = 'JAZZ_BLUES',
  Metal = 'METAL',
  Opera = 'OPERA',
  Other = 'OTHER',
  Pop = 'POP',
  Rock = 'ROCK'
}

export enum EventStatus {
  Canceled = 'CANCELED',
  Finished = 'FINISHED',
  New = 'NEW',
  Ongoing = 'ONGOING',
  SoldOut = 'SOLD_OUT'
}

export enum EventType {
  Concert = 'CONCERT',
  Festival = 'FESTIVAL',
  Party = 'PARTY'
}

export type HomeInfo = {
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
};

export type HomeInfoInput = {
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
};

export type Info = {
  billing: BillingInfo;
  contact: ContactInfo;
  home: HomeInfo;
};

export type Location = {
  address: Scalars['String'];
  label: Scalars['String'];
};

export type ModifyUserInfoInput = {
  billing?: InputMaybe<BillingInfoInput>;
  contact?: InputMaybe<ContactInfoInput>;
  home?: InputMaybe<HomeInfoInput>;
};

export type Mutation = {
  addSavedEvent?: Maybe<Scalars['Boolean']>;
  modifyUserInfo?: Maybe<User>;
  removeSavedEvent?: Maybe<Scalars['Boolean']>;
};


export type MutationAddSavedEventArgs = {
  id: Scalars['ObjectID'];
};


export type MutationModifyUserInfoArgs = {
  input: ModifyUserInfoInput;
};


export type MutationRemoveSavedEventArgs = {
  id: Scalars['ObjectID'];
};

export enum Order {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type PageInfo = {
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type Prices = {
  label: Scalars['String'];
  price: Scalars['Float'];
};

export type Query = {
  event?: Maybe<Event>;
  events: EventConnection;
  me?: Maybe<User>;
};


export type QueryEventArgs = {
  id: Scalars['ObjectID'];
};


export type QueryEventsArgs = {
  after?: InputMaybe<Scalars['ObjectID']>;
  date?: InputMaybe<EventDate>;
  first?: InputMaybe<Scalars['Int']>;
  label?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Order>;
  query?: InputMaybe<Scalars['String']>;
  saved?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['String']>;
};

export type Ticket = {
  _id: Scalars['ObjectID'];
  event: Event;
  user: User;
};

export type User = {
  _id: Scalars['ObjectID'];
  avatar: Scalars['String'];
  email: Scalars['String'];
  info: Info;
  provider: Scalars['String'];
  providerId?: Maybe<Scalars['String']>;
  savedEvents: Array<Maybe<Event>>;
  tickets: Array<Maybe<Ticket>>;
};
