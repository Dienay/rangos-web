import React from 'react';
import { Btn } from './styles';
import PropTypes from 'prop-types';

function Button({
  children,
  type = 'button',
  onClick = () => {},
  disabled = false,
  $variant = 'flat',
}) {
  return (
    <Btn type={type} onClick={onClick} disabled={disabled} $variant={$variant}>
      {children}
    </Btn>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
};

export default Button;
