export function formatDateToYYYYMMDD(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export function isDateInRange(dateToCheck: string): boolean {
  const currentDate = new Date();
  const dateForCheck = new Date(dateToCheck);

  if (dateForCheck.getMonth() >= currentDate.getMonth()) {
    if (
      dateForCheck.getDate() >= currentDate.getDate() &&
      dateForCheck.getMonth() === currentDate.getMonth()
    ) {
      return true;
    }
    if (dateForCheck.getMonth() !== currentDate.getMonth()) {
      return true;
    }
  }

  return false;
}

export function formatDateToMMMDDDYYY(date: Date) {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
}
