import { gql } from 'urql';

export const ModifyUserInfo = gql`
  mutation ModifyUserInfo($input: ModifyUserInfoInput!) {
    modifyUserInfo(input: $input) {
      _id
      info {
        contact {
          firstName
          lastName
          phoneNumber
        }
        home {
          address
          city
          postalCode
        }
        billing {
          address
          city
          name
          postalCode
        }
      }
    }
  }
`;
