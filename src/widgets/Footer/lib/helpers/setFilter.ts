import { noFilter, offlineFilter, onlineFilter } from "../../consts/filters"

export const setFilter = (value: string, values: string[]) => {
  switch(value) {
    case values[0]:
      return offlineFilter;
    case values[1]:
      return onlineFilter;
    case values[2]:
      return noFilter;
    default:
      return noFilter;
  }
}