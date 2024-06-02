import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ErrorMessage,
  Fieldset,
  Input,
  Label,
  ViewPasswordIcon,
} from './styles';
import visible from '../../Images/icons/password-visible.svg';
import hidden from '../../Images/icons/password-hidden.svg';

function InputField({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  required = false,
  error = false,
  message,
}) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <Fieldset>
      <Label>{label}</Label>
      <Input
        value={value}
        name={name}
        placeholder={placeholder}
        type={type === 'password' && passwordVisible ? 'text' : type}
        onChange={onChange}
        required={required}
        error={error ? 'true' : undefined}
      />
      {type === 'password' && (
        <ViewPasswordIcon
          onClick={togglePasswordVisibility}
          src={passwordVisible ? visible : hidden}
          alt="View Password Icon"
        />
      )}
      {error ? (
        <ErrorMessage>
          <p className="error">{message}</p>
        </ErrorMessage>
      ) : (
        <ErrorMessage>
          <p className="error"></p>
        </ErrorMessage>
      )}
    </Fieldset>
  );
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.bool,
  message: PropTypes.string,
};

export default InputField;
