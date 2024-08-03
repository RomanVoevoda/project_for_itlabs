import { useFormBuilder } from '@/shared/lib';
import { FC } from 'react';
import { CreateVisitorFormProps } from './types';

const CreateVisitorForm: FC<CreateVisitorFormProps> = ({onSubmit, closeForm}) => {
  const builder = useFormBuilder()
    .setInput('text', 'large', 20, 'ФИО')
    .setInput('text', 'large', 20, 'Компания')
    .setSelect(['Прохожий', 'Клиент', 'Партнер'], 'Выбрать', 'Группа')
    .setInput('checkbox', undefined, undefined, 'Присутствие')
    .setButton('Добавить', 'primary', onSubmit, 'green', undefined, true)
    .setButton('Закрыть', 'primary', closeForm, 'gray', undefined, false)
    .setClosingIcon('x-mark', closeForm)
  
  const form = builder.build();
  builder.clearRefs();

  return (
    form
  );
};

export default CreateVisitorForm;