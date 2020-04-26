import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import "./Signup.scss";

const Signup = () => (
  <div className="Signup">
    <h3> Sign up to you application!!!</h3>
    <form noValidate autoComplete="off">
    <TextField label="User name" variant="outlined" fullWidth />
      <TextField label="Email" variant="outlined" fullWidth />
      <TextField label="Password" variant="outlined" fullWidth />
      <Button type="submit" fullWidth variant="contained" color="primary">
        Sign Up
      </Button>
    </form>
  </div>
);

export default Signup;
