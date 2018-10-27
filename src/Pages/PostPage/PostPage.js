import React from "react";
import Typography from "@material-ui/core/Typography";
// Custom Imports
import __NavBar from "../../components/NavBar/NavBar";
function ProfilePage(props) {
  return (
    <div>
      <__NavBar />
      <Typography variant="h1">Posts</Typography>
    </div>
  );
}

export default ProfilePage;
