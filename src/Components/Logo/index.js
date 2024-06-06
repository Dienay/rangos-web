import React from 'react';
import { LogoStyle } from './style';
import LogoImage from '../../Images/logo-rangos.svg';

function Logo({ variant = 'normal' }) {
  return <LogoStyle src={LogoImage} alt="Logo Rappi4" variant={variant} />;
}

export default Logo;
