import { useFormBuilder, useUsersContext } from '@/shared/lib';
import { FC } from 'react';
import { CreateUserFormProps } from './types';
import { createUser } from '../lib/helpers/createUser';
import { userList } from '@/shared/consts';

const CreateUserForm: FC<CreateUserFormProps> = ({closeForm}) => {
  const {renderedUsers, setRenderedUsers} = useUsersContext();

  const builder = useFormBuilder()
    .setInput('text', 'ФИО', 'ФИО', 'large', 20)
    .setInput('text', 'Компания', 'Компания',  'large', 20)
    .setSelect(['Прохожий', 'Клиент', 'Партнер'], 'Выбрать', 'Группа', 'Группа')
    .setInput('checkbox', 'Присутствие', 'Присутствие', undefined, undefined)
    .setButton('Добавить', 'primary', () => '', 'green', undefined, true)
    .setButton('Закрыть', 'primary', closeForm, 'gray', undefined, false)
    .setClosingIcon('x-mark', closeForm)
    .setForm((e: React.FormEvent<HTMLFormElement>) => {
      closeForm()
      let user = createUser(e.currentTarget);

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