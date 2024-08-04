import { useFormBuilder, useUsersContext } from '@/shared/lib';
import { FC } from 'react';
import { CreateUserFormProps } from './types';
import { createUser } from '../lib/helpers/createUser';
import { userList } from '@/shared/consts';

const CreateUserForm: FC<CreateUserFormProps> = ({closeForm, formId, formFieldsContainerId}) => {
  const {renderedUsers, setRenderedUsers} = useUsersContext();

  const builder = useFormBuilder()
    .setInput('text', 'large', 20, 'ФИО')
    .setInput('text', 'large', 20, 'Компания')
    .setSelect(['Прохожий', 'Клиент', 'Партнер'], 'Выбрать', 'Группа')
    .setInput('checkbox', undefined, undefined, 'Присутствие')
    .setButton('Добавить', 'primary', () => '', 'green', undefined, true)
    .setButton('Закрыть', 'primary', closeForm, 'gray', undefined, false)
    .setClosingIcon('x-mark', closeForm)
    .setForm(formId, formFieldsContainerId, () => {
      closeForm()
      let user = createUser(formFieldsContainerId);

      switch(localStorage.getItem('filter')) {
        case 'Присутствующим':
          if(user.online) setRenderedUsers([...renderedUsers, user]);
                    
          break;
        case 'Отсутствующим':
          if(!user.online) setRenderedUsers([...renderedUsers, user]);
                      
          break;
        default:
          setRenderedUsers([...renderedUsers, user]);
      }
     
      console.log(userList)
    })
  
  const form = builder.build();
  builder.clearRefs();

  return (
    form
  );
};

export default CreateUserForm;