import ExitIcon from '@/public/images/icons/buttons/logout.svg';

import IconButton from '../IconButton/IconButton';
const ExitButton: React.FC = () => {
  const handleClick = () => {
    localStorage.removeItem('token');

    window.location.href = '/admin';
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        icon={ExitIcon}
        label="Вихід"
        padding="12px 8px"
        gap="16px"
        color="var(--exit-button-text-color)"
      />
    </>
  );
};

export default ExitButton;
