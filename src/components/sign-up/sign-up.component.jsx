import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-up.styles.scss";

import {
  auth,
  createUserProfileDocument,
} from "../../firebase/firebase.utils.js";

class SignUp extends React.Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    comfirmPassword: "",
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, displayName, password, comfirmPassword } = this.state;

    if (password !== comfirmPassword) {
      alert("Password Do not match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        comfirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { email, displayName, password, comfirmPassword } = this.state;

    return (
      <div className="sign-up">
        <h2 className="title"> I do not have a account</h2>

        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="comfirmPassword"
            value={comfirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit" onClick={this.handleSubmit}>
            SIGN UP
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
