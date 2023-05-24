export const handleScrollToTop = () => {
  const scrollable = document.getElementById('scrollable')!;

  scrollable.scrollTo({ top: 0, behavior: 'smooth' });
};
