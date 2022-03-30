import { useNavigate, useLocation } from 'react-router-dom';

import { Button } from './BackButton.styled';

import { ReactComponent as Icon } from '../../img/undo.svg';

export const BackButton = () => {
  const { state } = useLocation();

  const navigate = useNavigate();
  return (
    <Button
      onClick={() => {
        navigate(state);
      }}
    >
      <Icon fill="currentcolor" wisth="40px" height="40px" />
    </Button>
  );
};
