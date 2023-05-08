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
    $saved: Boolean
  ) {
    events(
      order: $order
      first: $first
      after: $after
      query: $query
      date: $date
      label: $label
      saved: $saved
    ) {
      edges {
        node {
          _id
          title
          fromDate
          toDate
          picture
          location {
            label
          }
        }
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
    }
  }
`;

export const Event = gql`
  query Event($id: ObjectID!) {
    event(id: $id) {
      _id
      location {
        label
        address
      }
      fromDate
      toDate
      title
      description
      stock
      prices {
        label
        price
      }
      picture
      labels
      type
      status
      salesCount
    }
  }
`;
