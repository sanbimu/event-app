import type { Query, Mutation } from './schema';
import { useQuery as urqlQuery, useMutation as urqlMutation } from 'urql';

export const useQuery = urqlQuery<Query>;
export const useMutation = urqlMutation<Mutation>;
