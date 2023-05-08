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

export const Events = gql`
  query Events(
    $order: Order
    $first: Int
    $after: ObjectID
    $query: String
    $date: Date
    $label: String
    $type: String
    $saved: Boolean
  ) {
    events(
      order: $order
      first: $first
      after: $after
      query: $query
      date: $date
      label: $label
      type: $type
      saved: $saved
    ) {
      edges {
        node {
          _id
          title
          fromDate
          toDate
          location {
            label
          }
          picture
          status
        }
      }
    }
  }
`;
