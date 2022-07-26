import {
  StyledForm,
  StyledSmallContainer,
  ButtonContainer,
} from "./StyledComponents";
import Input from "../Inputs";
import FormButton from "../Button";
import SelectInput from "../Inputs/selectInput";

function Form() {
  return (
    <StyledForm>
      <StyledSmallContainer>
        <SelectInput/>
        <Input
          label="نام فیلم"
          name="name"
          placeholder="نام فیلم را وارد کنید"
        />
        <Input
          label="سال تولید"
          name="year"
          placeholder="سال تولید را وارد کنید"
        />
        <Input
          label="کارگردان"
          name="director"
          placeholder="نام کارگردان را وارد کنید"
        />
      </StyledSmallContainer>
      <div>
        <Input
          label="توضیحات"
          name="year"
          placeholder="توضیحات درباره فیلم"
          width="true"
          height="true"
        />
        <ButtonContainer>
          <FormButton primary>
            ذخیره
          </FormButton>
          <FormButton>
            انصراف
          </FormButton>
        </ButtonContainer>
      </div>
    </StyledForm>
  );
}

export default Form;
