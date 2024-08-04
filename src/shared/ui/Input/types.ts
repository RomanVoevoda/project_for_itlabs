export interface InputProps extends Partial<Props> {
  type: 'checkbox' | 'text' | 'select';
}

interface Props {
  title?: string;
  size: 'normal' | 'large';
  max_length: number;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}