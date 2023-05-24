export interface SearchFilter {
  label: string;
  value: string;
  type: 'date' | 'price' | 'type' | 'label';
}

export const filterButtons: SearchFilter[] = [
  {
    label: 'TODAY',
    value: 'TODAY',
    type: 'date',
  },
  {
    label: 'TOMORROW',
    value: 'TOMORROW',
    type: 'date',
  },
  {
    label: 'THIS WEEKEND',
    value: 'THIS_WEEKEND',
    type: 'date',
  },
  {
    label: 'NEXT WEEK',
    value: 'NEXT_WEEK',
    type: 'date',
  },
  {
    label: 'FREE',
    value: '0',
    type: 'price',
  },
  {
    label: 'FESTIVAL',
    value: 'FESTIVAL',
    type: 'type',
  },
  {
    label: 'CONCERT',
    value: 'CONCERT',
    type: 'type',
  },
  {
    label: 'PARTY',
    value: 'PARTY',
    type: 'type',
  },
  {
    label: 'JAZZ/BLUES',
    value: 'JAZZ_BLUES',
    type: 'label',
  },
  {
    label: 'CLASSICAL',
    value: 'CLASSICAL',
    type: 'label',
  },
  {
    label: 'ELECTRONIC',
    value: 'ELECTRONIC',
    type: 'label',
  },
  {
    label: 'ROCK',
    value: 'ROCK',
    type: 'label',
  },
  {
    label: 'CULTURAL',
    value: 'CULTURAL',
    type: 'label',
  },
  {
    label: 'HIP HOP/RAP',
    value: 'HIPHOP_RAP',
    type: 'label',
  },
  {
    label: 'METAL',
    value: 'METAL',
    type: 'label',
  },
  {
    label: 'POP',
    value: 'POP',
    type: 'label',
  },
  {
    label: 'OPERA',
    value: 'OPERA',
    type: 'label',
  },
  {
    label: 'FOLK/ACOUSTIC',
    value: 'FOLK_ACOUSTIC',
    type: 'label',
  },
  {
    label: 'OTHER',
    value: 'OTHER',
    type: 'label',
  },
];

export const Questions = [
  {
    key: 'purchase-tickets',
    question: 'How do I purchase tickets?',
    answer:
      "To purchase tickets, simply browse our site for the event you're interested in and select the number of tickets you want. Then, follow the prompts to complete your purchase.",
  },
  {
    key: 'cancel-tickets',
    question: 'Can I cancel or exchange my tickets?',
    answer:
      'All ticket sales are final, and no refunds, exchanges, or cancellations will be accepted, except in the event of a canceled or rescheduled event. If an event is canceled or rescheduled, we will provide instructions on how to obtain a refund or exchange.',
  },
  {
    key: 'pdf-tickets',
    question: 'How do I get my tickets?',
    answer:
      'After you purchase your tickets, you will receive an email with your ticket(s) attached as a PDF. You can print out your ticket(s) or show them on your mobile device at the event.',
  },
  {
    key: 'stolen-ticket',
    question: 'What if I lose my ticket or it gets stolen?',
    answer:
      'Please keep your ticket(s) safe, as lost or stolen tickets will not be replaced.',
  },
  {
    key: 'transfer-ticket',
    question: 'Can I transfer my ticket to someone else?',
    answer:
      'You may not transfer, sell, or otherwise distribute your ticket to any other event or person without our prior written consent.',
  },
  {
    key: 'canceled-event',
    question: 'What if an event is canceled or rescheduled?',
    answer:
      'If an event is canceled or rescheduled, we will provide instructions on how to obtain a refund or exchange.',
  },
];
