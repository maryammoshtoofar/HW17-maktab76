import {
  StyledForm,
  StyledSmallContainer,
  ButtonContainer,
} from "./StyledComponents";
import Input from "../Inputs";
import FormButton from "../Button";
import SelectInput from "../Inputs/selectInput";
import { useState } from "react";

function Form() {
  const [FormData, setFormData] = useState({
    filmName: "",
    year: "",
    director: "",
    description: "",
    genre: "",
  });

  // Controlled Inputs
  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...FormData, [name]: value });
  };

  // Destructure State
  const { filmName, year, director, description, genre } = FormData;
  return (
    <StyledForm>
      <StyledSmallContainer>
        <SelectInput value={genre} handelChange={handelChange} />
        <Input
          label="نام فیلم"
          name="filmName"
          placeholder="نام فیلم را وارد کنید"
          value={filmName}
          handelChange={handelChange}
        />
        <Input
          label="سال تولید"
          name="year"
          placeholder="سال تولید را وارد کنید"
          value={year}
          handelChange={handelChange}
        />
        <Input
          label="کارگردان"
          name="director"
          placeholder="نام کارگردان را وارد کنید"
          value={director}
          handelChange={handelChange}
        />
      </StyledSmallContainer>
      <div>
        <Input
          label="توضیحات"
          name="description"
          placeholder="توضیحات درباره فیلم"
          width="true"
          height="true"
          value={description}
          handelChange={handelChange}
        />
        <ButtonContainer>
          <FormButton primary>ذخیره</FormButton>
          <FormButton>انصراف</FormButton>
        </ButtonContainer>
      </div>
    </StyledForm>
  );
}

export default Form;
