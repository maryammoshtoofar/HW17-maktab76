import {
  LabelContainer,
  InputContainer,
  Label,
  InputElement,
  SmallRect,
} from "./styledcomponents";

function SelectElement(props) {
  const { label, name } = props;
  return (
    <InputContainer>
      <LabelContainer>
        <Label htmlFor={name}>{label}</Label>
        <SmallRect />
      </LabelContainer>
      <InputElement as="select" name={name}>
        <option>وحشت/هیجانی</option>
        <option>درام</option>
        <option>جنگی</option>
        <option>تاریخی</option>
        <option>علمی/تخیلی</option>
      </InputElement>
    </InputContainer>
  );
}

export default SelectElement;
