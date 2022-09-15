import React, { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

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
      const userDocRef = await createUserDocumentFromAuth(user, {
        displayName,
      });

      if (userDocRef) {
        console.log("User created successfully!");
        console.log(userDocRef);
        refreshFormFields();
      }
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
  return (
    <div>
      <h1>Sign up now!</h1>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <label>Email</label>
        <input
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <label>Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
