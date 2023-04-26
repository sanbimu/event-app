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

export enum Date {
  NextWeek = 'NEXT_WEEK',
  ThisWeekend = 'THIS_WEEKEND',
  Today = 'TODAY',
  Tomorrow = 'TOMORROW'
}

export type Event = {
  _id: Scalars['ObjectID'];
  description: Scalars['String'];
  fromDate: Scalars['String'];
  labels: Array<Maybe<Scalars['String']>>;
  location: Location;
  picture: Scalars['String'];
  price: Scalars['Float'];
  salesCount: Scalars['Int'];
  status: EventStatus;
  title: Scalars['String'];
  toDate: Scalars['String'];
};

export type EventConnection = {
  edges: Array<Maybe<EventEdge>>;
  pageInfo: PageInfo;
};

export type EventEdge = {
  cursor: Scalars['String'];
  node: Event;
};

export enum EventStatus {
  Canceled = 'CANCELED',
  Finished = 'FINISHED',
  New = 'NEW',
  Ongoing = 'ONGOING',
  SoldOut = 'SOLD_OUT'
}

export type Location = {
  _id: Scalars['ObjectID'];
  address: Scalars['String'];
  label: Scalars['String'];
};

export type Mutation = {
  addSavedEvent?: Maybe<Event>;
  removeSavedEvent?: Maybe<Event>;
};


export type MutationAddSavedEventArgs = {
  id: Scalars['ObjectID'];
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
  date?: InputMaybe<Date>;
  first?: InputMaybe<Scalars['Int']>;
  label?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Order>;
  query?: InputMaybe<Scalars['String']>;
  saved?: InputMaybe<Scalars['Boolean']>;
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
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  provider: Scalars['String'];
  providerId?: Maybe<Scalars['String']>;
  savedEvents: Array<Maybe<Event>>;
  tickets: Array<Maybe<Ticket>>;
};
