import { gql } from 'urql';

export const ModifyUserInfo = gql`
  mutation ModifyUserInfo($input: ModifyUserInfoInput!) {
    modifyUserInfo(input: $input) {
      _id
    }
  }
`;

export const AddSavedEvent = gql`
  mutation AddSavedEvent($id: ObjectID!) {
    addSavedEvent(id: $id) {
      _id
    }
  }
`;
