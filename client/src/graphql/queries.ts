import { gql } from 'urql';

export const Me = gql`
  query Me {
    me {
      _id
      info {
        contact {
          firstName
          lastName
        }
      }
      avatar
    }
  }
`;
