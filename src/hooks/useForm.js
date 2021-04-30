import { useState } from "react";

export const useForm = (intialValue) => {
  const [values, setValues] = useState(intialValue);
  return [
    values,
    (e) =>
      setValues({
        ...values,
        [e.target.name]: e.target.values
      })
  ];
};
