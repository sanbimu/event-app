import { Date as IDate } from '~/graphql/schema';

export function makeDateFilter(date: IDate) {
  const currentDate = new Date();

  switch (date) {
    case IDate.TODAY:
      return { $gte: currentDate.toISOString() };
    case IDate.TOMORROW:
      const tomorrow = new Date(currentDate);
      tomorrow.setDate(tomorrow.getDate() + 1);

      return { $gte: tomorrow.toISOString() };
    case IDate.THIS_WEEKEND:
      const thisWeekendStart = new Date(currentDate);
      thisWeekendStart.setDate(currentDate.getDate() + (6 - currentDate.getDay()));

      const thisWeekendEnd = new Date(currentDate);
      thisWeekendEnd.setDate(currentDate.getDate() + (7 - currentDate.getDay()));

      return {
        $gte: thisWeekendStart.toISOString(),
        $lte: thisWeekendEnd.toISOString(),
      };
    case IDate.NEXT_WEEK:
      const nextWeekStart = new Date(currentDate);
      nextWeekStart.setDate(currentDate.getDate() + (13 - currentDate.getDay()));

      const nextWeekEnd = new Date(currentDate);
      nextWeekEnd.setDate(currentDate.getDate() + (14 - currentDate.getDay()));

      return {
        $gte: nextWeekStart.toISOString(),
        $lte: nextWeekEnd.toISOString(),
      };
  }
}
