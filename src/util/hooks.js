import { useState } from 'react';

export const useForm = (callback, initialState = {}) => {
  const [ values, setValues ] = useState(initialState)
  const onChange = (e) =>  {
    setValues({ ...values, [e.target.name]: e.target.value})
  };
  const onSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    callback();
    
  };

  return {
    onChange,
    onSubmit,
    values
  };
}