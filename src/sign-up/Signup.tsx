import React,{useState} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { auth, createUserProfileDocument } from '../firebase';
import "./Signup.scss";

function Signup() {
  const [newUser,setUSer] = useState<{displayName:string,email:string,password:string}>({displayName:"",email:"",password:""});

  const {displayName,email,password}=newUser;


  const onChange =(e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUSer({ ...newUser,[name]:value });
  }

  const onSubmit = async (e:React.FormEvent<EventTarget>) => {
    e.preventDefault();
    const {user} =  await auth.createUserWithEmailAndPassword(newUser?.email,newUser.password);
    if(user) {
      await createUserProfileDocument(user,{ displayName:newUser.displayName });
      setUSer({displayName:"",email:"",password:""});
    }
  }

 return (
  <div className="Signup">
    <h3> Sign up to you application!!!</h3>
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
    <TextField label="User name" onChange={onChange} name="displayName" variant="outlined" fullWidth value={displayName} />
      <TextField label="Email" onChange={onChange} name="email" type="email" variant="outlined" fullWidth value={email} />
      <TextField label="Password" onChange={onChange} name="password" type="password" variant="outlined" fullWidth value={password} />
      <Button type="submit" fullWidth variant="contained" color="primary">
        Sign Up
      </Button>
    </form>
  </div>
)};

export default Signup;
