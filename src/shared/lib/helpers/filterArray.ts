export const filterArray = <T>(arr: T[], property: keyof T, filter: any): T[] => {
  return arr.filter(item => item[property] === filter);
}