import { gql } from 'urql';

export const ModifyUserInfo = gql`
  mutation ModifyUserInfo($input: ModifyUserInfoInput!) {
    modifyUserInfo(input: $input) {
      _id
    }
  }
`;
