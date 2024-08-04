import { userInfo } from "@/shared/consts";
import { searchInArray, useDebounce } from "@/shared/lib";
import { filterArray } from "@/shared/lib/helpers/filterArray";

export const useSearchUsers = (
  callback: React.Dispatch<React.SetStateAction<userInfo[]>>, 
  arr: userInfo[], 
  property: keyof userInfo
) => {
  const debouncedSearch = useDebounce(
    (filterValue: string) => {
      switch(localStorage.getItem('filter')) {
        case 'Присутствующим':
          const online = filterArray(arr, 'online', true);

          if(filterValue.length > 0) {
            const filteredOnline = searchInArray(online, property, filterValue);
            callback(filteredOnline);
          } else {
            callback(online);
          }

          break;

        case 'Отсутсвующим':
          const offline = filterArray(arr, 'online', false);

          if(filterValue.length > 0) {
            const filteredOffline = searchInArray(offline, property, filterValue);
            callback(filteredOffline);
          } else {
            callback(offline);
          }

          break;

        default:
          const filteredArr = searchInArray(arr, property, filterValue);
          callback(filteredArr);
      }
    }, 
    500
  );

  return debouncedSearch;
};