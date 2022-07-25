import {
  LabelContainer,
  InputContainer,
  Label,
  InputElement,
  SmallRect,
} from "./styledcomponents";

function TextArea(props) {
  const { label, name } = props;
  return (
    <InputContainer>
      <LabelContainer>
        <Label htmlFor={name}>{label}</Label>
        <SmallRect />
      </LabelContainer>
      <InputElement as="textarea" name={name}></InputElement>
    </InputContainer>
  );
}

export default TextArea;
