import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import clsx from 'clsx';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from '@material-ui/core/CardContent';
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    flex: 1,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
export default function RecipeReviewCard({
  item: { user_id, product_id, image, product_name, product_description, date }
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const history = useHistory();
  const handleExpandClick = () => setExpanded(!expanded);
  const handleProviderClick = () => history.push(`/providers/${user_id}`);
  return (
    <div className="flex mt-10 rounded p-2" style={{ background: 'white', boxShadow: '2px 2px 8px 2px #C0C0C0' }}>
      <img style={{ width: 100 }} src={image} />
      <div style={{marginLeft:'300px'}}>
        <h3 className="text-xl">{product_name}</h3>
        <p>by Spriteuser</p>
        <p>{product_description}</p>
      </div>
    </div>
  );
};