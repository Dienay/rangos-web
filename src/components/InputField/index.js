import { useState } from "react";
import PropTypes from "prop-types";
import {
  ErrorMessage,
  Fieldset,
  Input,
  Label,
  ViewPasswordIcon,
} from "./styles";
import visible from "../../assets/icons/password-visible.svg";
import hidden from "../../assets/icons/password-hidden.svg";

function InputField({
  label,
  type = "text",
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

  const handleChange = (event) => {
    const inputValue = event.target.value;

    if (type === "phone" || type === "tel") {
      if (inputValue.length > 15) {
        return;
      }

      const digitsOnly = inputValue.replace(/\D/g, "");

      // Adicionando a máscara
      let maskedInput = "";
      if (digitsOnly.length > 0) {
        maskedInput += digitsOnly.substring(0, 2);
      }
      if (digitsOnly.length > 2) {
        maskedInput += " " + digitsOnly.substring(2, 7);
      }
      if (digitsOnly.length > 7) {
        maskedInput += "-" + digitsOnly.substring(7, 11);
      }

      onChange({ target: { name, value: maskedInput } });
    } else {
      onChange(event);
    }
  };

  return (
    <Fieldset>
      <Label>{label}</Label>
      <Input
        value={value}
        name={name}
        placeholder={placeholder}
        type={type === "password" && passwordVisible ? "text" : type}
        onChange={handleChange}
        required={required}
        error={error ? "true" : undefined}
      />
      {type === "password" && (
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
