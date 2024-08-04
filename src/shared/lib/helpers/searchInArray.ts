export const searchInArray = <T>(arr: T[], property: keyof T, filter: string): T[] => {
  const normalizedFilter = filter.toLowerCase().trim();

  return arr.filter(item => {
    if (typeof item[property] === 'string') {
      const normalizedValue = item[property].toLowerCase().trim();

      return normalizedValue.includes(normalizedFilter);
    }
    return false;
  });
}