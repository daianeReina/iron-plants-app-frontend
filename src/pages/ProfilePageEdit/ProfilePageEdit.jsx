import "./ProfilePageEdit.css";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

function ProfilePageEdit() {
  const { isLoggedIn, user } = useContext(AuthContext);
  return (
    <div>
      <h1> Edit you settings</h1>
    </div>
  );
}

export default ProfilePageEdit;
