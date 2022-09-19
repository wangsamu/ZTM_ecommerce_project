import React, { useState } from "react";

import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import Button from "../button/Button";
import FormInput from "../form-input/FormInput";
import "./sign-in-form.styles.scss";

const defaultFormField = {
  email: "",
  password: "",
};

function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // check if user is authenticated with email and password
      const { user } = await signInAuthWithEmailAndPassword(email, password);
      console.log("Logged in successfully!");
      refreshFormFields();
    } catch (error) {
      if (
        error.code === "auth/wrong-password" ||
        error.code === "auth/user-not-found"
      ) {
        alert("invalid credentials!");
      }
      console.log(error.message);
    }
  };

  const refreshFormFields = () => {
    setFormFields(defaultFormField);
  };

  const formInputList = [
    {
      label: "Email",
      inputOptions: {
        type: "email",
        name: "email",
        onChange: handleChange,
        value: email,
      },
    },
    {
      label: "Password",
      inputOptions: {
        type: "password",
        name: "password",
        onChange: handleChange,
        value: password,
      },
    },
  ];

  const logGoogleUser = async () => {
    await signInWithGooglePopup();
  };

  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in using email and password</span>
      <form onSubmit={handleSubmit}>
        {formInputList.map((inputs) => (
          <FormInput
            key={inputs.label}
            label={inputs.label}
            inputOptions={inputs.inputOptions}
          />
        ))}
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button buttonType="google" type="button" onClick={logGoogleUser}>
            Sign-in with Google
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
