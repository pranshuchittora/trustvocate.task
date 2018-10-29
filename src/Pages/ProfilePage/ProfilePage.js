import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";

import classNames from "classnames";
import { CardContent } from "@material-ui/core";
// Custom Imports
import __NavBar from "../../components/NavBar/NavBar";
import localstyles from "./ProfilePage.css";
function ProfilePage(props) {
  return (
    <div>
      <__NavBar />
      <Card >
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
              <p className={classNames(localstyles.textInline)}>{"Username"}</p>
              <p className={classNames(localstyles.textInline)}>
                pranshuchittora
              </p>
            </div>
            <div>
              <p className={classNames(localstyles.textInline)}>{"Email"}</p>
              <p className={classNames(localstyles.textInline)}>
                pranshuchittora17@gmail.com
              </p>
            </div>
            <div>
              <p className={classNames(localstyles.textInline)}>Contact No.</p>
              <p className={classNames(localstyles.textInline)}>
                +91-9998772219
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProfilePage;
