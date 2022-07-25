import {
  StyledForm,
  StyledSmallForm,
  ButtonContainer,
} from "./styledcomponents";
import Input from "../Inputs";
import SelectElement from "../Inputs/SelectElement";
import TextArea from "../Inputs/TextArea";
import Button from "../Button";

function Form() {
  return (
    <StyledForm>
      <StyledSmallForm>
        <div>
          <Input
            label="نام فیلم"
            name="name"
            placeholder="نام فیلم را وارد کنید"
          />
          <SelectElement label="ژانر فیلم" name="name" />
        </div>
        <div>
          <Input
            label="کارگردان"
            name="director"
            placeholder="نام کارگردان را وارد کنید"
          />
          <Input
            label="سال تولید"
            name="year"
            placeholder="سال تولید را وارد کنید"
          />
        </div>
      </StyledSmallForm>
      <div>
        <TextArea label="توضیحات" name="description" />
        <ButtonContainer>
          <Button>ذخیره</Button>
          <Button>انصزاف</Button>
        </ButtonContainer>
      </div>
    </StyledForm>
  );
}

export default Form;
