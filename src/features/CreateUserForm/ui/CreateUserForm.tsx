import { useFormBuilder, useUsersContext } from '@/shared/lib';
import { FC } from 'react';
import { CreateUserFormProps } from './types';

const CreateUserForm: FC<CreateUserFormProps> = ({closeForm, submitForm, values}) => {
  const builder = useFormBuilder()
    .setInput('text', 'ФИО', 'ФИО', 'large', 20, values[0])
    .setInput('text', 'Компания', 'Компания',  'large', 20, values[1])
    .setSelect(['Прохожий', 'Клиент', 'Партнер'], values[2], 'Группа', 'Группа')
    .setInput('checkbox', 'Присутствие', 'Присутствие', undefined, undefined, values[3])
    .setButton('Добавить', 'primary', () => '', 'green', undefined, true)
    .setButton('Закрыть', 'primary', closeForm, 'gray', undefined, false)
    .setClosingIcon('x-mark', closeForm)
    .setForm((e: React.FormEvent<HTMLFormElement>) => {
      closeForm()
      submitForm(e)
    })
  
  const form = builder.build();
  builder.clearRefs();

  return (
    form
  );
};

export default CreateUserForm;