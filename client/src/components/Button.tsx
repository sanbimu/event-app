import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const Button: React.FC<Props> = ({ text, ...props }) => {
  return (
    <button
      {...props}
      className={`${props.className} whitespace-nowrap border border-black uppercase text-dark-grey hover:text-dark-pink`}
    >
      {text}
      {props.children}
    </button>
  );
};

export default Button;
