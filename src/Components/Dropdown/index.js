import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  DropdownButton,
  DropdownContainer,
  DropdownContent,
  DropdownItem,
} from './styles';

function Dropdown() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const onClickMenu = (tela) => {
    navigate(tela);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton onClick={toggleDropdown}>Menu</DropdownButton>
      <DropdownContent isOpen={isOpen}>
        <DropdownItem href="#option1" onClick={() => onClickMenu('/login')}>
          Option 1
        </DropdownItem>
        <DropdownItem href="#option2" onClick={() => onClickMenu('/cadastro')}>
          Option 2
        </DropdownItem>
        <DropdownItem href="#option3">Option 3</DropdownItem>
      </DropdownContent>
    </DropdownContainer>
  );
}

export default Dropdown;
