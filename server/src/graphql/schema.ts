import { ObjectId } from 'mongodb';
import type {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql';
import type { MercuriusContext } from 'mercurius';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) =>
  | Promise<import('mercurius-codegen').DeepPartial<TResult>>
  | import('mercurius-codegen').DeepPartial<TResult>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ObjectID: ObjectId;
  _FieldSet: any;
};

export enum Order {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum Date {
  TODAY = 'TODAY',
  TOMORROW = 'TOMORROW',
  THIS_WEEKEND = 'THIS_WEEKEND',
  NEXT_WEEK = 'NEXT_WEEK',
}

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

export type Location = {
  __typename?: 'Location';
  label: Scalars['String'];
  address: Scalars['String'];
};

export type Prices = {
  __typename?: 'Prices';
  label: Scalars['String'];
  price: Scalars['Float'];
};

export type Event = {
  __typename?: 'Event';
  _id: Scalars['ObjectID'];
  location: Location;
  fromDate: Scalars['String'];
  toDate: Scalars['String'];
  title: Scalars['String'];
  description: Scalars['String'];
  stock: Scalars['Int'];
  prices: Array<Maybe<Prices>>;
  picture: Scalars['String'];
  labels: Array<Maybe<EventLabel>>;
  type: EventType;
  status: EventStatus;
  salesCount: Scalars['Int'];
};

export type EventEdge = {
  __typename?: 'EventEdge';
  cursor: Scalars['String'];
  node: Event;
};

export type EventConnection = {
  __typename?: 'EventConnection';
  edges: Array<Maybe<EventEdge>>;
  pageInfo: PageInfo;
};

export type Ticket = {
  __typename?: 'Ticket';
  _id: Scalars['ObjectID'];
  event: Event;
  user: User;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ObjectID'];
  provider: Scalars['String'];
  providerId?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  avatar: Scalars['String'];
  savedEvents: Array<Maybe<Event>>;
  tickets: Array<Maybe<Ticket>>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
  endCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  event?: Maybe<Event>;
  events: EventConnection;
};

export type QueryeventArgs = {
  id: Scalars['ObjectID'];
};

export type QueryeventsArgs = {
  order?: InputMaybe<Order>;
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['ObjectID']>;
  query?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Date>;
  label?: InputMaybe<Scalars['String']>;
  saved?: InputMaybe<Scalars['Boolean']>;
};

export type AddLocationInput = {
  label: Scalars['String'];
  address: Scalars['String'];
};

export type AddPricesInput = {
  label: Scalars['String'];
  price: Scalars['Float'];
};

export type AddEventInput = {
  location: AddLocationInput;
  fromDate: Scalars['String'];
  toDate: Scalars['String'];
  title: Scalars['String'];
  description: Scalars['String'];
  stock: Scalars['Int'];
  prices?: InputMaybe<Array<InputMaybe<AddPricesInput>>>;
  picture?: InputMaybe<Scalars['String']>;
  labels?: InputMaybe<Array<InputMaybe<EventLabel>>>;
  type?: InputMaybe<EventType>;
  status?: InputMaybe<EventStatus>;
  salesCount?: InputMaybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addEvent?: Maybe<Event>;
  addSavedEvent?: Maybe<Event>;
  removeSavedEvent?: Maybe<Event>;
};

export type MutationaddEventArgs = {
  input: AddEventInput;
};

export type MutationaddSavedEventArgs = {
  id: Scalars['ObjectID'];
};

export type MutationremoveSavedEventArgs = {
  id: Scalars['ObjectID'];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  ObjectID: ResolverTypeWrapper<Scalars['ObjectID']>;
  Order: Order;
  Date: Date;
  EventStatus: EventStatus;
  EventLabel: EventLabel;
  EventType: EventType;
  Location: ResolverTypeWrapper<Location>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Prices: ResolverTypeWrapper<Prices>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Event: ResolverTypeWrapper<Event>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  EventEdge: ResolverTypeWrapper<EventEdge>;
  EventConnection: ResolverTypeWrapper<EventConnection>;
  Ticket: ResolverTypeWrapper<Ticket>;
  User: ResolverTypeWrapper<User>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Query: ResolverTypeWrapper<{}>;
  AddLocationInput: AddLocationInput;
  AddPricesInput: AddPricesInput;
  AddEventInput: AddEventInput;
  Mutation: ResolverTypeWrapper<{}>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  ObjectID: Scalars['ObjectID'];
  Location: Location;
  String: Scalars['String'];
  Prices: Prices;
  Float: Scalars['Float'];
  Event: Event;
  Int: Scalars['Int'];
  EventEdge: EventEdge;
  EventConnection: EventConnection;
  Ticket: Ticket;
  User: User;
  PageInfo: PageInfo;
  Boolean: Scalars['Boolean'];
  Query: {};
  AddLocationInput: AddLocationInput;
  AddPricesInput: AddPricesInput;
  AddEventInput: AddEventInput;
  Mutation: {};
};

export interface ObjectIDScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['ObjectID'], any> {
  name: 'ObjectID';
}

export type LocationResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location'],
> = {
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PricesResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes['Prices'] = ResolversParentTypes['Prices'],
> = {
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event'],
> = {
  _id?: Resolver<ResolversTypes['ObjectID'], ParentType, ContextType>;
  location?: Resolver<ResolversTypes['Location'], ParentType, ContextType>;
  fromDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  toDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stock?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  prices?: Resolver<Array<Maybe<ResolversTypes['Prices']>>, ParentType, ContextType>;
  picture?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Array<Maybe<ResolversTypes['EventLabel']>>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['EventType'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['EventStatus'], ParentType, ContextType>;
  salesCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventEdgeResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes['EventEdge'] = ResolversParentTypes['EventEdge'],
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Event'], ParentType, ContextType>;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventConnectionResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes['EventConnection'] = ResolversParentTypes['EventConnection'],
> = {
  edges?: Resolver<Array<Maybe<ResolversTypes['EventEdge']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TicketResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes['Ticket'] = ResolversParentTypes['Ticket'],
> = {
  _id?: Resolver<ResolversTypes['ObjectID'], ParentType, ContextType>;
  event?: Resolver<ResolversTypes['Event'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User'],
> = {
  _id?: Resolver<ResolversTypes['ObjectID'], ParentType, ContextType>;
  provider?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  providerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  avatar?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  savedEvents?: Resolver<Array<Maybe<ResolversTypes['Event']>>, ParentType, ContextType>;
  tickets?: Resolver<Array<Maybe<ResolversTypes['Ticket']>>, ParentType, ContextType>;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageInfoResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo'],
> = {
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  event?: Resolver<
    Maybe<ResolversTypes['Event']>,
    ParentType,
    ContextType,
    RequireFields<QueryeventArgs, 'id'>
  >;
  events?: Resolver<
    ResolversTypes['EventConnection'],
    ParentType,
    ContextType,
    RequireFields<QueryeventsArgs, 'order' | 'first'>
  >;
};

export type MutationResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = {
  addEvent?: Resolver<
    Maybe<ResolversTypes['Event']>,
    ParentType,
    ContextType,
    RequireFields<MutationaddEventArgs, 'input'>
  >;
  addSavedEvent?: Resolver<
    Maybe<ResolversTypes['Event']>,
    ParentType,
    ContextType,
    RequireFields<MutationaddSavedEventArgs, 'id'>
  >;
  removeSavedEvent?: Resolver<
    Maybe<ResolversTypes['Event']>,
    ParentType,
    ContextType,
    RequireFields<MutationremoveSavedEventArgs, 'id'>
  >;
};

export type Resolvers<ContextType = MercuriusContext> = {
  ObjectID?: GraphQLScalarType;
  Location?: LocationResolvers<ContextType>;
  Prices?: PricesResolvers<ContextType>;
  Event?: EventResolvers<ContextType>;
  EventEdge?: EventEdgeResolvers<ContextType>;
  EventConnection?: EventConnectionResolvers<ContextType>;
  Ticket?: TicketResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
};

export type Loader<TReturn, TObj, TParams, TContext> = (
  queries: Array<{
    obj: TObj;
    params: TParams;
  }>,
  context: TContext & {
    reply: import('fastify').FastifyReply;
  },
) => Promise<Array<import('mercurius-codegen').DeepPartial<TReturn>>>;
export type LoaderResolver<TReturn, TObj, TParams, TContext> =
  | Loader<TReturn, TObj, TParams, TContext>
  | {
      loader: Loader<TReturn, TObj, TParams, TContext>;
      opts?: {
        cache?: boolean;
      };
    };
export interface Loaders<
  TContext = import('mercurius').MercuriusContext & {
    reply: import('fastify').FastifyReply;
  },
> {
  Location?: {
    label?: LoaderResolver<Scalars['String'], Location, {}, TContext>;
    address?: LoaderResolver<Scalars['String'], Location, {}, TContext>;
  };

  Prices?: {
    label?: LoaderResolver<Scalars['String'], Prices, {}, TContext>;
    price?: LoaderResolver<Scalars['Float'], Prices, {}, TContext>;
  };

  Event?: {
    _id?: LoaderResolver<Scalars['ObjectID'], Event, {}, TContext>;
    location?: LoaderResolver<Location, Event, {}, TContext>;
    fromDate?: LoaderResolver<Scalars['String'], Event, {}, TContext>;
    toDate?: LoaderResolver<Scalars['String'], Event, {}, TContext>;
    title?: LoaderResolver<Scalars['String'], Event, {}, TContext>;
    description?: LoaderResolver<Scalars['String'], Event, {}, TContext>;
    stock?: LoaderResolver<Scalars['Int'], Event, {}, TContext>;
    prices?: LoaderResolver<Array<Maybe<Prices>>, Event, {}, TContext>;
    picture?: LoaderResolver<Scalars['String'], Event, {}, TContext>;
    labels?: LoaderResolver<Array<Maybe<EventLabel>>, Event, {}, TContext>;
    type?: LoaderResolver<EventType, Event, {}, TContext>;
    status?: LoaderResolver<EventStatus, Event, {}, TContext>;
    salesCount?: LoaderResolver<Scalars['Int'], Event, {}, TContext>;
  };

  EventEdge?: {
    cursor?: LoaderResolver<Scalars['String'], EventEdge, {}, TContext>;
    node?: LoaderResolver<Event, EventEdge, {}, TContext>;
  };

  EventConnection?: {
    edges?: LoaderResolver<Array<Maybe<EventEdge>>, EventConnection, {}, TContext>;
    pageInfo?: LoaderResolver<PageInfo, EventConnection, {}, TContext>;
  };

  Ticket?: {
    _id?: LoaderResolver<Scalars['ObjectID'], Ticket, {}, TContext>;
    event?: LoaderResolver<Event, Ticket, {}, TContext>;
    user?: LoaderResolver<User, Ticket, {}, TContext>;
  };

  User?: {
    _id?: LoaderResolver<Scalars['ObjectID'], User, {}, TContext>;
    provider?: LoaderResolver<Scalars['String'], User, {}, TContext>;
    providerId?: LoaderResolver<Maybe<Scalars['String']>, User, {}, TContext>;
    firstName?: LoaderResolver<Scalars['String'], User, {}, TContext>;
    lastName?: LoaderResolver<Scalars['String'], User, {}, TContext>;
    email?: LoaderResolver<Scalars['String'], User, {}, TContext>;
    avatar?: LoaderResolver<Scalars['String'], User, {}, TContext>;
    savedEvents?: LoaderResolver<Array<Maybe<Event>>, User, {}, TContext>;
    tickets?: LoaderResolver<Array<Maybe<Ticket>>, User, {}, TContext>;
  };

  PageInfo?: {
    hasNextPage?: LoaderResolver<Scalars['Boolean'], PageInfo, {}, TContext>;
    hasPreviousPage?: LoaderResolver<Scalars['Boolean'], PageInfo, {}, TContext>;
    startCursor?: LoaderResolver<Maybe<Scalars['String']>, PageInfo, {}, TContext>;
    endCursor?: LoaderResolver<Maybe<Scalars['String']>, PageInfo, {}, TContext>;
  };
}
declare module 'mercurius' {
  interface IResolvers extends Resolvers<import('mercurius').MercuriusContext> {}
  interface MercuriusLoaders extends Loaders {}
}
