import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
// Custom Imports
import __Post from "../../components/Post/Post";
function ProfilePage(props) {
  return (
    <div>
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
            userInitials="AK"
            title="It's all about JS"
            date="15 January 2018"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <__Post
            imgSrc={
              "https://source.unsplash.com/random?" +
              Math.ceil(Math.random() * 100)
            }
            userInitials="PC"
            title="Why nature"
            date="20 March 2018"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <__Post
            imgSrc={
              "https://source.unsplash.com/random?" +
              Math.ceil(Math.random() * 100)
            }
            userInitials="ZO"
            title="Trapped in Work"
            date="05 May 2018"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <__Post
            imgSrc={
              "https://source.unsplash.com/random?" +
              Math.ceil(Math.random() * 100)
            }
            userInitials="RK"
            title="My journey as a CEO"
            date="22 July 2018"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <__Post
            imgSrc={
              "https://source.unsplash.com/random?" +
              Math.ceil(Math.random() * 100)
            }
            userInitials="DK"
            title="Why I failed"
            date="15 August 2018"
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <__Post
            imgSrc={
              "https://source.unsplash.com/random?" +
              Math.ceil(Math.random() * 100)
            }
            userInitials="PK"
            title="Top 10 movie streaming services"
            date="10 September 2018"
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <__Post
            imgSrc={
              "https://source.unsplash.com/random?" +
              Math.ceil(Math.random() * 100)
            }
            userInitials="SR"
            title="Music is Life"
            date="11 October 2018"
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <__Post
            imgSrc={
              "https://source.unsplash.com/random?" +
              Math.ceil(Math.random() * 100)
            }
            userInitials="CS"
            title="The era of being online"
            date="25 October 2018"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default ProfilePage;
