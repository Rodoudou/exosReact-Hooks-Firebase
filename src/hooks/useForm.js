import { useState, useEffect } from "react";

const useForm = (initialState, next, validate) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // ICI GESTION d'ERREURS
    if (isSubmitting) {
      /*  const isErrors = Object.keys(errors).length !== 0;  */
      // ici il ya un souci avec errors
      /* console.log("isErrors=>", isErrors); */
      /*    if (isErrors) {
        setIsSubmitting(false);
      } else {
        next();
        setIsSubmitting(false);
        setValues(initialState);
      } */
    }
  }, [errors, next, isSubmitting, initialState]);

  const handleKeyDown = event => {
    if (event.keyCode === 13 && event.ctrlKey) {
      next();
    }
  };
  const handleChange = event => {
    event.persist();
    setValues(prevValues => ({
      ...prevValues,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const errors = validate(values);
    setErrors(errors);
    setIsSubmitting(true); // ici ya in ik : quand je met a jour le state ca fait une error
  };
  return {
    handleSubmit,
    handleKeyDown,
    handleChange,
    values,
    errors
  };
};
export default useForm;
