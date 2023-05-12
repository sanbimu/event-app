export function formatDates(fromDate: string, toDate: string): string {
  const start = new Date(fromDate);
  const end = new Date(toDate);

  const startDay = start.getUTCDate();
  const endDay = end.getUTCDate();
  const startMonth = start
    .toLocaleString('default', { month: 'long', timeZone: 'UTC' })
    .toUpperCase();
  const endMonth = end
    .toLocaleString('default', { month: 'long', timeZone: 'UTC' })
    .toUpperCase();
  const startHour = start.getUTCHours().toString().padStart(2, '0');
  const endHour = end.getUTCHours().toString().padStart(2, '0');
  const startMinute = start.getUTCMinutes().toString().padStart(2, '0');
  const endMinute = end.getUTCMinutes().toString().padStart(2, '0');

  const startString = `${startDay} ${startMonth} ${startHour}:${startMinute}`;

  if (startDay === endDay) {
    return `${startString} ⬩ ${endHour}:${endMinute}`;
  }

  return `${startString} ⬩ ${endDay} ${endMonth} ${endHour}:${endMinute}`;
}

export function formatCurrency(amount: number): string {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
  });

  return formatter.format(Number(amount)).replace(/^(\D+)/, '$1 ');
}
