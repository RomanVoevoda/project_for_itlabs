import { FC } from 'react';
import classes from './Form.module.scss';
import { FormProps } from './types';
import Input from '../Input/Input';
import Select from '../Select/Select';
import Button from '../Button/Button';

const Form: FC<FormProps> = ({fields}) => {
  console.log('renderform')
  return (
    <form 
      className={classes.form}
    >    
      {fields.map((field, index) => {
        if ('children' in field) { 
          return (
            <Button
              key={index + field.type}
              type={field.type}
              onClick={field.onClick}
            >
              {field.children}
            </Button>
          );
        } else if ('max_length' in field) { 
          return (
            <div className={classes.form__container} key={index + field.type}>
              {field.title &&
                <p className={classes.form__text}>
                  {field.title}
                </p>
              }
              <Input 
                size={field.size} 
                type={field.type} 
                max_length={field.max_length} 
                placeholder={field.placeholder}
              />
            </div>
          );
        } else if ('options' in field) {
          return (
            <div className={classes.form__container} key={index}>
              {field.title &&
                <p className={classes.form__text}>
                  {field.title}
                </p>
              }

              <Select 
                options={field.options}
                default_option={field.default_option}
              />
            </div>
          );
        }
        return null;
    })}
    </form>
  );
};

export default Form;