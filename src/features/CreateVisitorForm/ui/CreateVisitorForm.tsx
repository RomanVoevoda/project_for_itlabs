import { useCountContext, useFormBuilder } from '@/shared/lib';
import { FC } from 'react';
import { CreateVisitorFormProps } from './types';
import { createVisitor } from '../lib/helpers/createVisitor';
import { userList } from '@/shared/consts';

const CreateVisitorForm: FC<CreateVisitorFormProps> = ({closeForm, formId, formFieldsContainerId}) => {
  const {count, setCount} = useCountContext();

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
      createVisitor(formFieldsContainerId);
      setCount(count + 1)
      console.log(userList)
    })
  
  const form = builder.build();
  builder.clearRefs();

  return (
    form
  );
};

export default CreateVisitorForm;