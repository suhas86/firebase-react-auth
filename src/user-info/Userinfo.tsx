import React from "react";

import "./Userinfo.scss";
import Link from "@material-ui/core/Link";

const UserInfo = (props:any) => (
  <div className="Userinfo">
    <h3>User information comes here </h3>
    <span>Your mail id is abc@test.com and Display name is Abc test</span>
    <Link className="logout">Logout</Link>
  </div>
);

export default UserInfo;
