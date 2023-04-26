import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  provider: 'google' | 'facebook';
}

export const WindowButton: React.FC<Props> = ({ provider, ...props }) => {
  const handleClick = () => {
    window.open(
      `${import.meta.env.VITE_SERVER_HOST}/oauth2/${provider}`,
      '_blank',
      'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=500,height=500',
    );
  };

  return (
    <button onClick={handleClick} {...props}>
      {props.children}
    </button>
  );
};
