import AddIcon from '@/public/images/icons/buttons/add.svg';

import IconButton from '../IconButton/IconButton'

import css from './addButton.module.css'

const AddButton: React.FC = () => {

    return (
    <>
      <IconButton
        icon={AddIcon} 
        label="Додати пункт"
        padding="10px 28px"
        color=var(--add-button-text-color)
        border="1px solid #4285F4"
        gap="9px"
      />
    </>
  );
};

export default AddButton;

