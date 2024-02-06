import { InputText } from "./Style";

export const Input = ({
  placeholder,
  editable,
  fieldValue,
  onChangeText,
  keyType,
  maxlength,
}) => {
  return (
    <InputText
      placeholder={placeholder}
      editable={editable}
      keyboardType={keyType}
      maxlength={maxlength}
      value={fieldValue}
      onChangeText={onChangeText}
    />
  );
};
