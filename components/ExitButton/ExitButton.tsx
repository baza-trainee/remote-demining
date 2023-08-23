import ExitIcon from "@/public/images/icons/buttons/logout.svg";

import IconButton from "../IconButton/IconButton";

import css from "./exitButton.module.css";

const ExitButton: React.FC = () => {
  return (
    <>
      <IconButton
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
