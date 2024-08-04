import { userInfo } from "@/shared/consts";
import { userList } from "@/shared/consts";

export function createUser(formFieldsContainerId: string) {
  const formFields = document.querySelectorAll(`#${formFieldsContainerId} > *:not(p)`);

  const result: userInfo = {
    name: (formFields[0] as HTMLInputElement).value 
          ? (formFields[0] as HTMLInputElement).value 
          : 'Зубенко Михаил Петрович',

    company: (formFields[1] as HTMLInputElement).value 
             ? (formFields[1] as HTMLInputElement).value 
             : 'ООО "АСОЛЬ"',

    group: (formFields[2] as HTMLSelectElement).options[(formFields[2] as HTMLSelectElement).selectedIndex].value
           ? (formFields[2] as HTMLSelectElement).options[(formFields[2] as HTMLSelectElement).selectedIndex].value
           : 'Прохожий',

    online: formFields[3] ? (formFields[3] as HTMLInputElement).checked : false,
  };

  userList.push(result);
  return result;
}