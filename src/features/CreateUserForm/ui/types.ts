export interface CreateUserFormProps {
  closeForm: () => void;
  submitForm: (e: React.FormEvent<HTMLFormElement>) => void;
  values: FormValuesTuple;
}

export type FormValuesTuple = [string, string, string, boolean];