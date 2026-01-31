export interface FormFieldModel {
  key: string;
  label?: string;
  type: string;
  disabled?: boolean;
  options?: { label: string; value: any }[];
  validators?: any;
  required?: boolean;
}

export interface Employee {
  [key: string]: any;
}
