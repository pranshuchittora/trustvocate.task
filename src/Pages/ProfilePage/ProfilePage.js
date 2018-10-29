import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import classNames from "classnames";
import { CardContent } from "@material-ui/core";
// Custom Imports
import __NavBar from "../../components/NavBar/NavBar";
import localstyles from "./ProfilePage.css";
import __PostsContainer from "../../containers/PostsContainer/PostsContainer";
function ProfilePage(props) {
  return (
    <div>
      <__NavBar />
      <Grid justify="center" container spacing={24}>
        <Grid item xs={12} md={9}>
          <Card>
            <CardContent className={classNames(localstyles.CardCont)}>
              <div>
                <img
                  src="https://picsum.photos/200/200?random"
                  style={{ borderRadius: "100%" }}
                />
                <Typography variant="h3">Pranshu Chittora</Typography>
              </div>
              <div className={classNames(localstyles.infoCont)}>
                <div>
                  <p className={classNames(localstyles.textInline)}>
                    {"Username"}
                  </p>
                  <p className={classNames(localstyles.textInline)}>
                    pranshuchittora
                  </p>
                </div>
                <div>
                  <p className={classNames(localstyles.textInline)}>
                    {"Email"}
                  </p>
                  <p className={classNames(localstyles.textInline)}>
                    pranshuchittora17@gmail.com
                  </p>
                </div>
                <div>
                  <p className={classNames(localstyles.textInline)}>
                    Contact No.
                  </p>
                  <p className={classNames(localstyles.textInline)}>
                    +91-9998772219
                  </p>
                </div>
              </div>

            
          <__PostsContainer className={classNames(localstyles.postsCont)}  /> 
            </CardContent>
            
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProfilePage;
