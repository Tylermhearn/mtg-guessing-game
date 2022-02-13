import React, { useState } from "react";

import Login from "./Login";

const LoginScreen = () => {
  const [submitted, setSubmittted] = useState(false)
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const handleEmailInputChange = event => {
    event.persist();
    setValues(values => ({
      ...values,
      email: event.target.value,
    }));
  };

  const handlePasswordInputChange = event => {
    event.persist();
    setValues(values => ({
      ...values,
      password: event.target.value,
    }));
  };

  const submit = e => {
    e.preventDefault();
    setSubmittted(true)
    console.log(values);
  }

  return (
    <Login
      values={values}
      submit={submit}
      submitted={submitted}
      setSubmittted={setSubmittted}
      handleEmailInputChange={handleEmailInputChange}
      handlePasswordInputChange={handlePasswordInputChange} />
  )
}

export default LoginScreen
