import React, { useState } from "react";
import { mask, unMask } from "remask";

//https://www.youtube.com/watch?v=NG1Edui7rT0
//https://github.com/brunobertolini/remask
//yarn add vanilla-masker remask

console.log(mask("99999999999", ["999.999.999-99", "99.999.999/9999-99"]));

const InputMask = () => {

  const [value, setValue] = useState("");

  const onChange = (event) => {

    const cleanMask = unMask(event.target.value);
    const getMask = mask(cleanMask, ["999.999.999-99", "99.999.999/9999-99"]);

    setValue(getMask);
  };

  return (
    <>
      <input
        type="text"
        name="doc"
        onChange={onChange}
        value={value}
        placeholder="Digite CPF ou CNPJ"
      />
    </>
  );
};

export default InputMask;
