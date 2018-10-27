import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
// Custom Imports
import __NavBar from "../../components/NavBar/NavBar";
import __Post from "../../components/Post/Post";
function ProfilePage(props) {
  return (
    <div>
      <__NavBar />

      <Typography variant="h1">Posts</Typography>
      <div style={{ height: 100, width: 100, background: "#f00" }} />
      <Grid container spacing={24}>
        <Grid item xs={12} md={4} lg={3}>
          <__Post />
        </Grid>

        <Grid item xs={12} md={4} lg={3}>
          <__Post />
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <__Post />
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <__Post />
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <__Post />
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <__Post />
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <__Post />
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <__Post />
        </Grid>
      </Grid>
    </div>
  );
}

export default ProfilePage;
