export interface InputProps extends Partial<Props> {
  type: 'checkbox' | 'text' | 'select';
}

interface Props {
  name: string;
  id: string;
  size: 'normal' | 'large';
  max_length: number;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | boolean;
}