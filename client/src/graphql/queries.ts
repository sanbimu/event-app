import { gql } from 'urql';

export const HelloQuery = gql`
  query Hello($name: String!) {
    hello(name: $name)
  }
`;
