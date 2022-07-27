import { Select, InputContainer } from "./StyledComponents";

function SelectInput(props) {
  const { value, handleChange } = props;
  return (
    <InputContainer>
      <Select name="genre" onChange={(e) => handleChange(e)}>
        <option value={value}>وحشت/هیجانی</option>
        <option value="درام">درام</option>
        <option value="تاریخی">تاریخی</option>
        <option value="علمی تخیلی">علمی تخیلی</option>
        <option value="جنگی">جنگی</option>
      </Select>
    </InputContainer>
  );
}

export default SelectInput;
