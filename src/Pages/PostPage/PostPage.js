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
      <Grid container spacing={24} justify="center">
        <Grid item xs={12} md={9}>
          <Grid container spacing={24}>
            <Grid item xs={12} md={4}>
              <__Post
                imgSrc={
                  "https://source.unsplash.com/random?" +
                  Math.ceil(Math.random() * 100)
                }
                userInitials="RC"
                title="Incredible India!"
                date="12 January 2018"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <__Post
                imgSrc={
                  "https://source.unsplash.com/random?" +
                  Math.ceil(Math.random() * 100)
                }
                userInitials="RC"
                title="Incredible India!"
                date="12 January 2018"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <__Post
                imgSrc={
                  "https://source.unsplash.com/random?" +
                  Math.ceil(Math.random() * 100)
                }
                userInitials="RC"
                title="Incredible India!"
                date="12 January 2018"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <__Post
                imgSrc={
                  "https://source.unsplash.com/random?" +
                  Math.ceil(Math.random() * 100)
                }
                userInitials="RC"
                title="Incredible India!"
                date="12 January 2018"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <__Post
                imgSrc={
                  "https://source.unsplash.com/random?" +
                  Math.ceil(Math.random() * 100)
                }
                userInitials="RC"
                title="Incredible India!"
                date="12 January 2018"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <__Post
                imgSrc={
                  "https://source.unsplash.com/random?" +
                  Math.ceil(Math.random() * 100)
                }
                userInitials="RC"
                title="Incredible India!"
                date="12 January 2018"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProfilePage;
