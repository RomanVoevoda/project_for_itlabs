import { userInfo } from "@/shared/consts";
import { userList } from "@/shared/consts";
import { serializeForm } from "@/shared/lib";

export function createUser(eventTarget: HTMLFormElement, id?: number) {
  const formFields = serializeForm(eventTarget);

  const result: userInfo = {
    name: 'Зубенко Михаил Петрович',
    company: 'ООО"АСОЛЬ"',
    group: 'Прохожий',
    online: false,
    id: id ? id : userList.length + 1
  };

  formFields.forEach(field => {
    if(typeof field.value === 'boolean') {
      result.online = field.value;
    } else {
      switch(field.name) {
        case 'ФИО':
          if(field.value) result.name = field.value;
          break;
        case 'Компания':
          if(field.value) result.company = field.value;
          break;
        case 'Группа':
          if(field.value) result.group = field.value;
          break;
      }
    }
  });

  console.log(result);
  userList.push(result);
  return result;
}