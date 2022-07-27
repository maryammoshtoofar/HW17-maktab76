import {
  StyledForm,
  StyledSmallContainer,
  ButtonContainer,
} from "./StyledComponents";
import Input from "../Inputs";
import FormButton from "../Button";
import SelectInput from "../Inputs/selectInput";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Form(props) {
  const [FormData, setFormData] = useState({
    filmName: "",
    year: "",
    director: "",
    description: "",
    genre: "وحشت/هیجانی",
  });
  // Clear Input
  const ClearInput = () => {
    setFormData({
      filmName: "",
      year: "",
      director: "",
      description: "",
      genre: "وحشت/هیجانی",
    });
  };

  // Controlled Inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...FormData, [name]: value });
  };

  const handleClick = (e, btnText) => {
    e.preventDefault();
    if (btnText === "ذخیره") {
      const { AddFilm } = props;
      const newFilm = {
        id: uuidv4(),
        title: filmName,
        director: director,
        genre: genre,
        year: year,
        description: description,
      };
      AddFilm(newFilm);
      ClearInput();
    } else if (btnText === "انصراف") {
      ClearInput();
    }
  };

  // Destructure State
  const { filmName, year, director, description, genre } = FormData;
  return (
    <StyledForm>
      <StyledSmallContainer>
        <SelectInput value={genre} handleChange={handleChange} />
        <Input
          label="نام فیلم"
          name="filmName"
          placeholder="نام فیلم را وارد کنید"
          value={filmName}
          handleChange={handleChange}
        />
        <Input
          label="سال تولید"
          name="year"
          placeholder="سال تولید را وارد کنید"
          value={year}
          handleChange={handleChange}
        />
        <Input
          label="کارگردان"
          name="director"
          placeholder="نام کارگردان را وارد کنید"
          value={director}
          handleChange={handleChange}
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
          handleChange={handleChange}
        />
        <ButtonContainer>
          <FormButton handleClick={handleClick} primary>
            ذخیره
          </FormButton>
          <FormButton handleClick={handleClick}>انصراف</FormButton>
        </ButtonContainer>
      </div>
    </StyledForm>
  );
}

export default Form;
