import {
  LabelContainer,
  InputContainer,
  Label,
  InputElement,
  SmallRect,
} from "./StyledComponents";

function Input(props) {
  const validate = (name) => {
    console.log("validated");
    console.log(name);
  };
  const { label, placeholder, name, width, height, handleChange, value } =
    props;
  return (
    <InputContainer>
      <LabelContainer>
        <Label htmlFor={name}>{label}</Label>
        <SmallRect />
      </LabelContainer>
      <InputElement
        value={value}
        onChange={(e) => handleChange(e)}
        name={name}
        type="text"
        placeholder={placeholder}
        width={width}
        height={height}
      />
    </InputContainer>
  );
}

export default Input;
