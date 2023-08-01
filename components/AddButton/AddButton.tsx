import AddIcon from '@/public/images/icons/buttons/add.svg';

import IconButton from '../IconButton/IconButton'

import css from './addButton.module.css'

const AddButton: React.FC = () => {

    return (
    <>
      <IconButton
        icon={AddIcon} 
        label="Додати пункт"
        width="197px"
        height="48px"
        color='#4285F4'
        border="1px solid #4285F4"
        gap="9px"
      />
    </>
  );
};

export default AddButton;

