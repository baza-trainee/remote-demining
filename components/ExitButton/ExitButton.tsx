import ExitIcon from "@/public/images/icons/buttons/logout.svg";

import IconButton from '../IconButton/IconButton';

import css from './exitButton.module.css';

const ExitButton: React.FC = () => {

    return (
    <>
      <IconButton
        icon={ExitIcon}
        label="Вихід"
        width="120px"
        height="48px"
        gap="16px"
        color="#356CC6"
      />
    </>
  );
};

export default ExitButton;