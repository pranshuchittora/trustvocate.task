import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
// Custom Imports
import __NavBar from "../../components/NavBar/NavBar";
import __Post from "../../components/Post/Post";
import __PostContainer from '../../containers/PostsContainer/PostsContainer'
function ProfilePage(props) {
  return (
    <div>
      <__NavBar />

      <div style={{textAlign:"center",marginBottom:30}}><Typography variant="h1">Posts</Typography></div>
      
      <Grid container spacing={24} justify="center">
        <Grid item xs={12} md={9}>
          <__PostContainer />
          </Grid>
      </Grid>
    </div>
  );
}

export default ProfilePage;
