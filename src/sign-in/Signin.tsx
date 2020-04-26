import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import {signInWithGoogle} from "../firebase"

import "./Signin.scss";

const Signin = () => (
  <div className="Signin">
    <h3> Sign in to you application!!!</h3>
    <form noValidate autoComplete="off">
      <TextField label="Email" variant="outlined" fullWidth />
      <TextField label="Password" variant="outlined" fullWidth />
      <Button type="submit" fullWidth variant="contained" color="primary">
        Sign In
      </Button>
      <Button type="button" fullWidth variant="contained" onClick = {signInWithGoogle} color="secondary">
        Sign In with google
      </Button>
    </form>
  </div>
);

export default Signin;
