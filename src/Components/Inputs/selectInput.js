import { Select, InputContainer } from "./StyledComponents";

function SelectInput(props) {
  const { label, placeholder, name, width, height } = props;
  return (
    <InputContainer>
      <Select>
        <option>وحشت/تخیلی</option>
        <option>درام</option>
        <option>تاریخی</option>
        <option>علمی تخیلی</option>
        <option>جنگی</option>
      </Select>
    </InputContainer>
  );
}

export default SelectInput;
