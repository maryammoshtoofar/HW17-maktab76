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
    // this.validateName();
    // this.validateFamilyName();
    // this.validatePhone();
    // this.validateEmail();
    // this.validateSelect();
  };
  const { label, placeholder, name, width, height, handelChange, value } =
    props;
  return (
    <InputContainer>
      <LabelContainer>
        <Label htmlFor={name}>{label}</Label>
        <SmallRect />
      </LabelContainer>
      <InputElement
        value={value}
        onChange={(e) => handelChange(e)}
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
