import type { Query, Mutation } from './schema';
import {
  useQuery as urqlQuery,
  useMutation as urqlMutation,
  AnyVariables,
  UseQueryArgs,
} from 'urql';

export const useQuery = <Variables extends AnyVariables>(
  args: UseQueryArgs<Variables, Query>,
) => {
  return urqlQuery<Query, Variables>(args);
};

export const useMutation = urqlMutation<Mutation>;
