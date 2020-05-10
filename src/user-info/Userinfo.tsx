import React from "react";

import "./Userinfo.scss";
import Link from "@material-ui/core/Link";

const UserInfo = (props: any) => (
  <div className="Userinfo">
    <h3>User information comes here </h3>
    {!props.currentUser ? (
      <h3>Login or Sign up to the page</h3>
    ) : (
      <>
        {" "}
        <span>
          Your mail id is {props.currentUser?.email} and Display name is{" "}
          {props.currentUser?.displayName}
        </span>
        <Link className="logout">Logout</Link>
      </>
    )}
  </div>
);

export default UserInfo;
