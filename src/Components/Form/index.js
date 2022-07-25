import {
  StyledForm,
  StyledSmallContainer,
  ButtonContainer,
} from "./styledcomponents";
import Input from "../Input";
import FormButton from "../Button";

function Form() {
  return (
    <StyledForm>
      <StyledSmallContainer>
        <Input label="ژانر فیلم" name="name" placeholder="وحشت/هیجانی" />

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
          <FormButton bg="#F6C90E" color="#797049">
            ذخیره
          </FormButton>
          <FormButton bg="#515050" color="#C5C5C5">
            انصراف
          </FormButton>
        </ButtonContainer>
      </div>
    </StyledForm>
  );
}

export default Form;
