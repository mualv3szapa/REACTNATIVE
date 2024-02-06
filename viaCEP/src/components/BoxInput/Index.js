import { Input } from "../Input/Index";
import { Label } from "../Label/Index";
import { FieldContent } from "./Style";

export const BoxInput = ({
  fieldWidth = 100,
  editable = false,
  textLabel,
  placeholder,
  fieldValue = null,
  onChangeText = null,
  keytype = "default",
  maxLength,
}) => {
  return (
    <FieldContent fieldWidth={fieldWidth}>
      <Label textLabel={textLabel} />

      <Input
        editable={editable}
        placeholder={placeholder}
        keyType={keytype}
        maxlength={maxLength}
        value={fieldValue}
        onChangeText={onChangeText} 
      />
    </FieldContent>
  );
};
