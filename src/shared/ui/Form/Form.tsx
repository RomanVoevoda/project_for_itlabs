import { FC } from 'react';
import classes from './Form.module.scss';
import { FormProps } from './types';

const Form: FC<FormProps> = ({fields, buttons, icon, onSubmit}) => {
  console.log('renderform')

  return (
    <form
      className={classes.form}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e);
      }}
    > 
      <div className={classes.form__icon_container}>
        {icon}
      </div>
      
      <div className={classes.form__container}>
        {...fields}
      </div>

      <div className={classes.form__buttons_container}>
        {...buttons}
      </div>
    </form>
  );
};

export default Form;