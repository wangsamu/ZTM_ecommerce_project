import React, { useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import Button from "../button/Button";
import FormInput from "../form-input/FormInput";
import "./sign-up-form.styles.scss";

const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    //confirm that password matches
    if (password !== confirmPassword) {
      alert("password do not match!");
      return;
    }

    try {
      //check if user is authenticated with email and password
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      //create a user document with data introduced
      await createUserDocumentFromAuth(user, {
        displayName,
      });
      refreshFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use!");
      } else {
        console.log(error.message);
      }
    }
  };

  const refreshFormFields = () => {
    setFormFields(defaultFormField);
  };

  const formInputList = [
    {
      label: "Display name",
      inputOptions: {
        type: "text",
        name: "displayName",
        onChange: handleChange,
        value: displayName,
      },
    },
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
    {
      label: "Confirm Password",
      inputOptions: {
        type: "password",
        name: "confirmPassword",
        onChange: handleChange,
        value: confirmPassword,
      },
    },
  ];
  return (
    <div className="sign-up-container">
      <h2>Don't have an account yet?</h2>
      <span>Sign up in a just a few seconds!</span>
      <form onSubmit={handleSubmit}>
        {formInputList.map((inputs) => (
          <FormInput
            key={inputs.label}
            label={inputs.label}
            inputOptions={inputs.inputOptions}
          />
        ))}
        <Button children="Sign In" type="submit" />
      </form>
    </div>
  );
}

export default SignUpForm;
