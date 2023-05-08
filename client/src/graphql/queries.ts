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

export const Settings = gql`
  query Settings {
    me {
      info {
        contact {
          firstName
          lastName
          phoneNumber
        }
        home {
          address
          postalCode
          city
        }
        billing {
          name
          address
          postalCode
          city
        }
      }
    }
  }
`;
