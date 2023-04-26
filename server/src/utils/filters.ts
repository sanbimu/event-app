import { Date as IDate } from '~/graphql/schema';

export function makeDateFilter(date: IDate) {
  const currentDate = new Date();

  const toISOString = (date: Date) => {
    return date.toISOString().slice(0, 10);
  };

  switch (date) {
    case IDate.TODAY:
      return {
        $gte: toISOString(currentDate),
      };
    case IDate.TOMORROW:
      const tomorrow = new Date(currentDate);
      tomorrow.setDate(tomorrow.getDate() + 1);

      return {
        $gte: toISOString(tomorrow),
      };
    case IDate.THIS_WEEKEND:
      const weekendStart = new Date(currentDate);
      weekendStart.setDate(currentDate.getDate() + (6 - currentDate.getDay()));

      const weekendEnd = new Date(currentDate);
      weekendEnd.setDate(currentDate.getDate() + (7 - currentDate.getDay()));

      return {
        $gte: toISOString(weekendStart),
        $lte: toISOString(weekendEnd),
      };
    case IDate.NEXT_WEEK:
      const nextWeekStart = new Date(currentDate);
      nextWeekStart.setDate(currentDate.getDate() + (13 - currentDate.getDay()));

      const nextWeekEnd = new Date(currentDate);
      nextWeekEnd.setDate(currentDate.getDate() + (14 - currentDate.getDay()));

      return {
        $gte: toISOString(nextWeekStart),
        $lte: toISOString(nextWeekEnd),
      };
  }
}
