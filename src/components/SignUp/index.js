import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import useSignUp from "../../Hooks/useSignUp";

import SignUpScreen from "./SignUp";

const SignUp = () => {
  let navigate = useNavigate()
  const { call, loading, error } = useSignUp()
  const [submitted, setSubmittted] = useState(false)
  const [values, setValues] = useState({
    emailAddress: '',
    username: '',
    password: ''
  });

  const handleEmailInputChange = event => {
    event.persist();
    setValues(values => ({
      ...values,
      emailAddress: event.target.value,
    }));
  };

  const handlePasswordInputChange = event => {
    event.persist();
    setValues(values => ({
      ...values,
      password: event.target.value,
    }));
  };

  const handleUsernameInputChange = event => {
    event.persist();
    setValues(values => ({
      ...values,
      username: event.target.value,
    }));
  };

  const submit = e => {
    e.preventDefault();
    setSubmittted(true)
    call(values)
    //call(values).then(() => navigate('/'))
  }

  if (error) console.log(error)

  return (
    <SignUpScreen
      values={values}
      submit={submit}
      submitted={submitted}
      setSubmittted={setSubmittted}
      handleEmailInputChange={handleEmailInputChange}
      handlePasswordInputChange={handlePasswordInputChange}
      handleUsernameInputChange={handleUsernameInputChange} />
  )
}

export default SignUp
