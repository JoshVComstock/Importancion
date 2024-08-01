export interface InputData {
    label: string;
    type: string;
    placeholder: string;
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    value: string;
    required?: boolean;
    name: string;
  }
  
  export interface FormProps {
    action: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    title: string;
    inputs: InputData[];
  }