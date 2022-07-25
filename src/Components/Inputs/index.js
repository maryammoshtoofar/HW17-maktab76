import {
  LabelContainer,
  InputContainer,
  Label,
  InputElement,
  SmallRect,
} from "./styledcomponents";

function Input(props) {
  const { label, placeholder, name } = props;
  return (
    <InputContainer>
      <LabelContainer>
        <Label htmlFor={name}>{label}</Label>
        <SmallRect />
      </LabelContainer>
      <InputElement name={name} type="text" placeholder={placeholder} />
    </InputContainer>
  );
}

export default Input;
