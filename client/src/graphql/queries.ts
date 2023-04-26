import { gql } from 'urql';

export const Me = gql`
  query Me {
    me {
      _id
      firstName
      lastName
      avatar
    }
  }
`;
