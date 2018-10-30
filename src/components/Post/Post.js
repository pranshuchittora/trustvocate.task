import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  cardImg: {
    width: "100%"
  }
};

function SimpleCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            {props.userInitials}
          </Avatar>
        }
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title={props.title}
        subheader={props.date}
      />
      <CardContent>
        <img
          className={classes.cardImg}
          src={props.imgSrc}
          alt=""
          style={{ maxHeight: "300px" }}
        />

        <Typography gutterBottom variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography component="p">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos,
          doloribus harum. Ullam enim quod, suscipit unde sed perspiciatis vero
          blanditiis debitis consequuntur vitae doloremque iure nesciunt
          officiis numquam dignissimos voluptatem fuga ut ab soluta.
          Necessitatibus reprehenderit hic explicabo sapiente ducimus!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined">
          Read more
        </Button>
      </CardActions>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
