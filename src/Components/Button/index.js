import React from 'react';
import { Button } from './styles';
import PropTypes from 'prop-types';

function PrimaryButton({
  children,
  type = 'button',
  onClick = () => {},
  disabled = false,
}) {
  return (
    <Button type={type} onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  );
}

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
};

export default PrimaryButton;
